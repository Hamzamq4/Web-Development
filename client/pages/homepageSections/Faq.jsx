import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  return (
    <>
      <section className="justify-center items-center w-full flex pb-[200px]">
        <div className="max-w-[758px] flex-1 flex-col justify-center items-center mx-10 flex">
          <div className="flex-col justify-center items-center flex">
            <div className="bg-foreground rounded-[6px] px-3 pb-1 pt-1 shadow-custom">
              <div className=" text-sm font-bold leading-6 text-customblue">
                FAQ
              </div>
            </div>

            <div className="text-[50px] leading-[64px] font-medium tracking-[-.64px]">
              Frequently Asked{" "}
              <span className="text-customblue">Questions </span>
            </div>
          </div>
          <div className="mt-14 w-full">
            <div className="h-auto max-w-[758px] flex-col justify-start items-start flex ">
              <Accordion type="single" collapsible className="w-full ">
                <AccordionItem value="item-1" className="mt-3 mb-3">
                  <AccordionTrigger>What is Medialogy</AccordionTrigger>
                  <AccordionContent>
                    Medialogy is a study program that combines technology and
                    problem based learning.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="mt-3 mb-3">
                  <AccordionTrigger>How have you</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="mt-3 mb-3">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="mt-3 mb-3">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
