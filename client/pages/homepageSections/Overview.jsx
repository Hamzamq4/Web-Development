import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import heroPic from "/heroPic.png";
import figma from "/Figma.png";
import unity from "/Unity.png";
import python from "/Python.png";
import csharp from "/CSharp.png";
import collectivePic from "/collectivePic.png";

const animationVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

function Overview() {
  return (
    <>
      {/* Section 2 */}
      <section className="justify-center items-center w-full pb-36 flex">
        <div className="max-w-[1355px] flex-1 ml-10 mr-10">
          {/* Tag */}
          <motion.div
            className="items-center mb-3 flex"
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={animationVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-md bg-foreground px-3 pt-1 pb-1 shadow-custom">
              <div className="text-sm font-bold leading-6 text-customblue">
                Available for work
              </div>
            </div>
          </motion.div>
          {/* Body text */}
          <motion.div
            className="max-w-[624px]"
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={animationVariants}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[50px] leading-[64px] font-black tracking-[-.64px]">
              Achieving <span className="text-customblue"> Excellence</span> in
              Medialogy since 2021
            </div>
          </motion.div>
          {/* Main */}
          <div className="grid grid-cols-2 gap-x-2 gap-y-4 mt-14 auto-cols-fr">
            {/* Col 1 */}
            <motion.div
              initial="initial"
              whileInView="animate"
              exit="exit"
              variants={animationVariants}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-foreground rounded-xl px-10 pb-10 pt-[30px] shadow-custom">
                <div className="relative">
                  <Tabs defaultValue="experiences" className="relative">
                    <TabsList className="max-w-[217px] bg-black text-white rounded-[5px] pt-1 pb-1">
                      <TabsTrigger value="experiences">Experiences</TabsTrigger>
                      <TabsTrigger value="funFacts">Fun Facts</TabsTrigger>
                    </TabsList>
                    <TabsContent value="experiences" className="block relative">
                      <div className="mt-10">
                        {/* parent 1 */}
                        <div className="grid grid-cols-3 gap-4 border-b border-white/15 justify-between pt-5 pb-5 auto-cols-fr">
                          {/* item 1 */}
                          <div className="flex items-center ml-0 mr-0">
                            <div className="ml-4">
                              <div className="text-[16px] font-medium leading-[24px] block">
                                Phonological Awareness
                              </div>
                            </div>
                          </div>
                          {/* item 2 */}
                          <div className="flex items-center ml-0 mr-0 ">
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mr-4"></div>
                            <div>
                              <div className="text-white text-sm font-normal">
                                Bachelor Project
                              </div>
                            </div>
                          </div>
                          {/* item 3 */}
                          <div className="flex items-center ml-0 mr-0 ">
                            <div className="text-white font-normal text-sm">
                              FEB 2024 - JUN 2024
                            </div>
                          </div>
                        </div>

                        {/* parent 2 */}
                        <div className="grid grid-cols-3 gap-4 border-b border-white/15 justify-between pt-5 pb-5 auto-cols-fr">
                          {/* item 1 */}
                          <div className="flex items-center ">
                            <div className="ml-4">
                              <div className="text-[16px] font-medium leading-[24px] block">
                                Virtual Driving Simulator
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center ml-0 mr-0 ">
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mr-4"></div>
                            <div>
                              <div className="text-white text-sm font-normal">
                                5th Semester Project
                              </div>
                            </div>
                          </div>
                          {/* item 3 */}
                          <div className="flex items-center ml-0 mr-0 ">
                            <div className="text-white font-normal text-sm">
                              SEP 2023 - JAN 2024
                            </div>
                          </div>
                        </div>
                        {/* parent 3 */}
                        <div className="grid grid-cols-3 gap-4 border-b border-white/15 justify-between pt-5 pb-5 auto-cols-fr">
                          {/* item 1 */}
                          <div className="flex items-center ">
                            <div className="ml-4">
                              <div className="text-[16px] font-medium leading-[24px] block">
                                VR Horror Game
                              </div>
                            </div>
                          </div>
                          {/* item 2 */}
                          <div className="flex items-center ml-0 mr-0 ">
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mr-4"></div>
                            <div>
                              <div className="text-white text-sm font-normal">
                                VR Project
                              </div>
                            </div>
                          </div>
                          {/* item 3 */}
                          <div className="flex items-center ml-0 mr-0 ">
                            <div className="text-white font-normal text-sm">
                              SEP 2023 - JAN 2024
                            </div>
                          </div>
                        </div>
                        {/* parent 4 */}
                        <div className="grid grid-cols-3 gap-4 border-b border-white/15 justify-between pt-5 pb-5 auto-cols-fr">
                          {/* item 1 */}
                          <div className="flex items-center ">
                            <div className="ml-4">
                              <div className="text-[16px] font-medium leading-[24px] block">
                                Virtual Gym Instructor
                              </div>
                            </div>
                          </div>
                          {/* item 2 */}
                          <div className="flex items-center ml-0 mr-0 ">
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mr-4"></div>
                            <div>
                              <div className="text-white text-sm font-normal">
                                Design Project
                              </div>
                            </div>
                          </div>
                          {/* item 3 */}
                          <div className="flex items-center ml-0 mr-0 ">
                            <div className="text-white font-normal text-sm">
                              SEP 2023 - JAN 2024
                            </div>
                          </div>
                        </div>

                        {/* parent 5 */}
                        <div className="grid grid-cols-3 gap-4 border-b border-white/15 justify-between pt-5 pb-5 auto-cols-fr">
                          {/* item 1 */}
                          <div className="flex items-center ">
                            <div className="ml-4">
                              <div className="text-[16px] font-medium leading-[24px] block">
                                SpyRun
                              </div>
                            </div>
                          </div>
                          {/* item 2 */}
                          <div className="flex items-center ml-0 mr-0 ">
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mr-4"></div>
                            <div>
                              <div className="text-white text-sm font-normal">
                                4th Semester Project
                              </div>
                            </div>
                          </div>

                          {/* item 3 */}
                          <div className="flex items-center ml-0 mr-0">
                            <div className="text-white font-normal text-sm">
                              JAN 2023 - JUN 2023
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="funFacts">
                      {/* parent 1 */}
                      <div className="border-b border-white/15 justify-between pt-5 pb-5">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-[13px] font-medium leading-[24px] block">
                              Hamza and Simon have a fierce competition ongoing
                              in Table Tennis.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* parent 2 */}
                      <div className="border-b border-white/15 justify-between pt-5 pb-5">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-[13px] font-medium leading-[24px] block">
                              Hamza and Simon are Real Madrid and FC Barcelona
                              fans respectively. Naturally this means intense
                              debates
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* parent 3 */}
                      <div className="border-b border-white/15 justify-between pt-5 pb-5">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-[13px] font-medium leading-[24px] block">
                              When in work mode, Hamza and Simon have a work
                              accent - which both acknowledges to be very
                              effective {"(and funny)"}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* parent 4 */}
                      <div className="border-b border-white/15 justify-between pt-5 pb-5">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-[13px] font-medium leading-[24px] block">
                              The duo has decided to celebrate the completion of
                              the oral examination for their bachelor, by doing
                              the iconic "SUI" celebration invented by none
                              other than Christiano Ronaldo!
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* parent 5 */}
                      <div className="border-b border-white/15 justify-between pt-5 pb-5">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-[13px] font-medium leading-[24px] block">
                              Hamza and Simon are sometimes to the point of
                              annoyance to others in their group, very calm and
                              optimistic even in the busiest of situations.
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              <div className="mt-6">
                <motion.div
                  className="flex"
                  initial="initial"
                  whileInView="animate"
                  exit="exit"
                  variants={animationVariants}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-foreground rounded-[6px] px-3 pt-1 pb-1 shadow-custom">
                    <div className="text-customblue text-[14px] leading-[24px] font-[600]">
                      Available for Work
                    </div>
                  </div>
                </motion.div>
                <div className="grid grid-cols-4 gap-x-6 gap-y-4 mt-6 auto-cols-fr">
                  <motion.div
                    className="bg-foreground shadow-custom w-[124px] h-[124px] rounded-[16px] justify-center items-center flex"
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    variants={animationVariants}
                    transition={{ duration: 0.9 }}
                  >
                    <img
                      src={figma}
                      className="max-w-[80%] align-middle inline-block"
                    />
                  </motion.div>
                  <motion.div
                    className="bg-foreground shadow-custom w-[124px] h-[124px] rounded-[16px] justify-center items-center flex"
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    variants={animationVariants}
                    transition={{ duration: 1 }}
                  >
                    <img
                      src={python}
                      className="max-w-[80%] align-middle inline-block"
                    />
                  </motion.div>
                  <motion.div
                    className="bg-foreground shadow-custom w-[124px] h-[124px] rounded-[16px] justify-center items-center flex"
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    variants={animationVariants}
                    transition={{ duration: 1.1 }}
                  >
                    <img
                      src={csharp}
                      className="max-w-[80%] align-middle inline-block"
                    />
                  </motion.div>
                  <motion.div
                    className="bg-foreground shadow-custom w-[124px] h-[124px] rounded-[16px] justify-center items-center flex"
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    variants={animationVariants}
                    transition={{ duration: 1.2 }}
                  >
                    <img
                      src={unity}
                      className="max-w-[80%] align-middle inline-block"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
            {/* Col 2 */}
            <motion.div
              className="rounded-[16px] w-[568px] h-[751px]"
              initial="initial"
              whileInView="animate"
              exit="exit"
              variants={animationVariants}
              transition={{ duration: 1.3 }}
            >
              <img
                src={collectivePic}
                className="h-full w-full max-w-[100%] object-cover rounded-[16px] grayscale"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Section 2 End */}
    </>
  );
}

export default Overview;
