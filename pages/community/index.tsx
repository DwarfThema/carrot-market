import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "@components/floating-button";
import Layout from "@components/layout";
import useSWR from "swr";
import { Post, User } from "@prisma/client";
import useCoords from "@libs/client/useCoords";
import clinet from "@libs/server/client";

interface PostWihtUesr extends Post {
  user: User;
  _count: {
    wonderings: number;
    answers: number;
  };
}

interface PostsResponse {
  /* ok: boolean; */
  posts: PostWihtUesr[];
}
const Community: NextPage<PostsResponse> = ({ posts }) => {
  /*   const { latitude, longitude } = useCoords();
  const { data } = useSWR<PostsResponse>(
    latitude && longitude
      ? `/api/posts?latitude=${latitude}&longitude=${longitude}`
      : null
  );
  console.log(data); */

  return (
    <Layout hasTabBar title="동네생활">
      <div className="space-y-4 divide-y-[2px]">
        {
          /* data?. */ posts?.map((post) => (
            <Link key={post.id} href={`/community/${post.id}`}>
              <a className="flex cursor-pointer flex-col pt-4 items-start">
                <span className="flex ml-4 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  동네질문
                </span>
                <div className="mt-2 px-4 text-gray-700">
                  <span className="text-purple-500 font-medium">Q.</span>{" "}
                  {post?.question}
                </div>
                <div className="mt-5 px-4 flex items-center justify-between w-full text-gray-500 font-medium text-xs">
                  <span>{post?.user?.name}</span>
                  <span></span>
                </div>
                <div className="flex px-4 space-x-5 mt-3 text-gray-700 py-2.5 border-t   w-full">
                  <span className="flex space-x-2 items-center text-sm">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>궁금해요 {post._count?.wonderings}</span>
                  </span>
                  <span className="flex space-x-2 items-center text-sm">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      ></path>
                    </svg>
                    <span>답변 {post._count?.answers}</span>
                  </span>
                </div>
              </a>
            </Link>
          ))
        }
        <FloatingButton href="/community/write">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  console.log("스테틱 페이지 생성중");

  const posts = await clinet.post.findMany({ include: { user: true } });
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
    /* revalidate: 60, */
    //revalidate 시간은 해당 페이지가 얼마나 자주 포스트가 올라오느냐에 따라서 시간을 정하면 되는 것이다.
  };
}

export default Community;
