import * as React from "react";
import hamzaAvatar from "/hamza_avatar.svg";
import github from "/Github.svg";
import linkedin from "/Linkedin.svg";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <section className="justify-center items-center pb-6 flex w-full">
        {/* Footer Container */}
        <div className="max-w-[1355px] flex-1 ml-10 mr-10">
          {/* Footer Upper */}
          <div className="flex">
            {/* Footer Upper Left Upper */}
            <div className="max-w-[450px] mr-6 flex-1">
              <div className=" rounded-lg bg-foreground justify-center items-center flex-col pt-[106px] pb-[48px] pr-[40px] pl-[40px] relative flex shadow-custom">
                <div className=" text-3xl font-bold">Hamza & Simon</div>
                <div className=" text-center mt-4">
                  We believe in the power of design to transform ideas into
                  tangible, user-friendly software.
                </div>
                <img
                  src={hamzaAvatar}
                  alt=""
                  className="max-w-[36%] max-h-[36%] min-w-[25%] min-h-[25%] absolute bottom-auto top-[-20%]  align-middle inline-block mx-auto"
                />
              </div>
              {/* Footer Upper Left Upper Ends */}
              {/* Footer Upper Left Lower */}
              <div className="grid gap-x-6 gap-y-6 mt-6 grid-cols-4">
                <a
                  href=""
                  className=" w-24 h-24 bg-foreground rounded-2xl justify-center items-center flex shadow-custom"
                >
                  <img
                    src={github}
                    alt="Hamza Github"
                    className="max-w-[100%] align-middle inline-block"
                  />
                </a>
                <a
                  href=""
                  className=" w-24 h-24 bg-foreground rounded-2xl justify-center items-center flex shadow-custom"
                >
                  <img
                    src={linkedin}
                    alt="Hamza Linkedin"
                    className="max-w-[100%] align-middle inline-block"
                  />
                </a>
                <a
                  href=""
                  className=" w-24 h-24 bg-foreground rounded-2xl justify-center items-center flex shadow-custom"
                >
                  <img
                    src={github}
                    alt="Simon Github"
                    className="max-w-[100%] align-middle inline-block"
                  />
                </a>
                <a
                  href=""
                  className=" w-24 h-24 bg-foreground rounded-2xl justify-center items-center flex shadow-custom"
                >
                  <img
                    src={linkedin}
                    alt="Simon Linkedin"
                    className="max-w-[100%] align-middle inline-block"
                  />
                </a>
              </div>
              {/* Footer Upper Left Lower Ends */}
            </div>
            {/* Footer Upper Right */}
            <div className="bg-foreground rounded-lg flex-col flex-1 justify-center items-center pt-[80px] pb-[80px] flex shadow-custom">
              {/* Footer Upper Right Text */}
              <div className="text-center text-white text-6xl max-w-[700px]">
                Got a project in mind?
                <br />
                <span className="text-slate-400"> Let's talk</span>
              </div>
              {/* Footer Upper Right Text Ends */}
              {/* Footer Upper Right Button */}
              <Button className="mt-8 bg-white text-background rounded-full pt-[35px] pb-[35px] pr-[108px] pl-[108px] bg-auto text-3xl font-bold hover:bg-black hover:text-white">
                Get in touch
              </Button>
            </div>
          </div>
          {/* Footer Upper Ends */}
          {/* Footer Lower */}
          <div className="h-[72px] bg-foreground shadow-custom rounded-2xl mt-[24px] flex justify-between pt-[20px] pb-[20px] pr-[32px] pl-[32px]">
            <a href="/" className="text-white font-extrabold">
              Hamza & Simon
            </a>
            <div className="items-center flex">
              <a href="/Project" className="ml-[28px]">
                {" "}
                Projects
              </a>
              <a href="/Testimonial" className="ml-[28px]">
                {" "}
                Testimonials
              </a>
              <a href="/Contact" className="ml-[28px]">
                {" "}
                Contact
              </a>
            </div>
          </div>
        </div>
        {/* Footer Container Ends */}
      </section>
      {/* Footer Section End */}
    </>
  );
};

export default Footer;
