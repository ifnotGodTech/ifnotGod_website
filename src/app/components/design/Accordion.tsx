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
      question: "How long does a UI/UX project typically take?",
      answer:
        "Design project timelines vary based on the scope and complexity of your project. We'll provide a detailed timeline tailored to your specific project during our initial consultation.",
    },
    {
      id: "2",
      question: "Why is UI/UX design important for my business?",
      answer:
        "Good UI/UX design directly impacts your bottom line. It increases user engagement, reduces bounce rates, and improves conversion rates. A well-designed interface makes it easier for customers to find what they need and complete desired actions, whether that's making a purchase, signing up, or contacting you. Poor design can frustrate users and drive them to competitors, while great design builds trust and encourages repeat business.",
    },
    {
      id: "3",
      question: "How much does a UI/UX design project cost?",
      answer:
        "Design project costs depend on various factors including project scope, complexity, number of screens, and research requirements. Every project has unique needs, so we provide customized quotes after understanding your goals and requirements. To get accurate pricing for your design project, please book a consultation call or reach out through our contact form for a detailed proposal.",
    },
    {
      id: "4",
      question: "Can you work with our existing design team?",
      answer:
        "Absolutely! We're experienced in collaborating with in-house design teams and can adapt to various working arrangements. We can work as an extension of your team, provide specialized expertise for specific projects, or offer design consultation and review services. We'll discuss the best collaboration approach during our initial consultation to ensure smooth integration with your existing processes",
    },
    {
      id: "5",
      question: "What industries do you specialize in?",
      answer:
        "We work across diverse industries including fintech, healthcare, e-commerce, SaaS, education, and startups. Our design approach focuses on understanding your users and business goals rather than being limited to specific sectors. Each industry has unique challenges and user expectations, and we research and adapt our design solutions to meet those specific needs.",
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
              className="overflow-hidden lg:w-[600px] w-full border-b-[1px] border-gray py-4 "
              value={item.id}
              key={item.question}
            >
              <AccordionTrigger className="font-instrument-serif text-xl cursor-pointer">
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
