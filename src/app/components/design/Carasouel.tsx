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
      title: "Discovery and Research",
      description:
        "We understand your users, business goals, and competition through research and interviews to ensure our design decisions are strategic and informed.",
    },
    {
      id: 2,
      title: "Strategy and Planning",
      description:
        "We organize your content, map user journeys, and create wireframes that establish the structure and flow before any visual design begins.",
    },
    {
      id: 3,
      title: "Design and Creation",
      description:
        "We develop visual concepts, create high-fidelity mockups, build interactive prototypes, and establish design systems for consistency.",
    },
    {
      id: 4,
      title: "Testing & Refinement",
      description:
        "We test designs with real users, gather feedback, and iterate based on data to ensure optimal performance and user satisfaction.",
    },
  ];
  return (
    <div className=" lg:py-12  p-6">
      <h3 className="text-4xl font-instrument-serif py-4">Our Design Process</h3>
      <Carousel>
        <CarouselContent className="flex gap-4 items-center py-6 px-8 cursor-default select-none">
          {processContent.map((item, idx) => (
            <CarouselItem className="flex flex-col p-4 gap-4 bg-background rounded-2xl shadow-md lg:max-w-[400px] lg:min-h-[250px] max-w-[300px]" key={idx}>
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
