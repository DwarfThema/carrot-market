import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-10">
      <textarea
        className="mt-1 shadow-sm w-full focus:ring-purple-500 rounded-md border-gray-300 focus:border-purple-500 "
        rows={4}
        placeholder="질문 내용을 작성해주세요."
      />
      <button className="mt-2 w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none ">
        게시하기
      </button>
    </form>
  );
};

export default Write;
