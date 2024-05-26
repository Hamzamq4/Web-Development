import * as React from "react";
import collectivePic from "/collectiveAvatar.svg";
import hamzagithub from "/HamzaGithub.svg";
import simongithub from "/simonGithub.svg";
import simonlinkedin from "/simonLinkedin.svg";
import hamzalinkedin from "/hamzaLinkedin.svg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const copyrightMessage = () => {
    const copyright = String.fromCodePoint(0x00a9);
    const year = "2024";
    const companyName = "Hamza & Simon";

    return <span>{`${copyright}  ${year} | ${companyName}`}</span>;
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      {/* Footer Section */}
      <section className="justify-center items-center pb-6 flex w-full">
        {/* Footer Container */}
        <div className="max-w-[1355px] flex-1 ml-10 mr-10">
          {/* Footer Upper */}
          <motion.div
            className="flex"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Footer Upper Left Upper */}
            <motion.div
              className="max-w-[450px] mr-6 flex-1"
              variants={fadeInUp}
            >
              <div className="rounded-lg bg-foreground justify-center items-center flex-col pt-[106px] pb-[48px] pr-[40px] pl-[40px] relative flex shadow-custom">
                <div className="text-3xl font-bold">Hamza & Simon</div>
                <div className="text-center mt-4">
                  We believe in the power of design to transform ideas into
                  tangible, user-friendly software.
                </div>
                <motion.img
                  src={collectivePic}
                  alt=""
                  className="max-w-[36%] max-h-[36%] min-w-[25%] min-h-[25%] absolute bottom-auto top-[-20%] align-middle inline-block mx-auto"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
              {/* Footer Upper Left Upper Ends */}
              {/* Footer Upper Left Lower */}
              <div className="grid gap-x-6 gap-y-6 mt-6 grid-cols-4">
                <motion.a
                  href="https://github.com/Hamzamq4"
                  className="w-24 h-24 bg-foreground rounded-2xl justify-center items-center flex shadow-custom hover:border hover:border-customblue"
                  whileHover={{ scale: 1.1 }}
                  variants={fadeInUp}
                >
                  <img
                    src={hamzagithub}
                    alt="Hamza Github"
                    className="max-w-[100%] align-middle inline-block"
                  />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/hmqureshi/"
                  className="w-24 h-24 bg-foreground rounded-2xl justify-center items-center flex shadow-custom hover:border hover:border-customblue"
                  whileHover={{ scale: 1.1 }}
                  variants={fadeInUp}
                >
                  <img
                    src={hamzalinkedin}
                    alt="Hamza Linkedin"
                    className="max-w-[100%] align-middle inline-block"
                  />
                </motion.a>
                <motion.a
                  href="https://github.com/Simsmeister"
                  className="w-24 h-24 bg-foreground rounded-2xl justify-center items-center flex shadow-custom hover:border hover:border-customblue"
                  whileHover={{ scale: 1.1 }}
                  variants={fadeInUp}
                >
                  <img
                    src={simongithub}
                    alt="Simon Github"
                    className="max-w-[100%] align-middle inline-block"
                  />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/simon-sand-andersen-a0a2a52bb/"
                  className="w-24 h-24 bg-foreground rounded-2xl justify-center items-center flex shadow-custom hover:border hover:border-customblue"
                  whileHover={{ scale: 1.1 }}
                  variants={fadeInUp}
                >
                  <img
                    src={simonlinkedin}
                    alt="Simon Linkedin"
                    className="max-w-[100%] align-middle inline-block"
                  />
                </motion.a>
              </div>
              {/* Footer Upper Left Lower Ends */}
            </motion.div>
            {/* Footer Upper Right */}
            <motion.div
              className="bg-foreground rounded-lg flex-col flex-1 justify-center items-center pt-[80px] pb-[80px] flex shadow-custom"
              variants={fadeInUp}
            >
              {/* Footer Upper Right Text */}
              <div className="text-center text-white text-6xl max-w-[700px]">
                Got a project in mind?
                <br />
                <span className="text-slate-400"> Let's talk</span>
              </div>
              {/* Footer Upper Right Text Ends */}
              {/* Footer Upper Right Button */}
              <Button className="mt-8 bg-customblue text-white rounded-full pt-[35px] pb-[35px] pr-[108px] pl-[108px] bg-auto text-3xl font-bold hover:bg-customblue/60">
                <a href="/contact">Get in touch</a>
              </Button>
            </motion.div>
          </motion.div>
          {/* Footer Upper Ends */}
          {/* Footer Lower */}
          <motion.div
            className="h-[72px] bg-foreground shadow-custom rounded-2xl mt-[24px] flex justify-between pt-[20px] pb-[20px] pr-[32px] pl-[32px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <a href="/" className="text-white font-extrabold items-center flex">
              <span>{copyrightMessage()}</span>
            </a>
            <div className="items-center flex">
              <a href="/About" className="ml-[28px]">
                About
              </a>
              <a href="/Project" className="ml-[28px]">
                Projects
              </a>
              <a href="/Contact" className="ml-[28px]">
                Contact
              </a>
            </div>
          </motion.div>
        </div>
        {/* Footer Container Ends */}
      </section>
      {/* Footer Section End */}
    </>
  );
};

export default Footer;
