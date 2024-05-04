import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  const questionItems = [
    {
      id: 1,
      value: "item-1",
      trigger: "What is Medialogy",
      content: "Content",
    },
    {
      id: 2,
      value: "item-2",
      trigger: "What is Medialogy 2",
      content: "Content",
    },
    {
      id: 3,
      value: "item-3",
      trigger: "What is Medialogy 3",
      content: "Content",
    },
    {
      id: 4,
      value: "item-4",
      trigger: "What is Medialogy 4",
      content: "Content",
    },
    {
      id: 5,
      value: "item-5",
      trigger: "What is Medialogy 5",
      content: "Content",
    },
  ];
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

            <div className="text-[50px] leading-[64px] font-black tracking-[-.64px] mt-5">
              Frequently Asked{" "}
              <span className="text-customblue">Questions </span>
            </div>
          </div>
          <div className="mt-7 w-full">
            <div className="h-auto max-w-[758px] flex-col justify-start items-start flex ">
              {questionItems.map((item) => (
                <Accordion
                  key={item.id}
                  type="single"
                  collapsible
                  className="w-full "
                >
                  <AccordionItem value={item.value} className="mt-3 mb-3">
                    <AccordionTrigger>{item.trigger}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
