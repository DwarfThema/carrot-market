import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { Product } from "@prisma/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { id } = req.query;
  //여기에서 id는 string이거나 string[] 이다.

  const product = await client.product.findUnique({
    where: {
      id: +id.toString(),
      // id는 string[]일 수도 있으니 toString 으로 확실히 string으로, 이후에 +를 붙여 number로 변경한다.
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  });
  const terms = product?.name.split(" ").map((word) => ({
    name: {
      contains: word,
    },
  }));

  const relatedProducts = await client.product.findMany({
    where: {
      OR: terms,
      AND: {
        id: {
          not: product?.id,
        },
      },
    },
  });

  res.json({ ok: true, product, relatedProducts });
}
export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler: handler,
  })
);
