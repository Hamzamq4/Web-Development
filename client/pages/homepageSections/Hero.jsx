import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import bgCircle from "/BG_Circle.svg";
import heroPic from "/heroPic.png";
import Timer from "@/components/ui/Timer";

function RotatingImage({ src }) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 0.5) % 360); // Increment rotation
    }, 35); // Rotate every 100 milliseconds
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
  return (
    <>
      {/* Hero Section Start */}
      <section className=" justify-center items-center flex-col pb-36 w-full">
        {/* Hero Container Start */}
        <div className=" flex-wrap max-w-[1355px] flex items-stretch justify-center pt-2 mx-auto">
          {/* Hero Content 1 Start*/}
          <div className="bg-foreground max-w-2xl rounded-3xl pt-28 pb-28 pt flex-1 mr-2 justify-center items-center flex flex-col shadow-custom">
            <div className="max-w-[396px] flex-1 relative">
              {/* BG Circle*/}
              <RotatingImage src={bgCircle} />
              {/* Picture*/}
              <img
                src={heroPic}
                className="max-w-[83%] absolute top-[8%] left-[8%] right-[0%] bottom-[0%]"
              />
            </div>
          </div>
          {/* Hero Content 1 End*/}
          {/* ---------------------- */}
          {/* Hero Content 2 Start */}
          <div className="max-w-2xl bg-foreground rounded-3xl pt-28 pb-28 flex-1 ml-2 justify-center items-center flex flex-col shadow-custom">
            {/* Tag Line */}
            <div className="bg-black rounded-md shadow-custom px-3 pt-1 pb-1">
              <span className="text-customblue font-bold"> MEDIALOGISTS</span>
            </div>
            {/* title */}
            <div className="max-w-[514px] mt-5">
              <span className="text-white font-bold tracking-tighter text-6xl leading-none self-center">
                Media Engineers
              </span>
            </div>
            {/* Description */}
            <div className="max-w-[444px] mt-5 mb-7 item-center">
              <div className="text-zinc-300 font-medium text-center">
                Currently writing our bachelor thesis in Medialogy at Aalborg
                University. We have already created wonderful solutions that
                have had great impact. Check them out!
              </div>
            </div>
            <div>
              <a href="/Projects">
                <Button className="mt-5 font-medium pt-6 pb-6 pl-5 pr-5 rounded-full text-xl bg-customblue text-white hover:hover:bg-customblue/60">
                  See Our Projects →
                </Button>
              </a>
            </div>
          </div>
          {/* Hero Content 2 End */}
        </div>
        <Timer />
        {/* Hero Container End */}
      </section>
      {/* Hero Section End */}
    </>
  );
}

export default Hero;
