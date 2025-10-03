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
      question: "How do we know if we actually need IT consulting?",
      answer:
        "You might benefit from IT consulting if you're experiencing technology challenges that are impacting your business operations, planning major system upgrades, considering digital transformation, or need expert guidance on technology strategy. Common signs include outdated systems, security concerns, inefficient processes, or when your team lacks specific technical expertise for a project. We can help assess your situation during an initial consultation to determine if consulting services would be valuable for your business.",
    },
    {
      id: "2",
      question: "How long does IT consulting typically take?",
      answer:
        "Consulting project duration varies widely based on scope and complexity. Some assessments might take just a few weeks, while comprehensive digital transformation strategies could span several months. The timeline depends on factors like the size of your organization, number of systems involved, and depth of analysis required. We'll provide a detailed project timeline after understanding your specific needs and objectives.",
    },
    {
      id: "3",
      question: "How do you charge for consulting services?",
      answer:
        "Our consulting fees are structured based on project scope, complexity, and duration. We offer flexible pricing models to fit different business needs and budgets. To provide accurate pricing for your specific consulting requirements, please book a consultation call or contact us through our contact form, and we'll discuss the most suitable arrangement for your project.",
    },
    {
      id: "4",
      question: "What happens after the consulting project ends?",
      answer:
        "After completing your consulting project, we provide comprehensive documentation including our findings, recommendations, and implementation roadmaps. We can also offer ongoing support through various arrangements - whether that's periodic check-ins, implementation assistance, or being available for questions as you execute our recommendations. We'll discuss post-project support options that make sense for your situation during our initial consultation.",
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
