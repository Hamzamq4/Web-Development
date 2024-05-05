import React from "react";
import { Button } from "@/components/ui/button";
import testImg from "/test_5.png";
import testImg2 from "/test_6.png";
import testImg3 from "/test_7.png";
import heroPic from "/heroPic.png";
import timeline from "/timeline.png";
function About() {
  return (
    <>
      {/* Hero About Section Start */}
      <section className="justify-center items-center w-full flex pb-36">
        <div className="max-w-[1355px] flex-1 mx-10">
          {/* Top */}
          <div className="bg-foreground rounded-[20px] pt-[120px] px-[110px] pb-[110px] shadow-custom ">
            {/* title */}
            <div className="flex-col items-start flex">
              <div className="bg-black rounded-[6px] px-3 py-1 shadow-custom">
                <div className="text-customblue font-black uppercase">
                  About Us
                </div>
              </div>
              <div className="max-w-[624px] mt-3">
                <div className="leading-[72px] font-medium text-[64px] tracking-[-.64px]">
                  CPH's leading all-round{" "}
                  <span className="text-customblue"> Experts</span>
                </div>
              </div>
            </div>
            {/* Body Text */}
            <div className=" mt-16 flex">
              <div className="max-w-[315px] flex-1 mr-[115px]">
                <div>
                  <div className="text-[18px] font-[600] leading-[24px]">
                    Researchers | Designers | Developers
                  </div>
                </div>
                <div className="max-w-[312px] mt-[14px] mb-10">
                  <div className="text-[14px] leading-[24px] font-[400] block text-white/65">
                    We'll help you create a better experience for your customers
                  </div>
                </div>
                <div>
                  <Button className="bg-customblue rounded-[25px] text-[16px] font-[500] leading-[24px] ">
                    Contact us now
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex">
                <div className="mr-6">
                  <img
                    src={testImg2}
                    className="max-w-[100%] align-middle inline-block"
                  />
                </div>
                <div className="mr-6">
                  <img
                    src={testImg}
                    className="max-w-[100%] align-middle inline-block"
                  />
                </div>
                <div className="mr-6">
                  <img
                    src={testImg3}
                    className="max-w-[100%] align-middle inline-block"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div></div>
        </div>
      </section>

      <section className="justify-center items-center w-full flex pb-36">
        <div className="max-w-[920px] flex-1 mx-10">
          <div>
            <div className="justify-center items-center flex">
              <div className="bg-foreground rounded-[6px] py-1 px-3 shadow-custom">
                <div className="text-customblue font-black uppercase">
                  {" "}
                  Experiences
                </div>
              </div>
            </div>
            <div className="justify-center flex items-center mt-5">
              <div className="text-[56px] leading-[64px] font-[500] tracking-[-.64px]">
                Job <span className="text-customblue"> Experiences</span>
              </div>
            </div>
          </div>

          <div className="mt-16 flex">
            {/* Left */}
            <div className="flex-col flex-1 justify-end">
              {/* Date for the Right-Side Card*/}
              <div className="mt-0 mb-[203px] ">
                <div className="justify-end flex">
                  <div className="text-[16px] font-[600] leading-[24px] block">
                    JAN 2023 - JAN 2024
                  </div>
                </div>
                <div className="mt-2 justify-end flex">
                  <div className="text-[16px] font-[400] leading-[24px] block">
                    Semester Project
                  </div>
                </div>
              </div>
              {/* Card for the Right-Side Date */}
              <div className="max-w-[400px] bg-foreground shadow-custom rounded-[16px] pt-[37px] pb-[32px] px-[32px]">
                {/* Heading */}
                <div className="flex">
                  <div className="w-[24px] h-[24px]">
                    <img
                      src={heroPic}
                      className="max-w-[100%] align-middle inline-block"
                    />
                  </div>
                  <div className="ml-[14px]">
                    <div className="text-[26px] font-[500] leading-[26px]">
                      Some Project
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div className="mt-4 mb-7">
                  <div className="text-[16px] font-[400] leading-[24px] block">
                    {" "}
                    Some Project Description will come here. Don't you worry!
                  </div>
                </div>
                {/* Button */}
                <div className="flex">
                  <Button className="rounded-[25px] text-[16px] font-extrabold leading-[24px] bg-transparent p-0 ">
                    Learn More →
                  </Button>
                </div>
              </div>
              {/* Date 2 for the Right-Side Card*/}
              <div className="mt-12 mb-[203px] ">
                <div className="justify-end flex">
                  <div className="text-[16px] font-[600] leading-[24px] block">
                    JAN 2023 - JAN 2024
                  </div>
                </div>
                <div className="mt-2 justify-end flex">
                  <div className="text-[16px] font-[400] leading-[24px] block">
                    Semester Project
                  </div>
                </div>
              </div>
              {/* Card 2 for the Right-Side Date */}
              <div className="max-w-[400px] bg-foreground shadow-custom rounded-[16px] pt-[37px] pb-[32px] px-[32px]">
                {/* Heading */}
                <div className="flex">
                  <div className="w-[24px] h-[24px]">
                    <img
                      src={heroPic}
                      className="max-w-[100%] align-middle inline-block"
                    />
                  </div>
                  <div className="ml-[14px]">
                    <div className="text-[26px] font-[500] leading-[26px]">
                      Some Project
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div className="mt-4 mb-7">
                  <div className="text-[16px] font-[400] leading-[24px] block">
                    {" "}
                    Some Project Description will come here. Don't you worry!
                  </div>
                </div>
                {/* Button */}
                <div className="flex">
                  <Button className="rounded-[25px] text-[16px] font-extrabold leading-[24px] bg-transparent p-0 ">
                    Learn More →
                  </Button>
                </div>
              </div>
            </div>
            {/* Middle */}
            <div className="mx-[45px]">
              <img
                src={timeline}
                className="max-w-[100%] inline-block align-middle"
              />
            </div>
            {/* Right */}
            <div className="flex-col flex-1 justify-start">
              {/* Card for the left-side Date */}
              <div className="max-w-[400px] bg-foreground shadow-custom rounded-[16px] pt-[37px] pb-[32px] px-[32px]">
                {/* Heading */}
                <div className="flex">
                  <div className="w-[24px] h-[24px]">
                    <img
                      src={heroPic}
                      className="max-w-[100%] align-middle inline-block"
                    />
                  </div>
                  <div className="ml-[14px]">
                    <div className="text-[26px] font-[500] leading-[26px]">
                      Some Project
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div className="mt-4 mb-7">
                  <div className="text-[16px] font-[400] leading-[24px] block">
                    {" "}
                    Some Project Description will come here. Don't you worry!
                  </div>
                </div>
                {/* Button */}
                <div className="flex">
                  <Button className="rounded-[25px] text-[16px] font-extrabold leading-[24px] bg-transparent p-0 ">
                    Learn More →
                  </Button>
                </div>
              </div>
              {/* Date for the left-side Card*/}
              <div className="mt-12 mb-[203px] ">
                <div className="justify-start flex">
                  <div className="text-[16px] font-[600] leading-[24px] block">
                    JAN 2023 - JAN 2024
                  </div>
                </div>
                <div className="mt-2 justify-start flex">
                  <div className="text-[16px] font-[400] leading-[24px] block">
                    Semester Project
                  </div>
                </div>
              </div>
              {/* Card 2 for the left-side Date */}
              <div className="max-w-[400px] bg-foreground shadow-custom rounded-[16px] pt-[37px] pb-[32px] px-[32px]">
                {/* Heading */}
                <div className="flex">
                  <div className="w-[24px] h-[24px]">
                    <img
                      src={heroPic}
                      className="max-w-[100%] align-middle inline-block"
                    />
                  </div>
                  <div className="ml-[14px]">
                    <div className="text-[26px] font-[500] leading-[26px]">
                      Some Project
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div className="mt-4 mb-7">
                  <div className="text-[16px] font-[400] leading-[24px] block">
                    {" "}
                    Some Project Description will come here. Don't you worry!
                  </div>
                </div>
                {/* Button */}
                <div className="flex">
                  <Button className="rounded-[25px] text-[16px] font-extrabold leading-[24px] bg-transparent p-0 ">
                    Learn More →
                  </Button>
                </div>
              </div>

              {/* Date 2 for the left-side Card*/}
              <div className="mt-12 mb-[203px] ">
                <div className="justify-start flex">
                  <div className="text-[16px] font-[600] leading-[24px] block">
                    JAN 2023 - JAN 2024
                  </div>
                </div>
                <div className="mt-2 justify-start flex">
                  <div className="text-[16px] font-[400] leading-[24px] block">
                    Semester Project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
