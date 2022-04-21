import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-5 grid gap-10 min-h-screen">
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <span className="font-semibold text-3xl">결제를 확인해 주세요</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div className="flex justify-between my-2 odd:bg-blue-50 even:bg-yellow-100 ">
              <span className="text-gray-500">갈색 의자</span>
              <span className="font-semibold">19,000₩</span>
            </div>
          ))}
        </ul>
        {["a", "b", "c", ""].map((c, i) => (
          <li key={i} className="bg-red-400 py-2 empty:hidden">
            {c}
          </li>
        ))}
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>전체 금액</span>
          <span className="font-semibold">38,000₩</span>
        </div>
        <button
          className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4
        hover:bg-teal-500 hover:text-black
        active:bg-yellow-500 focus:text-red-500 transition"
        >
          결제하기
        </button>
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
      <div className="bg-white p-10 rounded-2xl shadow-xl ">
        <div className="flex justify-between items-center mb-5">
          <span>👈🏻</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-md p-2 rounded-sm">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-lg">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">45,000 ₩</span>
            <button className="bg-blue-500 py-2.5 px-8  text-center text-sm text-white rounded-lg">
              장바구니에 넣기
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl "></div>
    </div>
  );
};

export default Home;
