import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    //여기에서 id는 string이거나 string[] 이다. toString()로 바꿔주고 +로 int로 바꿔줘야함
    session: { user: sessionUser },
  } = req;

  if (!id) return res.status(404).end();

  const alreadyExists = await client?.fav.findFirst({
    //findUnique는 오직 unique 필드에서만 사용 할 수 있으니 findFirst 를 사용하자.
    where: {
      productId: +id.toString(),
      userId: sessionUser?.id,
    },
  });
  if (alreadyExists) {
    await client?.fav.delete({
      where: {
        id: alreadyExists.id,
      },
    });
  } else {
    await client?.fav.create({
      data: {
        user: {
          connect: {
            id: sessionUser?.id,
          },
        },
        product: {
          connect: {
            id: +id.toString(),
          },
        },
      },
    });
  }

  res.json({ ok: true });
}
export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler: handler,
  })
);
