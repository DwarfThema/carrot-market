import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import client from "@libs/server/client";

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

  console.log(req.session.user);

  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "carrotsession",
  password: "dCqw7XKTpBHhvbnXZzJqFnpUTDkWGRAC",
});
