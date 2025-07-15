"use client";
import { useState, useRef, useEffect } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Testimony = () => {
  const testimonycontent = [
    {
      img: "/images/avatarpfp.png",
      name: "Elvis Igbeibor",
      role: "HR Google",
      title: "Ahead of Schedule, Beyond Expectations",
      content:
        "The team exceeded our expectations in every way. From the very first meeting, they showed a deep understanding of our goals and proposed smart, efficient solutions. T It felt like they were an extension of our in-house team.",
    },
    {
      img: "/images/avatarpfp.png",
      name: "Elvis Igbeibor",
      role: "HR Google",
      title: "Ahead of Schedule, Beyond Expectations",
      content:
        "The team exceeded our expectations in every way. From the very first meeting, they showed a deep understanding of our goals and proposed smart, efficient solutions. T It felt like they were an extension of our in-house team.",
    },
    {
      img: "/images/avatarpfp.png",
      name: "Elvis Igbeibor",
      role: "HR Google",
      title: "Ahead of Schedule, Beyond Expectations",
      content:
        "The team exceeded our expectations in every way. From the very first meeting, they showed a deep understanding of our goals and proposed smart, efficient solutions. T It felt like they were an extension of our in-house team.",
    },
    {
      img: "/images/avatarpfp.png",
      name: "Elvis Igbeibor",
      role: "HR Google",
      title: "Ahead of Schedule, Beyond Expectations",
      content:
        "The team exceeded our expectations in every way. From the very first meeting, they showed a deep understanding of our goals and proposed smart, efficient solutions. T It felt like they were an extension of our in-house team.",
    },
    {
      img: "/images/avatarpfp.png",
      name: "Elvis Igbeibor",
      role: "HR Google",
      title: "Ahead of Schedule, Beyond Expectations",
      content:
        "The team exceeded our expectations in every way. From the very first meeting, they showed a deep understanding of our goals and proposed smart, efficient solutions. T It felt like they were an extension of our in-house team.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.children[index] as HTMLElement;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft,
        behavior: "smooth",
      });
    }
  };
  const prev = () => {
    const newIndex =
      activeIndex > 0 ? activeIndex - 1 : testimonycontent.length - 1;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const next = () => {
    const newIndex = (activeIndex + 1) % testimonycontent.length;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex]);

  return (
    <div className="bg-background text-foreground p-6 lg:p-0">
      <h2 className="text-4xl font-instrument-serif text-center py-12">
        See what our clients say about us and join our success stories!
      </h2>

      <div
        ref={containerRef}
        className="overflow-x-auto flex w-full gap-5 snap-x snap-mandatory scrollbar-hide py-6 px-6 cursor-default select-none"
        style={{ scrollBehavior: "smooth" }}
      >
        {testimonycontent.map((item, index) => (
          <div
            className="bg-background rounded-2xl lg:shadow-2xl shadow-lg p-4 lg:w-full min-w-[300px] lg:min-w-[500px] snap-center"
            key={index}
          >
            <div className="flex justify-normal items-center gap-4">
              <img src={item.img} alt="avatar pfp" className="w-10 h-10" />
              <div className="flex flex-col gap-2">
                <p className="text-xl font-instrument-serif">{item.name}</p>
                <p className="text-gray text-xs">{item.role}</p>
              </div>
            </div>
            <h2 className="text-xl font-instrument-serif py-6">{item.title}</h2>
            <p className="w-full">{item.content}</p>
          </div>
        ))}
      </div>
      <div className="hidden lg:flex justify-center items-center gap-4 pt-5">
        <GrFormPrevious
          className="w-12 h-12 rounded-full border-2 border-black cursor-pointer"
          onClick={prev}
        />
        <div className="flex gap-2">
          {testimonycontent.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === activeIndex ? "bg-primary" : "bg-gray"
              }`}
            />
          ))}
        </div>
        <GrFormNext
          onClick={next}
          className="w-12 h-12 rounded-full border-2 border-primary cursor-pointer"
          stroke="#CA5202"
        />
      </div>
    </div>
  );
};

export default Testimony;
