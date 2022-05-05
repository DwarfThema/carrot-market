import type { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { Post } from "@prisma/client";
import { useRouter } from "next/router";

interface WirteForm {
  question: string;
}

interface WirteResponse {
  ok: boolean;
  post: Post;
}

const Write: NextPage = () => {
  const { register, handleSubmit } = useForm<WirteForm>();

  const [post, { loading, data }] = useMutation<WirteResponse>("/api/posts");

  const onValid = (data: WirteForm) => {
    if (loading) return;
    post(data);
  };

  const router = useRouter();
  useEffect(() => {
    if (data && data.ok) {
      router.push(`/community/${data.post.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack title="커뮤니티 글 작성">
      <form onClick={handleSubmit(onValid)} className="p-4 space-y-4">
        <TextArea
          register={register("question", { required: true, minLength: 5 })}
          required
          placeholder="질문을 작성해주세요."
        />
        <Button text={loading ? "로딩중입니다..." : "게시하기"} />
      </form>
    </Layout>
  );
};

export default Write;
