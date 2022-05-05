import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@libs/server/withSession";
import clinet from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
  } = req;

  const post = await clinet.post.findUnique({
    where: {
      id: +id.toString(),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
      _count: {
        select: {
          answers: true,
          wonderings: true,
        },
      },
      answers: {
        select: {
          answer: true,
          id: true,
          user: {
            select: { id: true, name: true, avatar: true },
          },
        },
      },
    },
  });

  res.json({
    ok: true,
    post,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler: handler,
  })
);
