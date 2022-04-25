import { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-gray-700 text-sm p-2 border rounded-md border-gray-300">
          <p>
            얼마에 파실거에요? 저 가격 다 알아보고 와서 사기칠 생각은 마세요
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-gray-700 text-sm p-2 border rounded-md border-gray-300">
          <p>2만원이요</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-gray-700 text-sm p-2 border rounded-md border-gray-300">
          <p>실화입니까?</p>
        </div>
      </div>
      <div className="fixed w-full mx-auto max-w-md bottom-2 left-0 right-0 inset-x-0">
        <div className="flex items-center relative">
          <input
            type="text"
            className="shaodw-sm rounded-full w-full border-gray-300  focus:outline-none focus:border-purple-400"
          />
          <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <button className="flex items-center bg-purple-400 rounded-full px-3 focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 hover:bg-purple-500 cursor-pointer text-sm text-white">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
