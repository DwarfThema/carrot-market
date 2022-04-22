import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="dark dark:md:hover:bg-teal-800 w-screen">
      <span className="text-[50px]">배고파..</span>
      <div className="bg-[url('../public/good.jpeg')] bg-cover w-[400px] h-[400px]"></div>
    </div>
  );
};

export default Home;
