import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useUser() {
  const router = useRouter();
  const [user, setUesr] = useState();
  useEffect(() => {
    fetch("/api/users/me")
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          return router.replace("/enter");
          //replace / push 둘중에 쓰면되는데 replace 는 아예 페이지 자체를 대체하기 때문에 뒤로 돌아갈 수도 없게 만든다.
        }
        setUesr(data.profile);
      });
  }, []);
  return user;
}
