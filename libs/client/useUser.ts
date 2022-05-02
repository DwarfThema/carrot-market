import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useUser() {
  const { data, error } = useSWR("/api/users/me", fetcher);
  //   const router = useRouter();
  // return router.replace("/enter");
  //replace / push 둘중에 쓰면되는데 replace 는 아예 페이지 자체를 대체하기 때문에 뒤로 돌아갈 수도 없게 만든다.
  return data;
}
