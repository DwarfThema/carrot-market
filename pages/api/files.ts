import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const response = await (
    await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ID}/images/v1/direct_upload`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CF_TOKEN}`,
        },
      }
    )
  ).json();

  console.log(response);

  res.json({
    ok: true,
    ...response.result,
  });
}

export default withHandler({
  methods: ["GET"],
  handler: handler,
  isPrivate: false,
});
