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
      question: "How long does development take?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-4 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      id: "2",
      question: "What technologies do you use?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-4 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      id: "3",
      question: "Do you provide post-launch support?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-4 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      id: "4",
      question: "Can you work with our existing design team?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-4 months. We'll provide a detailed timeline during our initial consultation.",
    },
  ];
  return (
    <div className="bg-off-white lg:px-12 px-6 flex lg:flex-row flex-col items-start justify-between w-full lg:py-24 py-12  gap-8">
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
