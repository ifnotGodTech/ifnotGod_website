import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionSection = () => {
  const FAQ = [
    {
      id: "1",
      question: "Do you test on real devices or just simulators?",
      answer:
        "We test on both real devices and simulators to ensure comprehensive coverage. Real device testing catches issues that simulators often miss.",
    },
    {
      id: "2",
      question: "Can you test software that's already in production?",
      answer:
        "We test on both real devices and simulators to ensure comprehensive coverage. Real device testing catches issues that simulators often miss.",
    },
    {
      id: "3",
      question: "Do you provide ongoing QA support after launch?",
      answer:
        "We test on both real devices and simulators to ensure comprehensive coverage. Real device testing catches issues that simulators often miss.",
    },
    {
      id: "4",
      question: "Can you integrate QA into our existing development workflow?",
      answer:
        "We test on both real devices and simulators to ensure comprehensive coverage. Real device testing catches issues that simulators often miss.",
    },
  ];
  return (
    <div className="bg-off-white lg:px-24 px-6 flex lg:flex-row flex-col items-start justify-between w-full lg:py-24 py-12 lg:gap-24 gap-8">
      <h1 className="lg:text-5xl text-3xl font-instrument-serif w-full lg:w-auto">
        Frequently Asked Questions
      </h1>
      <div className="w-full">
        <Accordion
          className="flex flex-col"
          type="single"
          defaultValue="0"
          collapsible
        >
          {FAQ.map((item) => (
            <AccordionItem
              className="overflow-hidden  w-full border-b-[1px] border-gray py-4 "
              value={item.id}
              key={item.question}
            >
              <AccordionTrigger className="font-instrument-serif text-xl cursor-pointer">
                <p className="text-left text-2xl font-instrument-serif">{item.question}</p>
              </AccordionTrigger>
              <AccordionContent className="text-sm lg:text-base data-[state:open]:slidedown text-gray pt-3">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionSection;
