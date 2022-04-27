import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };

  const token = await client.token.create({
    data: {
      payload: "1234",
      user: {
        connectOrCreate: {
          where: {
            ...payload,
          },
          create: {
            name: "이름 모를 버블이",
            ...payload,
          },
        },
      },
    },
  });
  console.log(token);
  //token 생성

  /*  if (email) {
    const user = await client.user.findUnique({
      where: {
        email: email,
      },
    });
    //유저가 있는지 확인
    if (!user) {
      console.log("유저가 읎당");

      await client.user.create({
        data: {
          name: "이름 모를 버블이", //디폴트 이름
          email: email,
        },
      });
      //유저가 없으면 신규 생성
    }
    console.log(user);
  } */
  return res.status(200).end();
}

export default withHandler("POST", handler);
