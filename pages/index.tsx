import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-5 flex flex-col space-y-5">
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <span className="font-semibold text-3xl">결제를 확인해 주세요</span>
        <div className="flex justify-between my-2 mt-4">
          <span className="text-gray-500">회색 의자</span>
          <span className="font-semibold">19,000₩</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">회색 의자</span>
          <span className="font-semibold">19,000₩</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>전체 금액</span>
          <span className="font-semibold">38,000₩</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto">
          결제하기
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl ">
        <div className="bg-blue-500 p-6 pb-14 ">
          <span className="text-white text-2xl">프로필</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between ">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">총 주문</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 relative -right-4 rounded-full"></div>
            <div className="flex flex-col  items-center">
              <span className="text-sm  text-gray-500">총 금액</span>
              <span className="font-medium">40,000₩</span>
            </div>
          </div>

          <div className="relative flex flex-col items-center -mt-5">
            <span className="text-lg font-medium">박준배</span>
            <span className="text-sm text-gray-500">대한민국, 서울</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl "></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl "></div>
    </div>
  );
};

export default Home;
