import React, { useEffect } from "react";
import cardImg1 from "/vite.svg";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Services() {
  const cardItems = [
    {
      id: 1,
      image: cardImg1,
      title: "User-Centered",
      content:
        "We cater the needs of our solutions based on the requirements of the target audience",
      animation: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.3 },
        exit: {
          opacity: 0,
          transition: { duration: 0.5 },
        },
      },
    },
    {
      id: 2,
      image: cardImg1,
      title: "User-Centered 2",
      content:
        "We cater the needs of our solutions based on the requirements of the target audience",
      animation: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.6 },
        exit: {
          opacity: 0,
          transition: { duration: 0.5 },
        },
      },
    },
    {
      id: 3,
      image: cardImg1,
      title: "User-Centered 3",
      content:
        "We cater the needs of our solutions based on the requirements of the target audience",
      animation: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.9 },
        exit: {
          opacity: 0,
          transition: { duration: 0.5 },
        },
      },
    },
  ];

  return (
    <section className="justify-center items-center w-full flex pb-36">
      <div className="max-w-[1355px] flex-1 mx-10">
        <div className="justify-start items-center flex overflow-hidden pb-2">
          <div className="rounded-lg bg-foreground px-3 pt-1 pb-1 shadow-custom">
            <div className="text-sm font-bold leading-6 text-customblue">
              Services
            </div>
          </div>
        </div>
        <div className="max-w-[48%] mt-5 overflow-hidden">
          <div className="text-[56px] leading-[55px] font-black tracking-[-.64px]">
            Software created based on{" "}
            <span className="text-customblue">real life problems</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-14 auto-cols-fr">
          {cardItems.map((item) => {
            const controls = useAnimation();
            const { ref, inView } = useInView({
              threshold: 0.5,
              triggerOnce: false,
            });

            useEffect(() => {
              if (inView) {
                controls.start(item.animation.animate);
              } else {
                controls.start(item.animation.exit);
              }
            }, [inView, controls]);

            return (
              <AnimatePresence>
                <motion.div
                  ref={ref}
                  key={item.id}
                  initial={item.animation.initial}
                  animate={controls}
                  exit={item.animation.exit}
                  className="max-w-[451px] bg-foreground rounded-[16px] p-10 shadow-custom"
                >
                  <div className="w-20 h-20 bg-black rounded-full justify-center items-center flex shadow-custom">
                    <img
                      src={item.image}
                      alt=""
                      className="max-w-full align-middle inline-block"
                    />
                  </div>
                  <div className="mt-8 tracking-[-.64px] text-[32px] font-bold leading-10">
                    {item.title}
                  </div>
                  <div className="pt-2">
                    <div className="leading-7 font-[400] text-[18px] text-white/65">
                      {item.content}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
