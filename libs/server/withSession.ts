import { withIronSessionApiRoute } from "iron-session/next";

const cookieOpts = {
  cookieName: "carrotsession",
  password: process.env.COOKIE_PASSWORD!,
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOpts);
}
