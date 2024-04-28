import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import bgCircle from "/BG_Circle.svg";
import heroPic from "/heroPic.png";
import Timer from "@/components/ui/Timer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import figma from "/Figma.png";
import unity from "/Unity.png";
import python from "/Python.png";
import csharp from "/CSharp.png";
import testimage from "/testImage.jpeg";

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
function Home() {
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
                <Button className="mt-5 font-medium pt-6 pb-6 pl-5 pr-5 rounded-full text-xl bg-customblue text-white hover:bg-sky-700">
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
      {/* Section 2 */}
      <section className="justify-center items-center w-full pb-36 flex">
        <div className="max-w-[1355px] flex-1 ml-10 mr-10">
          {/* Tag */}
          <div className="items-center mb-3 flex">
            <div className=" rounded-md bg-foreground px-3 pt-1 pb-1 shadow-custom">
              <div className=" text-sm font-bold leading-6 text-customblue">
                Available for work
              </div>
            </div>
          </div>
          {/* Body text */}
          <div className="max-w-[624px]">
            <div className="text-[50px] leading-[64px] font-medium tracking-[-.64px]">
              Pioneering Excellence in Medialogy
              <span className="text-white/50"> since 2021</span>
            </div>
          </div>
          {/* Main */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-14 auto-cols-fr">
            {/* Col 1 */}
            <div>
              <div className="bg-foreground rounded-xl px-10 pb-10 pt-[30px] shadow-custom">
                <div className="relative">
                  <Tabs defaultValue="experiences" className="relative">
                    <TabsList className="max-w-[217px] bg-black text-white rounded-[5px] pt-1 pb-1">
                      <TabsTrigger value="experiences">Experiences</TabsTrigger>
                      <TabsTrigger value="funFacts">Fun Facts</TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="experiences"
                      className=" block relative"
                    >
                      <div className="mt-10">
                        {/* parent 1 */}
                        <div className="grid grid-cols-3 gap-4 border-b border-white/15 justify-between pt-5 pb-5 auto-cols-fr">
                          {/* item 1 */}
                          <div className=" flex items-center">
                            <div>
                              <img
                                src={heroPic}
                                className="h-5 w-5 max-w-[100%] align-middle inline-block"
                              />
                            </div>
                            <div className="ml-4">
                              <div className=" text-[16px] font-medium leading-[24px] block">
                                Panda's Fonologiske Lege
                              </div>
                            </div>
                          </div>
                          {/* item 2 */}

                          <div className="flex items-center ml-0 mr-0">
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mr-4"></div>
                            <div>
                              <div className="text-white text-sm font-normal">
                                Bachelor Project
                              </div>
                            </div>
                          </div>
                          {/* item 3 */}
                          <div className="flex items-center ml-0 mr-0">
                            <div className="text-white font-normal text-sm">
                              FEB 2024 - JUN 2024
                            </div>
                          </div>
                        </div>

                        {/* parent 2 */}
                        <div className="grid grid-cols-3 gap-4 border-b border-white/15 justify-between pt-5 pb-5 auto-cols-fr">
                          {/* item 1 */}
                          <div className=" flex items-center">
                            <div>
                              <img
                                src={heroPic}
                                className="h-5 w-5 max-w-[100%] align-middle inline-block"
                              />
                            </div>
                            <div className="ml-4">
                              <div className=" text-[16px] font-medium leading-[24px] block">
                                Virtual Driving Simulator
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center ml-0 mr-0">
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mr-4"></div>
                            <div>
                              <div className="text-white text-sm font-normal">
                                5th Semester Project
                              </div>
                            </div>
                          </div>
                          {/* item 3 */}
                          <div className="flex items-center ml-0 mr-0">
                            <div className="text-white font-normal text-sm">
                              SEP 2023 - JAN 2024
                            </div>
                          </div>
                        </div>
                        {/* parent 3 */}
                        <div className="grid grid-cols-3 gap-4 border-b border-white/15 justify-between pt-5 pb-5 auto-cols-fr">
                          {/* item 1 */}
                          <div className=" flex items-center">
                            <div>
                              <img
                                src={heroPic}
                                className="h-5 w-5 max-w-[100%] align-middle inline-block"
                              />
                            </div>
                            <div className="ml-4">
                              <div className=" text-[16px] font-medium leading-[24px] block">
                                VR Horror Game
                              </div>
                            </div>
                          </div>
                          {/* item 2 */}

                          <div className="flex items-center ml-0 mr-0">
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mr-4"></div>
                            <div>
                              <div className="text-white text-sm font-normal">
                                VR Project
                              </div>
                            </div>
                          </div>
                          {/* item 3 */}
                          <div className="flex items-center ml-0 mr-0">
                            <div className="text-white font-normal text-sm">
                              SEP 2023 - JAN 2024
                            </div>
                          </div>
                        </div>
                        {/* parent 4 */}
                        <div className="grid grid-cols-3 gap-4 border-b border-white/15 justify-between pt-5 pb-5 auto-cols-fr">
                          {/* item 1 */}
                          <div className=" flex items-center">
                            <div>
                              <img
                                src={heroPic}
                                className="h-5 w-5 max-w-[100%] align-middle inline-block"
                              />
                            </div>
                            <div className="ml-4">
                              <div className=" text-[16px] font-medium leading-[24px] block">
                                Virtual Gym Instructor
                              </div>
                            </div>
                          </div>
                          {/* item 2 */}

                          <div className="flex items-center ml-0 mr-0">
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mr-4"></div>
                            <div>
                              <div className="text-white text-sm font-normal">
                                Design Project
                              </div>
                            </div>
                          </div>
                          {/* item 3 */}
                          <div className="flex items-center ml-0 mr-0">
                            <div className="text-white font-normal text-sm">
                              SEP 2023 - JAN 2024
                            </div>
                          </div>
                        </div>

                        {/* parent 5 */}
                        <div className="grid grid-cols-3 gap-4 border-b border-white/15 justify-between pt-5 pb-5 auto-cols-fr">
                          {/* item 1 */}
                          <div className=" flex items-center">
                            <div>
                              <img
                                src={heroPic}
                                className="h-5 w-5 max-w-[100%] align-middle inline-block"
                              />
                            </div>
                            <div className="ml-4">
                              <div className=" text-[16px] font-medium leading-[24px] block">
                                SpyRun
                              </div>
                            </div>
                          </div>
                          {/* item 2 */}
                          <div className="flex items-center ml-0 mr-0">
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
                      Find nogle fun facts habibi
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex">
                  <div className="bg-foreground rounded-[6px] px-3 pt-1 pb-1 shadow-custom">
                    <div className="text-customblue text-[14px] leading-[24px] font-[600]">
                      Available for Work
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-x-6 gap-y-4 mt-6 auto-cols-fr">
                  <div className="bg-foreground shadow-custom w-[124px] h-[124px] rounded-[16px] justify-center items-center flex">
                    <img
                      src={figma}
                      className="max-w-[80%] align-middle inline-block"
                    />
                  </div>
                  <div className="bg-foreground shadow-custom w-[124px] h-[124px] rounded-[16px] justify-center items-center flex">
                    <img
                      src={python}
                      className="max-w-[80%] align-middle inline-block"
                    />
                  </div>
                  <div className="bg-foreground shadow-custom w-[124px] h-[124px] rounded-[16px] justify-center items-center flex">
                    <img
                      src={csharp}
                      className="max-w-[80%] align-middle inline-block"
                    />
                  </div>
                  <div className="bg-foreground shadow-custom w-[124px] h-[124px] rounded-[16px] justify-center items-center flex">
                    <img
                      src={unity}
                      className="max-w-[80%] align-middle inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Col 2 568x675*/}
            <div className="rounded-[16px] ">
              <img
                src={testimage}
                className="w-[100%] h-[100%] max-w-[100%] object-cover rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 End */}
    </>
  );
}

export default Home;
