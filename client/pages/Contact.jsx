import React, { useState } from "react";
import { Button } from "../src/components/ui/button";
import { AiFillMail, AiFillPhone } from "react-icons/ai";

function Contact() {
  // State for form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("General Question");
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { fullName, email, topic, message };

    // Post request to backend
    try {
      const response = await fetch("http://localhost:8000/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to send email");
      alert("Message sent successfully!");
      // Optionally reset the form
      setFullName("");
      setEmail("");
      setTopic("General Question");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    }
  };

  return (
    <section className="pt-24 pb-36 w-full justify-center items-center flex">
      <div className="max-w-[1355px] p-8 justify-center items-center flex-col flex">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6 w-full mx-auto items-center justify-center">
          {/* Mail */}
          <a
            className="bg-foreground p-8 rounded-lg flex items-center gap-4 shadow-custom max-w-[368px] justify-center"
            href="mailto:hqures21@student.aau.dk"
          >
            <div className="bg-purple-600 p-3 rounded-full w-16 h-16 flex justify-center items-center">
              <AiFillMail />
            </div>
            <div className="ml-6">
              <div className="font-semibold text-white text-xl">Mail</div>
              <div className="mt-2 text-zinc-500">hqures21@student.aau.dk</div>
            </div>
          </a>
          {/* Call */}
          <a
            className="bg-foreground p-8 rounded-lg flex items-center gap-4 shadow-custom max-w-[368px] justify-center"
            href="tel:+45 12 34 56 78"
          >
            <div className="bg-orange-600 p-3 rounded-full w-16 h-16 flex justify-center items-center">
              <AiFillPhone />
            </div>
            <div className="ml-6">
              <div className="font-semibold text-white text-xl">Call</div>
              <div className="mt-2 text-zinc-500">+45 12 34 56 78</div>
            </div>
          </a>
        </div>

        <div className="mx-auto rounded-lg bg-foreground p-12 shadow-custom w-full">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-2">
              <p className="mb-1">Full Name</p>
              <input
                type="text"
                placeholder="John Appleseed"
                className="bg-zinc-800 p-4 rounded-lg"
                value={fullName}
                onChange={handleInputChange(setFullName)}
              />
            </div>
            <div className="flex flex-col mb-2">
              <p className="mb-1">Mail</p>
              <input
                type="email"
                placeholder="johnappleseed@gmail.com"
                className="bg-zinc-800 p-4 rounded-lg"
                value={email}
                onChange={handleInputChange(setEmail)}
              />
            </div>
            <div className="flex flex-col mb-2 col-span-2">
              <p className="mb-1">Topic</p>
              <select
                className="bg-zinc-800 p-4 rounded-lg"
                value={topic}
                onChange={handleInputChange(setTopic)}
              >
                <option>General Question</option>
                <option>Academic Question</option>
                <option>Project Proposal</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col mb-2 col-span-2">
              <p className="mb-1">Message</p>
              <textarea
                placeholder="Type your message here"
                className="bg-zinc-800 p-4 rounded-lg"
                value={message}
                onChange={handleInputChange(setMessage)}
              ></textarea>
            </div>
            <Button
              type="submit"
              className="bg-green-500 p-4 rounded-lg col-span-2 hover:bg-green-600 transition-colors"
            >
              Send Message →
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
