import { StaticImageData } from "next/image"
import Image from "next/image"
import pic from "../images/image1.jpg"
import pic2 from "../images/images2.jpg"
import pic3 from "../images/image3.jpg"
import pic4 from "../images/image4.jpg"
import pic5 from "../images/image5.jpg";
import pic6 from "../images/image6.jpg"
import Link from "next/link"
type Items = {
    id: number,
    title: string,
    description: string,
    image: StaticImageData,
    slug: string
}
const cards: Items[] = [
    {
        id: 1,
        title: "What is Artificial Intelligence",
        description: "Artificial intelligence (AI) is a branch of computer science focused on creating systems that can perform tasks typically requiring human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
        image: pic,
        slug: "Artificial-Intelligence"
    },
    {
        id: 2,
        title: "How it started",
        description: "AI began in the mid-20th century when pioneers like Alan Turing and John McCarthy explored machine intelligence and computational problem-solving. The 1956 Dartmouth Conference marked AI's formal inception, introducing concepts of reasoning and learning in machines.",
        image: pic2,
        slug: "Introduction"
    },
    {
        id: 3,
        title: "The Evolution of Artificial Intelligence",
        description: "The evolution of artificial intelligence began with early symbolic reasoning systems and rule-based programs, progressing to machine learning and deep learning techniques that enable self-learning and adaptability.",
        image: pic3,
        slug: "Evolution"
    }, {
        id: 4,
        title: "Applications of AI in Everyday Life",
        description: "Artificial Intelligence has vast applications in everyday life of a individual.It has made the life of individuals easy and effective ",
        image: pic4,
        slug: "uses"
    }, {
        id: 5,
        title: "AI in Creative Fields: Art, Music, and Writing",
        description: "AI is revolutionizing creative fields by generating art, composing music, and assisting in writing with tools like DALL·E, OpenAI's MuseNet, and ChatGPT. These innovations enable artists and creators to explore new possibilities while blending human creativity with machine intelligence",
        image: pic5,
        slug: "Applications"

    },
    {
        id: 6,
        title: 'The Future of AI',
        description: "AI is set to revolutionize the digital era by minimizing the need for manual tasks like content writing, transforming how work is done globally",
        image: pic6,
        slug: "scope-of-AI"
    }
]
export default function Blogs() {
    
    return (
        <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between items-center  bg-blue-100 gap-6 p-4">
            {cards.map((card) => (
                <div 
                    className="flex flex-col justify-between items-center bg-blue-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-transform transform hover:-translate-y-2 w-full sm:w-80"
                >
                    <Image
                        src={card.image}
                        alt="pic"
                        width={150}
                        height={300}
                        className="rounded-md"
                    />
                    <h1 className="text-lg font-bold text-center mt-4">{card.title}</h1>
                    <p className="text-sm text-center mt-2">{card.description}</p>
                    <Link  key={card.id} href={`/blogs/${card.slug}`}><button className="mt-4 text-white bg-blue-600 hover:bg-blue-700 font-semibold text-sm sm:text-base lg:text-lg py-2 px-4 rounded">
                        Read More
                    </button></Link>
                </div>
            ))}
        </div>
    );
}
