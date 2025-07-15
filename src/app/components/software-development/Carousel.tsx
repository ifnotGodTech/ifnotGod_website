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
      title: "Discovery & Planning",
      description:
        "We start by understanding your needs and mapping out a clear path to bring your vision to life",
    },
    {
      id: 2,
      title: "Design & Prototyping",
      description:
        "We create prototypes so you can see and interact with your solution before we build the final version.",
    },
    {
      id: 3,
      title: "Development & Testing",
      description:
        "We build your application in phases, keeping you updated while ensuring all works perfectly.",
    },
    {
      id: 4,
      title: "Deployment & Launch",
      description:
        "We handle all the technical details of getting your application live and running smoothly.",
    },
     {
      id: 5,
      title: "Maintenance and Support",
      description:
        "We keep your application updated and performing well as your business continues to grow.",
    },
  ];
  return (
    <div className=" lg:py-12  p-6">
      <h3 className="text-4xl font-instrument-serif py-4">
        Our Development Process
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
