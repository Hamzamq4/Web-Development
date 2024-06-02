import React from "react";
import { Button } from "@/components/ui/button";
import heroPic from "/heroPic.png";
import timeline from "/timeline.png";
import hamzaPortrait from "/HamzaPortrait.jpeg";
import simonPortrait from "/SimonPortrait.jpeg";
import collectivePic from "/collectivePic.jpeg";
import { motion } from "framer-motion";

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

function About() {
  return (
    <>
      {/* Hero About Section Start */}
      <section className="justify-center items-center w-full flex pb-36">
        <div className="max-w-[1355px] flex-1 mx-10">
          {/* Top */}
          <motion.div
            className="bg-foreground rounded-[20px] pt-[120px] px-[110px] pb-[110px] shadow-custom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* title */}
            <motion.div
              className="flex-col items-start flex"
              variants={fadeInUp}
            >
              <div className="bg-black rounded-[6px] px-3 py-1 shadow-custom">
                <div className="text-customblue font-black uppercase">
                  About Us
                </div>
              </div>
              <div className="max-w-[624px] mt-3">
                <div className="leading-[72px] font-medium text-[64px] tracking-[-.64px]">
                  CPH's leading all-round{" "}
                  <span className="text-customblue"> Experts</span>
                </div>
              </div>
            </motion.div>
            {/* Body Text */}
            <motion.div className="mt-16 flex" variants={fadeInUp}>
              <div className="max-w-[315px] flex-1 mr-[115px]">
                <div>
                  <div className="text-[18px] font-[600] leading-[24px]">
                    Researchers | Designers | Developers
                  </div>
                </div>
                <div className="max-w-[312px] mt-[14px] mb-10">
                  <div className="text-[14px] leading-[24px] font-[400] block text-white/65">
                    We'll help you create a better experience for your customers
                  </div>
                </div>
                <div>
                  <Button className="bg-customblue rounded-[25px] text-[16px] font-[500] leading-[24px]">
                    Contact us now
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex items-stretch">
                <motion.div className="mr-6" variants={fadeInUp}>
                  <img
                    src={hamzaPortrait}
                    className="max-w-[100%] align-middle inline-block grayscale rounded-lg h-full object-cover"
                  />
                </motion.div>
                <motion.div className="mr-6" variants={fadeInUp}>
                  <img
                    src={collectivePic}
                    className="max-w-[100%] align-middle inline-block grayscale rounded-lg h-full object-cover"
                  />
                </motion.div>
                <motion.div className="mr-6" variants={fadeInUp}>
                  <img
                    src={simonPortrait}
                    className="max-w-[100%] align-middle inline-block grayscale rounded-lg h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          {/* Bottom */}
          <div></div>
        </div>
      </section>

      <section className="justify-center items-center w-full flex pb-36">
        <div className="max-w-[920px] flex-1 mx-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <div>
              <div className="justify-center items-center flex">
                <motion.div
                  className="bg-foreground rounded-[6px] py-1 px-3 shadow-custom"
                  variants={fadeInUp}
                >
                  <div className="text-customblue font-black uppercase">
                    {" "}
                    Experiences
                  </div>
                </motion.div>
              </div>
              <div className="justify-center flex items-center mt-5">
                <motion.div
                  className="text-[56px] leading-[64px] font-[500] tracking-[-.64px]"
                  variants={fadeInUp}
                >
                  Job <span className="text-customblue"> Experiences</span>
                </motion.div>
              </div>
            </div>

            <div className="mt-16 flex">
              {/* Left */}
              <motion.div
                className="flex-col flex-1 justify-end"
                variants={staggerContainer}
              >
                {/* Date for the Right-Side Card*/}
                <motion.div className="mt-0 mb-[203px]" variants={fadeInUp}>
                  <div className="justify-end flex">
                    <div className="text-[16px] font-[600] leading-[24px] block">
                      JAN 2024 - JAN 2024
                    </div>
                  </div>
                  <div className="mt-2 justify-end flex">
                    <div className="text-[16px] font-[400] leading-[24px] block">
                      Bachelor Project
                    </div>
                  </div>
                </motion.div>
                {/* Card for the Right-Side Date */}
                <motion.div
                  className="max-w-[400px] bg-foreground shadow-custom rounded-[16px] pt-[37px] pb-[32px] px-[32px]"
                  variants={fadeInUp}
                >
                  {/* Heading */}
                  <div className="flex">
                    <div className="w-[24px] h-[24px]">
                      <img
                        src={heroPic}
                        className="max-w-[100%] align-middle inline-block"
                      />
                    </div>
                    <div className="ml-[14px]">
                      <div className="text-[26px] font-[500] leading-[26px] text-customblue">
                        Spy Run
                      </div>
                    </div>
                  </div>
                  {/* Text */}
                  <div className="mt-4 mb-7">
                    <div className="text-[16px] font-[400] leading-[24px] block">
                      {" "}
                      Spy Run was developed to be a tool used to help kids with
                      Auditory Processing Disorder, as part of their training
                      program.
                    </div>
                  </div>
                </motion.div>
                {/* Date 2 for the Right-Side Card*/}
                <motion.div className="mt-12 mb-[203px]" variants={fadeInUp}>
                  <div className="justify-end flex">
                    <div className="text-[16px] font-[600] leading-[24px] block text-customblue">
                      SEP 2023 - JAN 2024
                    </div>
                  </div>
                  <div className="mt-2 justify-end flex">
                    <div className="text-[16px] font-[400] leading-[24px] block">
                      5th Semester Project
                    </div>
                  </div>
                </motion.div>
                {/* Card 2 for the Right-Side Date */}
                <motion.div
                  className="max-w-[400px] bg-foreground shadow-custom rounded-[16px] pt-[37px] pb-[32px] px-[32px]"
                  variants={fadeInUp}
                >
                  {/* Heading */}
                  <div className="flex">
                    <div className="w-[24px] h-[24px]">
                      <img
                        src={heroPic}
                        className="max-w-[100%] align-middle inline-block"
                      />
                    </div>
                    <div className="ml-[14px]">
                      <div className="text-[26px] font-[500] leading-[26px] text-customblue">
                        Virtual Gym Instructor
                      </div>
                    </div>
                  </div>
                  {/* Text */}
                  <div className="mt-4 mb-7">
                    <div className="text-[16px] font-[400] leading-[24px] block">
                      {" "}
                      To alliviate the pressures of going to the gym in a hectic
                      schedule, we created a virtual gym instructor to help you
                      workout from home.
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              {/* Middle */}
              <motion.div className="mx-[45px]" variants={fadeInUp}>
                <img
                  src={timeline}
                  className="max-w-[100%] inline-block align-middle"
                />
              </motion.div>
              {/* Right */}
              <motion.div
                className="flex-col flex-1 justify-start"
                variants={staggerContainer}
              >
                {/* Card for the left-side Date */}
                <motion.div
                  className="max-w-[400px] bg-foreground shadow-custom rounded-[16px] pt-[37px] pb-[32px] px-[32px]"
                  variants={fadeInUp}
                >
                  {/* Heading */}
                  <div className="flex">
                    <div className="w-[24px] h-[24px]">
                      <img
                        src={heroPic}
                        className="max-w-[100%] align-middle inline-block"
                      />
                    </div>
                    <div className="ml-[14px]">
                      <div className="text-[26px] font-[500] leading-[26px] text-customblue">
                        Bachelor Project
                      </div>
                    </div>
                  </div>
                  {/* Text */}
                  <div className="mt-4 mb-7">
                    <div className="text-[16px] font-[400] leading-[24px] block">
                      {" "}
                      Our Bachelor Project is about creating a tool, that will
                      used a supplement to help kids that have issues with their
                      phonological awareness.
                    </div>
                  </div>
                </motion.div>
                {/* Date for the left-side Card*/}
                <motion.div className="mt-12 mb-[203px]" variants={fadeInUp}>
                  <div className="justify-start flex">
                    <div className="text-[16px] font-[600] leading-[24px] block text-customblue">
                      JAN 2023 - JAN 2024
                    </div>
                  </div>
                  <div className="mt-2 justify-start flex">
                    <div className="text-[16px] font-[400] leading-[24px] block">
                      4th Semester Project | Project with Materiale Cenetret
                    </div>
                  </div>
                </motion.div>
                {/* Card 2 for the left-side Date */}
                <motion.div
                  className="max-w-[400px] bg-foreground shadow-custom rounded-[16px] pt-[37px] pb-[32px] px-[32px]"
                  variants={fadeInUp}
                >
                  {/* Heading */}
                  <div className="flex">
                    <div className="w-[24px] h-[24px]">
                      <img
                        src={heroPic}
                        className="max-w-[100%] align-middle inline-block"
                      />
                    </div>
                    <div className="ml-[14px]">
                      <div className="text-[26px] font-[500] leading-[26px] text-customblue">
                        VR Driving Simulator
                      </div>
                    </div>
                  </div>
                  {/* Text */}
                  <div className="mt-4 mb-7">
                    <div className="text-[16px] font-[400] leading-[24px] block">
                      {" "}
                      On our 5th semester, we created a VR Driving Simulator to
                      help student experience real life scenarios in a safe
                      space.
                    </div>
                  </div>
                </motion.div>

                {/* Date 2 for the left-side Card*/}
                <motion.div className="mt-12 mb-[203px]" variants={fadeInUp}>
                  <div className="justify-start flex">
                    <div className="text-[16px] font-[600] leading-[24px] block text-customblue">
                      SEP 2023 - JAN 2024
                    </div>
                  </div>
                  <div className="mt-2 justify-start flex">
                    <div className="text-[16px] font-[400] leading-[24px] block">
                      Course Exam in Advanced HMI
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;
