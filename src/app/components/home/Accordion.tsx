import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const AccordionSection = () => {
  const FAQ = [
    {
      id: "1",
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-4 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      id: "2",
      question: "Do you work with startups or only established businesses?",
      answer:
        "We work with both startups and established businesses! We understand that startups have unique needs - tight budgets, rapid iteration requirements, and the need to validate ideas quickly. Whether you're a solo founder with an idea or an enterprise looking to modernise, we tailor our approach to fit your stage and requirements.",
    },
    {
      id: "3",
      question: "How involved will I be in the development process?",
      answer:
        "Your involvement is crucial to project success. We follow a collaborative approach with regular check-ins, sprint reviews, and feedback sessions. We typically schedule calls during development or anytime that fits your needs. The level of involvement is flexible and can be adjusted based on your availability and preferences.",
    },
    {
      id: "4",
      question: "How much does it cost to hire your software Agency?",
      answer:
        "Project costs vary significantly based on complexity, features, and timeline requirements. Every project is unique, so we provide customized quotes after understanding your specific needs and goals. To get accurate pricing for your project, please book a consultation call or reach out through our contact form, and we'll provide a detailed proposal tailored to your requirements.",
    },
  ];
  return (
    <div className="bg-off-white  px-6 flex lg:flex-row flex-col items-start justify-between w-full lg:py-24 py-12 lg:px-12 gap-8">
      <h1 className="lg:text-5xl text-3xl font-instrument-serif">
        Frequently Asked Questions
      </h1>
      <div className="w-full">
        <Accordion
          className="flex flex-col w-full"
          type="single"
          defaultValue="0"
          collapsible
        >
          {FAQ.map((item) => (
            <AccordionItem
              className="overflow-hidden w-full border-b-[1px] border-gray py-4 "
              value={item.id}
              key={item.question}
            >
              <AccordionTrigger className="font-instrument-serif text-xl flex justify-between items-start w-full cursor-pointer">
                <h3 className="text-left text-2xl">{item.question}</h3>
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
