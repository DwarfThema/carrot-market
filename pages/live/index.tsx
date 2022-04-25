import { NextPage } from "next";
import Layout from "../../components/layout";

const Live: NextPage = () => {
  return (
    <Layout hasTabBar title="스트리밍">
      <div className="py-10 space-y-4 divide-y-[1.5px]">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i} className="pt-4  px-4">
            <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
            <h1 className=" text-2xl mt-2 font-bold text-gray-900">
              호챠챠의 요리교실
            </h1>
          </div>
        ))}
        <button className="fixed bottom-24 right-5 bg-purple-400 hover:bg-purple-500 transition-colors cursor-pointer rounded-full p-4 shadow-xl text-white border-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Live;
