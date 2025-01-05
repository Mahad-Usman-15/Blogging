import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row justify-center sm:justify-between items-center bg-blue-100">

      <div className="text-2xl sm:text-3xl mt-5 sm:ml-20 sm:mt-5 sm:mb-5 text-blue-400 font-bold">
        <h1>Beelog</h1>
      </div>


      <div className="w-full">
        <ul className="flex flex-col sm:flex-row justify-center items-center text-blue-600 gap-4 sm:gap-7 lg:gap-10 sm:ml-22 mt-5 sm:mt-0 sm:mb-0">
          <Link href="/" className="hover:text-blue-300">
            <li className="text-xl sm:text-lg px-4 py-2">Home</li>
          </Link>
          <Link href="/about" className="hover:text-blue-300">
            <li className="text-xl sm:text-lg px-4 py-2">About</li>
          </Link>
          <Link href="/blogs" className="hover:text-blue-300">
            <li className="text-xl sm:text-lg px-4 py-2">Blogs</li>
          </Link>
          <Link href="/contact" className="hover:text-blue-300">
            <li className="text-xl sm:text-lg px-4 py-2">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
