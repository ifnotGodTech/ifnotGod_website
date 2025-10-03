"use client";
import { useState, useRef, useEffect } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Testimony = () => {
  const testimonycontent = [
    {
      img: "/images/avatarpfp.png",
      name: "Mr. Elvis Igbeibor",
      role: "Founder, Itestified App",
      title: "Exceptional Mobile App Development",
      content:
        "Working with this team was incredible. They built our mobile app from the ground up with complete design, development, and testing services. The UI/UX design exceeded our expectations, and their development team was always available for questions",
    },
    {
      img: "/images/avatarpfp.png",
      name: "Mrs. Jolaade Deborah",
      role: "Principal, DCC School",
      title: "Outstanding Website Development",
      content:
        "They built our school website from the ground up with incredible attention to detail. The design perfectly captures our school's values and the functionality makes it easy for parents and students to access information. The QA testing ensured a smooth launch and we've had zero issues since going live",
    },
    {
      img: "/images/avatarpfp.png",
      name: "Ms. Lola Adegoke",
      role: "CEO, TravelMate",
      title: "Perfect Website Design and Development",
      content:
        "Their comprehensive approach to our travel website was outstanding. They handled the complete design, development, and testing process with incredible attention to detail. Every feature was thoughtfully crafted for our travel business needs The QA testing ensured everything worked perfectly from day one",
    },
    {
      img: "/images/avatarpfp.png",
      name: "Mr. Ayo Ajibade",
      role: "Managing Director, AJ Technologies",
      title: "Reliable Web Development Partner",
      content:
        "As a growing business, we needed a web development partner who could deliver quality within our timeline. They were transparent from day one, delivered exactly what they promised, and the post-launch support has been fantastic. Our web platform has been stable with zero critical issues for 6 months now.",
    },
    {
      img: "/images/avatarpfp.png",
      name: "Mrs. Folake Ogundimu ",
      role: "Operations Manager, TechSolutions Nigeria",
      title: "Ahead of Schedule, Beyond Expectations",
      content:
        "The QA testing services were thorough and professional. They found critical bugs that our internal team missed and provided detailed reports that made fixing issues straightforward. Their integration into our development workflow was seamless - it felt like they were part of our team.",
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
            className="bg-background rounded-2xl lg:shadow-md shadow-sm p-4 lg:w-full min-w-[300px] lg:min-w-[500px] snap-center"
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
        <GrFormPrevious stroke="#d1d5dc"
          className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
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
