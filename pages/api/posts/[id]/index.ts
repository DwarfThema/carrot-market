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
    session: { user },
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

  if (!post) return res.status(404).end();

  const isWondering = Boolean(
    await clinet.wondering.findFirst({
      where: {
        postId: +id.toString(),
        userId: user?.id,
      },
      select: {
        id: true,
      },
    })
  );

  res.json({
    ok: true,
    post,
    isWondering,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler: handler,
  })
);
