import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import useFetchProjects from "@/API/useFetchProjects";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const { APIData, showAPIData } = useFetchProjects();

  const containerVariants = {
    initial: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const imageVariants = {
    initial: { scale: 1.1 },
    visible: {
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  if (!showAPIData)
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="w-52 h-52 border-8 border-customblue border-dashed rounded-full animate-spin"></div>
      </div>
    );

  return (
    <>
      <section className="justify-center items-center pt-[100px] pb-[200px] flex">
        <div className="max-w-[1355px] flex-1 ml-[40px] mr-[40px]">
          <div className="flex-col flex items-center">
            <span className="mb-5 p-2 bg-foreground rounded-lg align-center shadow-custom">
              <h2 className="text-customblue text-sm font-bold">Projects</h2>
            </span>
            <h1 className="text-5xl font-bold">Take a look at our Projects</h1>
            <span className="text-slate-400 text-xl mt-2">
              Some of which have already influenced a lot of people positively!
            </span>
          </div>

          <div className="sticky justify-center items-center flex mt-14">
            <div className="sticky origin-top justify-center items-center">
              <AnimatePresence>
                <motion.div
                  initial="initial"
                  animate="visible"
                  exit="exit"
                  variants={containerVariants}
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {APIData.map((data, index) => {
                    if (
                      data.properties.ProjectName.title.length > 0 &&
                      data.properties.ShortSum.rich_text.length > 0 &&
                      data.properties.LongSum.rich_text.length > 0 &&
                      data.properties.Media.files.length > 0 &&
                      data.properties.Tags.multi_select.length > 0
                    ) {
                      return (
                        <motion.a
                          key={data.id}
                          initial="initial"
                          whileInView="visible"
                          exit="exit"
                          viewport={{ once: false, amount: 0.25 }}
                          variants={itemVariants}
                          href={`/projects/${data.id}`}
                          className="bg-foreground max-w-[1160px] flex-col shadow-custom p-[24px] flex rounded-xl mt-5 relative"
                          style={{ zIndex: index }}
                        >
                          <motion.img
                            src={data.properties.Media.files[0].file.url}
                            alt=""
                            className="h-[540px] w-[1160px] rounded-lg relative overflow-hidden"
                            variants={imageVariants}
                          />

                          <motion.div className="justify-between flex relative flex-col">
                            <motion.div className="flex flex-wrap gap-x-3 gap-y-4 mt-[14px]">
                              {data.properties.Tags.multi_select.map((tag) => (
                                <motion.div
                                  key={tag.id}
                                  className="border border-customblue bg-foreground/20 px-4 py-2 font-bold rounded-lg flex items-center justify-center text-sm text-white whitespace-nowrap hover:bg-customblue/65"
                                  variants={itemVariants}
                                >
                                  {tag.name}
                                </motion.div>
                              ))}
                            </motion.div>
                            <motion.div variants={itemVariants}>
                              <motion.div className="mt-[20px] text-4xl font-bold">
                                {
                                  data.properties.ProjectName.title[0]
                                    .plain_text
                                }
                              </motion.div>
                            </motion.div>
                          </motion.div>
                          <motion.div
                            className="max-w-[800px]"
                            variants={itemVariants}
                          >
                            <motion.div className="mt-[20px] text-xl text-white/85">
                              {data.properties.ShortSum.rich_text[0].plain_text}
                            </motion.div>
                          </motion.div>

                          <motion.div
                            className="w-12 h-12 bg-customblue rounded-full flex justify-center items-center absolute bottom-0 right-0 text-white hover:bg-customblue/65 hover:text-white m-3"
                            variants={itemVariants}
                          >
                            <AiOutlineArrowRight className="rotate-[-45deg]" />
                          </motion.div>
                        </motion.a>
                      );
                    }
                    return null;
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
