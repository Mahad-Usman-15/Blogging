import Link from "next/link";
export default function Main() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-blue-100 sm:mb-6">

      <div className="text-center mb-10  px-5">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-medium text-gray-700 mb-15">
          All Information You Need To Know About
        </h2>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-blue-800">
          Artificial Intelligence
        </h1>
      </div>


      <div className="w-32 sm:w-40 lg:w-48 h-10 sm:h-12 lg:h-14 bg-blue-500 flex justify-center items-center hover:bg-blue-300 rounded-lg shadow-md transition-all duration-300">
        <Link href="./blogs"> <button className="text-white font-semibold text-sm sm:text-base lg:text-lg">
          Read Blogs
        </button></Link>
      </div>
    </div>
  );
}
