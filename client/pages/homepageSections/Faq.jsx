import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

function FAQ() {
  const questionItems = [
    {
      id: 1,
      value: "item-1",
      trigger: "What is Medialogy?",
      content:
        "Medialogy is what we would describe as a broad IT-focused education. We work with problem-based and user-centred mindset. The education covers everything from mobile development, Computer Vision to VR and Audio Processing",
    },
    {
      id: 2,
      value: "item-2",
      trigger: "What is your Bachelor about?",
      content:
        "Our Bachelor is about phonological awareness. More detail to come",
    },
    {
      id: 3,
      value: "item-3",
      trigger: "What are your core skills?",
      content:
        "The benefit of our education is that we have a lot of core skills. Within programming we possess a variety of skills in C#, Python, JavaScript and much more. We also have experience with Unity and Figma. Bob's your uncle, there nothing we cannot do.",
    },
    {
      id: 4,
      value: "item-4",
      trigger: "What is your working timeline?",
      content:
        "We need a minimum of 6 months to deliver what we consider a minimal viable product. From then on development speeds on and we can complete a project within a year. Of course this can vary depending on the complexity of the project.",
    },
    {
      id: 5,
      value: "item-5",
      trigger: "What are your certifications?",
      content:
        "At the moment, we don't have any certifications. However, our education has given us a lot. We have completed different sets of courses, however not taken any exam to complete the certification. We are working on it.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section className="justify-center items-center w-full flex pb-[200px]">
        <div className="max-w-[758px] flex-1 flex-col justify-center items-center mx-10 flex">
          <motion.div
            className="flex-col justify-center items-center flex"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="bg-foreground rounded-[6px] px-3 pb-1 pt-1 shadow-custom"
              variants={itemVariants}
            >
              <div className=" text-sm font-bold leading-6 text-customblue">
                FAQ
              </div>
            </motion.div>

            <motion.div
              className="text-[50px] leading-[64px] font-black tracking-[-.64px] mt-5"
              variants={itemVariants}
            >
              Frequently Asked{" "}
              <span className="text-customblue">Questions </span>
            </motion.div>
          </motion.div>
          <div className="mt-7 w-full">
            <motion.div
              className="h-auto max-w-[758px] flex-col justify-start items-start flex"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {questionItems.map((item) => (
                <Accordion
                  key={item.id}
                  type="single"
                  collapsible
                  className="w-full"
                >
                  <AccordionItem value={item.value} className="mt-3 mb-3">
                    <motion.div variants={itemVariants}>
                      <AccordionTrigger>{item.trigger}</AccordionTrigger>
                      <AccordionContent>{item.content}</AccordionContent>
                    </motion.div>
                  </AccordionItem>
                </Accordion>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
