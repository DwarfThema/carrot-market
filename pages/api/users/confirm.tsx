import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;

  const tokenExists = await client.token.findUnique({
    where: {
      payload: token,
    },
    include: { user: true },
  });
  if (!tokenExists) return res.status(404).end();

  req.session.user = {
    id: tokenExists?.userId,
  };
  await req.session.save();

  await client.token.deleteMany({
    where: {
      userId: tokenExists?.userId,
    },
  });
  res.json({ ok: true });

  res.status(200).end();
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler: handler,
    isPrivate: false,
  })
);
