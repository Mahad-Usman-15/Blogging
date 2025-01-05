"use client"
import  Image  from "next/image"
import { StaticImageData }   from "next/image"

import pic from "../../images/image1.jpg"
import pic2 from "../../images/image7.jpg"
import pic3 from "../../images/image3.jpg"
import pic4 from "../../images/image10.png"
import pic5 from "../../images/image5.jpg";
import pic6 from "../../images/image6.jpg"
import React, { useState } from "react"

type Items = {
    id: number,
    title: string,
    description: string,
    detaildes:string
    slug: string
    image:any|StaticImageData
}
const cards: Items[] = [
    {
        id: 1,
        title: "What is Artificial Intelligence",
        description: "Artificial intelligence (AI) is a branch of computer science focused on creating systems that can perform tasks typically requiring human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
        detaildes:"Artificial intelligence (AI) is a branch of computer science focused on creating systems that can perform tasks typically requiring human intelligence, such as learning, reasoning, problem-solving, and decision-making. AI systems are designed to analyze data, identify patterns, and make predictions or decisions with minimal human intervention. Machine learning, a subset of AI, enables systems to improve over time through experience and continuous learning. Deep learning, a more advanced form, uses neural networks to process vast amounts of data and perform complex tasks like image recognition and natural language processing. AI is widely applied in various fields, including healthcare, finance, transportation, and education. It powers virtual assistants, recommendation systems, and autonomous vehicles. AI is also enhancing creativity by generating art, music, and written content. While it offers immense benefits, it also raises ethical concerns regarding privacy, bias, and accountability. As AI continues to evolve, it holds the potential to transform industries and redefine human interaction with technology. Ensuring responsible development and equitable access will be key to maximizing its benefits.",
        slug: "Artificial-Intelligence",
        image:pic
    },
    {
        id: 2,
        title: "How it started",
        description: "AI began in the mid-20th century when pioneers like Alan Turing and John McCarthy explored machine intelligence and computational problem-solving. The 1956 Dartmouth Conference marked AI's formal inception, introducing concepts of reasoning and learning in machines.",
        detaildes:"AI began in the mid-20th century when pioneers like Alan Turing and John McCarthy laid the foundation for machine intelligence and computational problem-solving. Alan Turing's concept of a universal machine and his famous Turing Test established early frameworks for evaluating machine intelligence. John McCarthy, often called the father of AI, coined the term Artificial Intelligence and envisioned machines that could mimic human thought processes. The 1956 Dartmouth Conference marked the formal inception of AI as a field, bringing together researchers to discuss reasoning, learning, and symbolic processing in machines. Early AI systems focused on problem-solving and rule-based logic, achieving limited success in domains like chess and theorem proving. By the 1980s, advancements in computer power enabled the development of expert systems capable of mimicking human decision-making in specialized fields. The introduction of machine learning in the 1990s shifted AI toward data-driven approaches, allowing systems to learn from experience. Deep learning, emerging in the 2010s, revolutionized AI by leveraging neural networks for tasks like image and speech recognition. Today, AI continues to evolve, driven by advancements in hardware, data availability, and algorithms. Its journey from theoretical concepts to real-world applications showcases its transformative potential.",       
        slug: "Introduction",
        image:pic2
    },
    {
        id: 3,
        title: "The Evolution of Artificial Intelligence",
        description: "The evolution of artificial intelligence began with early symbolic reasoning systems and rule-based programs, progressing to machine learning and deep learning techniques that enable self-learning and adaptability.",
        detaildes:"The evolution of artificial intelligence began with early symbolic reasoning systems and rule-based programs, which relied on predefined rules to solve problems. These early AI systems, while groundbreaking, were limited in their ability to handle complex or unpredictable tasks. The introduction of machine learning marked a significant shift, enabling AI to analyze data and improve its performance over time without explicit programming. Algorithms like decision trees and support vector machines paved the way for data-driven AI applications. The emergence of deep learning in the 2010s revolutionized the field by using neural networks to process vast amounts of data and perform complex tasks like image recognition and natural language processing. AI systems became capable of self-learning and adapting to new situations with minimal human intervention. This evolution has enabled breakthroughs in robotics, healthcare, autonomous vehicles, and more. Modern AI now integrates reinforcement learning and generative models to tackle increasingly sophisticated problems. As AI continues to evolve, it is bridging the gap between human intelligence and machine capabilities, redefining technological boundaries. This progression highlights the dynamic growth of AI from basic rule-based systems to advanced, self-learning technologies.",
        slug: "Evolution",
        image:pic3
    }, {
        id: 4,
        title: "Applications of AI in Everyday Life",
        description: "Artificial Intelligence has vast applications in everyday life of a individual.It has made the life of individuals easy and effective ",
        detaildes:"Artificial Intelligence (AI) has vast applications in the everyday lives of individuals, significantly enhancing convenience and efficiency. AI-powered virtual assistants like Siri and Alexa simplify tasks by managing schedules, answering queries, and controlling smart devices. Recommendation systems in platforms like Netflix and Amazon personalize user experiences, suggesting content and products tailored to preferences. In healthcare, AI enables accurate diagnostics and personalized treatment plans, improving overall patient care. Transportation is being transformed with AI-driven navigation systems and autonomous vehicles, ensuring safer and faster commutes. AI in education provides personalized learning experiences, helping students achieve better outcomes. Financial systems utilize AI for fraud detection, secure transactions, and effective investment strategies. Smart home technologies powered by AI optimize energy usage and enhance security. AI-driven tools for writing, designing, and content creation streamline creative processes. Overall, AI has seamlessly integrated into daily routines, making life more efficient, connected, and productive.",
        slug: "uses",
        image:pic4
    }, {
        id: 5,
        title: "AI in Creative Fields: Art, Music, and Writing",
        description: "AI is revolutionizing creative fields by generating art, composing music, and assisting in writing with tools like DALL·E, OpenAI's MuseNet, and ChatGPT. These innovations enable artists and creators to explore new possibilities while blending human creativity with machine intelligence",
        detaildes:"AI is revolutionizing creative fields by generating art, composing music, and assisting in writing with tools like DALL·E, OpenAI's MuseNet, and ChatGPT. These innovations enable artists and creators to explore new possibilities while blending human creativity with machine intelligence. AI-powered platforms are enabling the creation of intricate designs, photorealistic images, and unique artworks that were previously unimaginable. In music, AI algorithms can compose melodies, harmonize complex pieces, and even emulate the styles of famous composers. Writers are leveraging AI to draft content, enhance storytelling, and improve grammar and coherence. These advancements are not replacing human creativity but amplifying it, offering tools for experimentation and inspiration. Artists can now focus on conceptualization while AI handles repetitive tasks, fostering greater productivity. Moreover, AI democratizes creativity by making high-end tools accessible to amateurs and professionals alike. The fusion of AI and human talent is transforming creative expression, opening doors to entirely new artistic landscapes. As technology evolves, the collaboration between humans and machines will redefine the boundaries of creativity.",
        slug: "Applications",
        image:pic5

    },
    {
        id: 6,
        title: 'The Future of AI',
        description: "AI is set to revolutionize the digital era by minimizing the need for manual tasks like content writing, transforming how work is done globally",
        detaildes:"AI is set to revolutionize the digital era by minimizing the need for manual tasks like content writing, transforming how work is done globally.The future of Artificial Intelligence (AI) promises to revolutionize industries and reshape how we work, learn, and interact. With AI-driven automation, productivity will soar as manual tasks are minimized, enabling greater innovation. Healthcare will see groundbreaking advancements through improved diagnostics, personalized treatments, and accelerated medical research. AI will power smart cities, optimizing traffic flow, energy usage, and public services. Creative fields will continue to thrive with AI generating art, music, and literature. Autonomous vehicles and AI-driven transportation will redefine mobility and logistics, while education will benefit from personalized learning platforms. However, the rise of AI also presents ethical challenges, highlighting the importance of responsible governance. By augmenting human intelligence instead of replacing it, AI offers limitless possibilities, making it essential to strike a balance to ensure equitable benefits for all.",
        slug: "scope-of-AI",
        image:pic6
    }
]
export default function BlogDetail({ params }: { params: { slug: string } }) {
  const blog = cards.find((data) => data.slug === params.slug);
  const [formData, setFormData] = useState({
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Save the form data to local storage
    localStorage.setItem("contactForm", JSON.stringify(formData));
    alert("Your message has been saved!");
    setFormData({
      message: "",
    });
  };
  return (
    <div className="p-6 bg-blue-100">
      <Image 
        src={blog?.image} 
        alt="image" 
        className=" hidden sm:block  w-full h-80 object-cover rounded-md"
      />
      <h1 className="text-2xl font-bold mb-4 text-blue-900 underline">
        {blog?.title}
      </h1>
      <p className="text-blue-600 mt-4">{blog?.detaildes}</p>
      <form className="flex justify-center items-start flex-col mt-4">
        <textarea
          name="message"
          placeholder="Comment"
          rows={6}
          className="w-80 sm:w-[300px] text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-600"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button
          type="button"
          className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-40 mt-6"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
