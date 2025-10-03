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
        "Development timelines vary based on project complexity and scope. We'll provide a detailed timeline and project roadmap during our initial consultation based on your specific requirements and goals",
    },
    {
      id: "2",
      question: "What technologies do you use?",
      answer:
        "We work with modern, industry-standard technologies and choose the best tech stack for each project based on your needs, scalability requirements, and long-term goals. Our expertise includes popular frameworks like React, Node.js, Python, and cloud platforms like AWS and Azure. We'll recommend the most suitable technologies for your project during our consultation and explain why they're the right fit.",
    },
    {
      id: "3",
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we offer comprehensive post-launch support including bug fixes, performance monitoring, security updates, and feature enhancements. We provide various support packages ranging from basic maintenance to ongoing development partnerships. We'll discuss the best support option for your project and budget during our consultation to ensure your application continues running smoothly after launch.",
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
