"use client"
import React, { useState } from "react";
export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleInputChange = (e:any) => {
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
        
        // Clear the form after submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      };
    return (
        <div className="h-screen flex-col flex justify-center items-center bg-blue-100 p-4 ">
            <div>
                <h1 className="text-2xl sm:text-5xl text-center text-blue-400 font-bold py-7">Get In Touch</h1>
            </div>
            <form className="mt-3 space-y-4 w-[300px]">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button
          type="button"
          className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
        </div>
    );
}
