import Link from "next/link"
import Image from "next/image"
import pic from "../images/image7.jpg"
import pic2 from "../images/image5.jpg"
export default function About() {
    return (
        <div className="bg-blue-100">
            <div className="flex flex-row justify-center items-center">
                <div> <Image src={pic} alt="pic" className="h-80 w-100 hidden sm:block" /></div>
                <div>
                    <Image src={pic2} alt="pic" className="h-80 w-100 block"></Image>
                </div>
            </div>

            <h1 className="text-2xl text-blue-400 font-semibold p-4 sm:text-6xl">About Me</h1>
            <p className="text-xs sm:text-2xl text-blue-900 italic text-wrap p-2"
            >Beelog aimed to tell the viewers about the importance of AI.
                It covers almost all the details of Artificial Intelligence that how AI is ruling the world.
                AI has revolutionized the technology and now it has become very popular in every aspect of life.You will come across various useful information
                about AI after reading these blogs.Do let me know your feedback for the blogs and contact me if you have any queries.</p>
            <Link href="./contact">
                <button className="text-white m-3  text-xl bg-blue-500 w-40 h-10 rounded-md shadow-xl hover:bg-blue-400">
                    Contact
                </button></Link>
        </div>
    )
}