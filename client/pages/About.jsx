import React from "react";
import { Button } from "@/components/ui/button";
function About() {
  return (
    <>
      {/* Hero About Section Start */}
      <section className=" justify-center items-center flex-col pb-36 w-full">
        {/* Hero Container Start */}
        <div className=" flex-wrap max-w-[1355px] flex items-stretch justify-center pt-2 mx-auto shadow-custom bg-foreground rounded-3xl">
          {/* Hero Content 21Start */}
          <div className="max-w-2xl rounded-3xl pt-28 pb-28 flex-1 ml-2 justify-center items-center flex flex-col ">
            {/* Tag Line */}
            <div className="bg-black rounded-md shadow-custom px-3 pt-1 pb-1">
              <span className="text-customblue font-bold"> About us</span>
            </div>
            {/* title */}
            <div className="max-w-[514px] mt-5">
              <span className="text-white font-bold tracking-tighter text-6xl leading-none self-center">
                Top Students
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
                <Button className="mt-5 font-medium pt-6 pb-6 pl-5 pr-5 rounded-full text-xl bg-customblue text-white hover:bg-sky-700">
                  See Our Projects →
                </Button>
              </a>
            </div>
          </div>
          {/* Hero Content 1 End */}
        </div>
        {/* Hero Container End */}
      </section>
      {/* Hero About Section End */}

      {/* Job Experiences */}
      <section className="justify-center items-center w-full flex pb-36">
        {/* Container */}
        <div className="max-w-[920px] flex-1 ml-10 mr-10">
          {/* Tag Line */}
          <div></div>
          {/* Tag Line End */}
          {/* Content Start */}
          <div className=" mt-16 flex"></div>
          {/* Content End */}
        </div>
        {/* Container End */}
      </section>
      {/* Job Experiences End */}
    </>
  );
}

export default About;
