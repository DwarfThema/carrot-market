import { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <label className="w-full cursor-pointer flex items-center justify-center border-2 border-gray-300 border-dashed py-6 h-48 rounded-md text-gray-600 hover:text-purple-300 hover:border-purple-300 ">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input type="file" className="hidden" />
        </label>
      </div>
      <div className="my-5">
        <label
          htmlFor="price"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          가격
        </label>
        <div className="rounded-md shadow-sm relative flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
            <span className="text-gray-500 text-sm ">₩</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-purple-300 focus:border-purple-300 pl-7"
          />
          <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
            <span>원</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          설명
        </label>
        <div>
          <textarea
            rows={4}
            className="mt-1 shadow-sm w-full rounded-md border-gray-300 focus:border-purple-300"
          />
        </div>
      </div>
      <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-purple-300 focus:outline-none w-full">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
