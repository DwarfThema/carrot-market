import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    session: { user },
    body: { name, price, descrpition },
  } = req;

  if (req.method === "POST") {
    const steram = client.stream.create({
      data: {
        name,
        price,
        descrpition,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    res.json({
      ok: true,
      steram,
    });
  }

  if (req.method === "GET") {
  }
}
export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler: handler,
  })
);
