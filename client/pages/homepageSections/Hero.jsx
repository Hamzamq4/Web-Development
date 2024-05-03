import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { Button } from "@/components/ui/button";
import bgCircle from "/BG_Circle.svg";
import heroPic from "/heroPic.png";
import Timer from "@/components/ui/Timer";

// Animated rotating image
function RotatingImage({ src }) {
  const [rotation, setRotation] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 0.5) % 360);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={src}
      className="max-w-[100%]"
      style={{
        transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotation}deg) skew(0deg, 0deg)`,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    />
  );
}

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 0.8 },
    },
  };

  return (
    <motion.section
      className="justify-center items-center flex-col pb-36 w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex-wrap max-w-[1355px] flex items-stretch justify-center pt-2 mx-auto">
        <motion.div
          className="bg-foreground max-w-2xl rounded-3xl pt-28 pb-28 pt flex-1 mr-2 justify-center items-center flex flex-col shadow-custom"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 120 }}
        >
          <div className="max-w-[396px] flex-1 relative">
            <RotatingImage src={bgCircle} />
            <img
              src={heroPic}
              className="max-w-[83%] absolute top-[8%] left-[8%] right-[0%] bottom-[0%]"
            />
          </div>
        </motion.div>
        <motion.div
          className="max-w-2xl bg-foreground rounded-3xl pt-28 pb-28 flex-1 ml-2 justify-center items-center flex flex-col shadow-custom"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 120 }}
        >
          <div className="bg-black rounded-md shadow-custom px-3 pt-1 pb-1">
            <span className="text-customblue font-bold"> MEDIALOGISTS</span>
          </div>
          <div className="max-w-[514px] mt-5">
            <span className="text-white font-bold tracking-tighter text-6xl leading-none self-center">
              Media Engineers
            </span>
          </div>
          <div className="max-w-[444px] mt-5 mb-7 item-center">
            <div className="text-zinc-300 font-medium text-center">
              Currently writing our bachelor thesis in Medialogy at Aalborg
              University. We have already created wonderful solutions that have
              had great impact. Check them out!
            </div>
          </div>
          <div>
            <a href="/Projects">
              <Button className="mt-5 font-medium pt-6 pb-6 pl-5 pr-5 rounded-full text-xl bg-customblue text-white hover:hover:bg-customblue/60">
                See Our Projects →
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
      <Timer />
    </motion.section>
  );
}

export default Hero;
