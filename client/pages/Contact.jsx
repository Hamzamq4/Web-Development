import React, { useState } from "react";
import { Button } from "../src/components/ui/button";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { useToast } from "@/components/ui/use-toast";
import { AiFillPushpin } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";

function Contact() {
  // State for form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("General Question");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

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
      toast({
        title: "Success",
        description: "Your mail has been sent successfully. Thank you!",
        status: "success",
        variant: "default",
      });
      // Optionally reset the form
      setFullName("");
      setEmail("");
      setTopic("General Question");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);

      toast({
        title: "Error",
        description: "There was an error sending your mail. Try Again Later",
        status: "error",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      {/* Contact Section */}
      <section className="pt-24 pb-20 w-full justify-center items-center flex">
        <div className="max-w-[1355px] p-8 justify-center items-center flex-col flex">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6 w-full mx-auto items-center justify-center">
            {/* Mail */}
            <a
              className="bg-foreground p-8 rounded-lg flex items-center gap-4 shadow-custom max-w-[368px] justify-center"
              href="hamza.simon.aau@gmail.com"
            >
              <div className="bg-blue-600 rounded-full min-w-16 min-h-16 flex justify-center items-center">
                <AiFillMail />
              </div>
              <div className="ml-6">
                <div className="font-semibold text-white text-xl">Mail</div>
                <div className="mt-2 text-zinc-500 text-sm">
                  HamzaSimon@gmail.com
                </div>
              </div>
            </a>
            {/* Call */}
            <a
              className="bg-foreground p-8 rounded-lg flex items-center gap-4 shadow-custom max-w-[368px] justify-center"
              href="tel:+45 12 34 56 78"
            >
              <div className="bg-green-600  rounded-full w-16 h-16 flex justify-center items-center">
                <AiFillPhone />
              </div>
              <div className="ml-6">
                <div className="font-semibold text-white text-xl">Call</div>
                <div className="mt-2 text-zinc-500 text-sm">
                  +45 12 34 56 78
                </div>
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
                className="bg-customblue p-4 rounded-lg col-span-2 hover:bg-sky-700 transition-colors"
              >
                Send Message →
              </Button>
            </form>
          </div>
        </div>
      </section>
      {/* End Contact Section */}

      <section className="pt-24 pb-36 w-full justify-center items-center flex">
        <div className="max-w-[1160px] flex-1 ml-10 mr-10">
          <div className="max-w-[438px] flex-col flex-1 justify-center items-center mx-auto mb-10 flex">
            {/* Location Tag */}
            <div className="bg-foreground shadow-custom px-3 pt-1 pb-1 rounded-sm">
              <span className="text-customblue font-bold text-sm">
                Location
              </span>
            </div>

            {/* Heading*/}
            <div className="mt-3 overflow-hidden pb-3">
              <div className="text-white font-bold text-3xl">
                Find us in
                <span className="text-zinc-500 font-bold text-3xl ml-2">
                  Copenhagen
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-6 gap-y-4">
            {/* item 1 */}
            <a
              href="https://maps.app.goo.gl/YXcYQjGXBCtqDnHX8"
              className="max-w-[371px] bg-foreground shadow-custom rounded-lg justify-start items-center pt-5 pb-5 pr-10 pl-10 flex"
            >
              <div>
                <span className="max-w-[100%] align-middle inline-block">
                  <FaSchool />
                </span>
              </div>
              <div className="ml-3">
                <div className="text-white font-bold text-xl">
                  Aalborg University
                </div>
              </div>
            </a>
            {/* item 2 */}
            <a
              href="https://maps.app.goo.gl/YXcYQjGXBCtqDnHX8"
              className="max-w-[371px] bg-foreground shadow-custom rounded-lg justify-start items-center pt-5 pb-5 pr-10 pl-10 flex"
            >
              <div>
                <span className="max-w-[100%] align-middle inline-block">
                  <FaBuilding />
                </span>
              </div>
              <div className="ml-3">
                <div className="text-white font-bold text-xl"> Building B</div>
              </div>
            </a>
            {/* item 3 */}
            <a
              href="https://maps.app.goo.gl/YXcYQjGXBCtqDnHX8"
              className="max-w-[371px] bg-foreground shadow-custom rounded-lg justify-start items-center pt-5 pb-5 pr-10 pl-10 flex"
            >
              <div>
                <span className="max-w-[100%] align-middle inline-block">
                  <FaLocationDot />
                </span>
              </div>
              <div className="ml-3">
                <div className="text-white font-bold text-xl">
                  {" "}
                  Frederikskaj 12, 2450
                </div>
              </div>
            </a>
          </div>
          <div className="rounded-2xl mt-6">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Frederikskaj%2012%20Copenhagen+(Aalborg%20University)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="w-full h-[400px] rounded-lg"
            ></iframe>
            <script
              type="text/javascript"
              src="https://embedmaps.com/google-maps-authorization/script.js?id=b4c3b81a7d297de5936fd16dc5f8f56edfb1de39"
            ></script>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
