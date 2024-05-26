import React, { useState } from "react";
import { Button } from "../src/components/ui/button";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import aau from "/AAU.png";
import useSubmitContactForm from "@/API/useSubmitContactForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("General Question");
  const [message, setMessage] = useState("");
  const { handleSubmit, isLoading } = useSubmitContactForm();

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const isSubmitted = await handleSubmit({ fullName, email, topic, message });
    if (isSubmitted) {
      setFullName("");
      setEmail("");
      setTopic("General Question");
      setMessage("");
    }
  };

  return (
    <>
      {/* Contact Section */}
      <motion.section
        className="pt-24 pb-20 w-full justify-center items-center flex"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-[1355px] p-8 justify-center items-center flex-col flex"
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6 w-full mx-auto items-center justify-center">
            {/* Mail */}
            <motion.a
              className="bg-foreground p-8 rounded-lg flex items-center gap-4 shadow-custom max-w-[368px] justify-center"
              href="mailto:hamza.simon.aau@gmail.com"
              variants={fadeInUp}
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
            </motion.a>
            {/* Call */}
            <motion.a
              className="bg-foreground p-8 rounded-lg flex items-center gap-4 shadow-custom max-w-[368px] justify-center"
              href="tel:+4512345678"
              variants={fadeInUp}
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
            </motion.a>
          </div>

          <motion.div
            className="mx-auto rounded-lg bg-foreground p-12 shadow-custom w-full"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form
              className="grid grid-cols-2 gap-6"
              onSubmit={handleFormSubmit}
            >
              <div className="flex flex-col mb-2">
                <p className="mb-1">Full Name</p>
                <input
                  type="text"
                  placeholder="John Appleseed"
                  className="bg-zinc-800 p-4 rounded-lg text-white"
                  value={fullName}
                  onChange={handleInputChange(setFullName)}
                  id="fullName"
                  autoComplete="name"
                />
              </div>
              <div className="flex flex-col mb-2">
                <p className="mb-1">Mail</p>
                <input
                  type="email"
                  placeholder="johnappleseed@gmail.com"
                  className="bg-zinc-800 p-4 rounded-lg text-white"
                  value={email}
                  onChange={handleInputChange(setEmail)}
                  id="email"
                  autoComplete="email"
                />
              </div>
              <div className="flex flex-col mb-2 col-span-2">
                <p className="mb-1">Topic</p>
                <select
                  className="bg-zinc-800 p-4 rounded-lg text-white"
                  value={topic}
                  onChange={handleInputChange(setTopic)}
                  id="topic"
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
                  className="bg-zinc-800 p-4 rounded-lg text-white"
                  value={message}
                  onChange={handleInputChange(setMessage)}
                  id="message"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="bg-customblue p-4 rounded-lg col-span-2 hover:bg-customblue/60 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message →"}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </motion.section>
      {/* End Contact Section */}

      <motion.section
        className="pt-24 pb-36 w-full justify-center items-center flex"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-[1160px] flex-1 ml-10 mr-10"
          variants={fadeInUp}
        >
          <div className="max-w-[438px] flex-col flex-1 justify-center items-center mx-auto mb-10 flex">
            {/* Location Tag */}
            <motion.div
              className="bg-foreground shadow-custom px-3 pt-1 pb-1 rounded-sm"
              variants={fadeInUp}
            >
              <span className="text-customblue font-bold text-sm">
                Location
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              className="mt-3 overflow-hidden pb-3"
              variants={fadeInUp}
            >
              <div className="text-white font-bold text-3xl">
                Find us in
                <span className="text-zinc-500 font-bold text-3xl ml-2">
                  Copenhagen
                </span>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-x-6 gap-y-4">
            {/* item 1 */}
            <motion.a
              href="https://maps.app.goo.gl/YXcYQjGXBCtqDnHX8"
              className="max-w-[371px] bg-foreground shadow-custom rounded-lg justify-start items-center pt-5 pb-5 pr-10 pl-10 flex"
              variants={fadeInUp}
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
            </motion.a>
            {/* item 2 */}
            <motion.a
              href="https://maps.app.goo.gl/YXcYQjGXBCtqDnHX8"
              className="max-w-[371px] bg-foreground shadow-custom rounded-lg justify-start items-center pt-5 pb-5 pr-10 pl-10 flex"
              variants={fadeInUp}
            >
              <div>
                <span className="max-w-[100%] align-middle inline-block">
                  <FaBuilding />
                </span>
              </div>
              <div className="ml-3">
                <div className="text-white font-bold text-xl"> Building B</div>
              </div>
            </motion.a>
            {/* item 3 */}
            <motion.a
              href="https://maps.app.goo.gl/YXcYQjGXBCtqDnHX8"
              className="max-w-[371px] bg-foreground shadow-custom rounded-lg justify-start items-center pt-5 pb-5 pr-10 pl-10 flex"
              variants={fadeInUp}
            >
              <div>
                <span className="max-w-[100%] align-middle inline-block">
                  <FaLocationDot />
                </span>
              </div>
              <div className="ml-3">
                <div className="text-white font-bold text-xl">
                  Frederikskaj 12, 2450
                </div>
              </div>
            </motion.a>
          </div>
          <motion.div className="rounded-2xl mt-6" variants={fadeInUp}>
            <img src={aau} className="w-full h-[400px] rounded-lg" />
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Contact;
