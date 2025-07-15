import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";

const Carasouel = () => {
  const processContent = [
    {
      id: 1,
      title: "Test Planning & Strategy",
      description:
        "We analyze your requirements and create a comprehensive testing roadmap that identifies risks, defines scope, and establishes success criteria.",
    },
    {
      id: 2,
      title: "Test Case Development",
      description:
        "We write detailed test scenarios that cover all functionality, edge cases, and user workflows to ensure nothing gets missed during testing.",
    },
    {
      id: 3,
      title: "Execution & Bug Reporting",
      description:
        "We systematically run tests, document any issues found, and provide clear bug reports with steps to reproduce and severity levels.",
    },
    {
      id: 4,
      title: "Retesting & Validation",
      description:
        "We verify that all reported bugs are fixed and conduct additional testing to ensure fixes don't introduce new problems.",
    },
     {
      id: 5,
      title: "Final Sign-off & Documentation",
      description:
        "We provide comprehensive test reports, performance metrics, and quality certification before your software goes live.",
    },
  ];
  return (
    <div className=" lg:py-12  p-6">
      <h3 className="text-4xl font-instrument-serif py-4">
        Our Quality Assurance Process
      </h3>
      <Carousel>
        <CarouselContent className="flex gap-4 items-center py-6 px-8 cursor-default select-none">
          {processContent.map((item, idx) => (
            <CarouselItem
              className="flex flex-col p-4 gap-4 bg-background rounded-2xl shadow-md lg:max-w-[400px] lg:min-h-[250px] max-w-[300px]"
              key={idx}
            >
              <p className="text-4xl font-instrument-serif">{item.id}</p>
              <h3 className="text-2xl font-instrument-serif">{item.title}</h3>
              <p className="text-sm lg:text-base">{item.description}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Carasouel;
