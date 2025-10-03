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
        "We perform testing on both real devices and simulators to ensure comprehensive coverage. While simulators are useful for initial testing and rapid iteration, we always conduct testing on actual devices to catch real-world issues that simulators might miss. Our device lab includes various smartphones, tablets, and desktop configurations to test across different operating systems, screen sizes, and hardware specifications.",
    },
    {
      id: "2",
      question: "Can you test software that's already in production?",
      answer:
        "Absolutely! We can perform testing on live production applications as well as applications in development. For production testing, we use safe testing methodologies that won't impact your users or data. We can conduct performance testing, security assessments, usability testing, and compatibility checks on your existing software to identify areas for improvement.",
    },
    {
      id: "3",
      question: "Do you provide ongoing QA support after launch?",
      answer:
        "Yes, we offer ongoing QA support through various service packages including continuous monitoring, regression testing for updates, performance testing, and regular quality audits. We can work as an extension of your team to ensure consistent quality as your software evolves. We'll discuss the best ongoing support approach based on your needs during our consultation",
    },
    {
      id: "4",
      question: "Can you integrate QA into our existing development workflow?",
      answer:
        "Definitely! We're experienced in integrating with various development workflows and tools. Whether you use Agile, DevOps, or other methodologies, we can adapt our QA processes to fit seamlessly into your existing pipeline",
    },
  ];
  return (
    <div className="bg-off-white lg:px-12 px-6 flex lg:flex-row flex-col items-start justify-between w-full lg:py-24 py-12 gap-8">
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
                <p className="text-left text-2xl font-instrument-serif">
                  {item.question}
                </p>
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
