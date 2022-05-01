import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import client from "@libs/server/client";

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
  if (!tokenExists) res.status(404).end();

  console.log(tokenExists);

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
