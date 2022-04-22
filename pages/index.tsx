import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-white p-5 rounded-2xl">
      <p className="first-letter:text-7xl first-letter:hover:text-red-500 first-line:text-blue-500">
        뭐하는데!! <br />
        짜증나게
      </p>
    </div>
  );
};

export default Home;
