import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_KEY!);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(10000 + Math.random() * 900000) + ""; // + "" 를 붙이면 stringify 된다.

  const token = await client.token.create({
    data: {
      payload: payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "이름 모를 버블이",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);
  //token 생성

  if (phone) {
    /* 
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!,
      body: `인증 번호는 ${payload}입니다.`,
    });
    console.log(message); */
  } else if (email) {
    /* 
    const email = await mail.send({
      from: "junhoya2@naver.com",
      to: "junhoya2@naver.com",
      subject: "캐럿 마켓 인증 메일입니다.",
      text: `Your token is ${payload}`,
      html: `<h1>환영합니다</h1></br><strong>해당 번호를 인증해주세요 : ${payload}</strong>`,
    });
    console.log(email); */
  }

  return res.json({
    ok: true,
  });
}
//phone 으로 보냈을때 인증번호

export default withHandler({
  methods: ["POST"],
  handler: handler,
  isPrivate: false,
});
