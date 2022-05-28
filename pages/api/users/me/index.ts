import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const profile = await client.user.findUnique({
      where: {
        id: req.session.user?.id,
      },
    });

    res.json({
      ok: true,
      profile,
    });
  }

  if (req.method === "POST") {
    const {
      session: { user },
      body: { email, phone, name, avatarId },
    } = req;

    const currentUser = await client.user.findUnique({
      where: {
        id: user?.id,
      },
    });

    if (avatarId) {
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          avatar: avatarId,
        },
      });
      res.json({
        ok: true,
      });
    }

    if (email && email !== currentUser?.email) {
      const alreadyExist = Boolean(
        await client.user.findUnique({
          where: {
            email: email,
          },
          select: {
            id: true,
          },
        })
      );

      if (alreadyExist) {
        return res.json({
          ok: false,
          error: "이메일이 이미 존재합니다.",
        });
      }

      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          email: email,
        },
      });
      res.json({
        ok: true,
      });
    }
    if (phone && phone !== currentUser?.phone) {
      const alreadyExist = Boolean(
        await client.user.findUnique({
          where: {
            phone: phone,
          },
          select: {
            id: true,
          },
        })
      );

      if (alreadyExist) {
        return res.json({
          ok: false,
          error: "휴대번호가 이미 존재합니다.",
        });
      }

      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          phone: phone,
        },
      });
      res.json({
        ok: true,
      });
    }
    if (name) {
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          name: name,
        },
      });
      res.json({
        ok: true,
      });
    }

    res.json({
      ok: true,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler: handler,
  })
);
