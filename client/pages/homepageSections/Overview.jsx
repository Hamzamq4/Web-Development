import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroPic from "/heroPic.png";
import figma from "/Figma.png";
import unity from "/Unity.png";
import python from "/Python.png";
import csharp from "/CSharp.png";
import testimage from "/testImage.jpeg";

function Overview() {
  return (
    <>
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

export default Overview;
