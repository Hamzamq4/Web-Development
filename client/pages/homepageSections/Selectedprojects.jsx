import React, { useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import useFetchProjects from "@/API/fetchProjects";
import { motion, AnimatePresence } from "framer-motion";
function Selectedprojects() {
  const { APIData } = useFetchProjects();

  const variants = {
    initial: { scale: 0.85, opacity: 0.5, y: 130 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "Tween", stiffness: 30, damping: 20 },
    },
    exit: {
      scale: 1,
      opacity: 0,
      y: -50,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <section className="justify-center items-center flex pb-36 w-full">
        {/* Container */}
        <div className="max-w-[1160px] flex-1 mx-10 relative">
          {/* Block */}
          <div className="max-w-[1160px] relative">
            {/* Content */}

            <div className="sticky">
              {/* Heading */}

              <div className="static justify-center items-center pb-1 flex">
                <div className="flex-col justify-center items-center flex pb-2">
                  <div className="bg-foreground rounded-[6px] px-3 pb-1 pt-1 shadow-custom">
                    <span className="text-customblue font-bold ">Projects</span>
                  </div>
                  <div className="mt-5 overflow-hidden">
                    <div className="leading-[64px] text-[56px] font-black">
                      Selected <span className="text-customblue">Projects</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub Content */}
              <div className="sticky justify-center items-center flex mt-14">
                <div className="sticky origin-top  justify-center items-center">
                  <AnimatePresence>
                    {APIData.map((data, index) => {
                      if (
                        data.properties.ProjectName.title.length > 0 &&
                        data.properties.Media.files.length > 0 &&
                        data.properties.Tags.multi_select.length > 0
                      ) {
                        return (
                          <motion.a
                            initial="initial"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={variants}
                            href={`/projects/${data.id}`}
                            key={data.id}
                            className="bg-foreground max-w-[1160px] flex-col shadow-custom p-[24px] flex rounded-xl mt-5 relative"
                            style={{ zIndex: index }} // Ensures overlapping effect
                          >
                            <motion.img
                              src={data.properties.Media.files[0].file.url}
                              alt=""
                              className="h-[540px] w-[1160px]  rounded-lg relative overflow-hidden"
                            />

                            <motion.div className="justify-between flex relative flex-col">
                              <motion.div className="flex flex-wrap gap-x-3 gap-y-4 mt-[14px]">
                                {data.properties.Tags.multi_select.map(
                                  (tag) => (
                                    <motion.div
                                      key={tag.id}
                                      className="border border-customblue bg-foreground/20 px-4 py-2 font-bold rounded-lg flex items-center justify-center text-sm text-white whitespace-nowrap hover:bg-customblue/65"
                                    >
                                      {tag.name}
                                    </motion.div>
                                  )
                                )}
                              </motion.div>
                              <motion.div>
                                <motion.div className="mt-[20px] text-4xl font-bold">
                                  {
                                    data.properties.ProjectName.title[0]
                                      .plain_text
                                  }
                                </motion.div>
                              </motion.div>

                              <motion.div className="w-12 h-12 bg-customblue rounded-full flex justify-center items-center absolute bottom-0 right-0 text-white hover:bg-customblue/65 hover:text-white">
                                <AiOutlineArrowRight className=" rotate-[-45deg]" />
                              </motion.div>
                            </motion.div>
                          </motion.a>
                        );
                      }
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Selectedprojects;
