import Layout from "@components/layout";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import Link from "next/link";

interface Post {
  title: string;
  date: string;
  category: string;
  slug: string;
}

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout title="블로그" seoTitle="블로그">
      <h1 className="font-semibold text-lg text-center my-5">
        가장 최근 포스트
      </h1>
      <ul>
        {posts.map((post, index) => (
          <div key={index} className="mb-10">
            <Link href={`/blog/${post.slug}`}>
              <a>
                <span className="text-lg text-red-500">{post.title}</span>
                <div>
                  <span>
                    {post.date} / {post.category}
                  </span>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </ul>
    </Layout>
  );
};

export async function getStaticProps() {
  //getServerSideProps와 다르게 딱 한번 요청된다. (서버사이드는 요청할때마다 요청된다.)
  const blogPosts = readdirSync("./posts").map((file) => {
    const content = readFileSync(`./posts/${file}`, "utf-8");
    const [slug, _] = file.split(".");
    // 01-first-post.md 중 01-first-post만 갖고갈 수 있다.
    return { ...matter(content).data, slug };
  });

  return {
    props: {
      posts: blogPosts,
    },
  };
}

export default Blog;
