import HoverButton from "@/app/components/buttonHover";
import AccordionSection from "@/app/components/it-consulting/Accordion";
import { CheckCircle2Icon } from "lucide-react";
import React from "react";
import { CgArrowRight } from "react-icons/cg";

const page = () => {
  const servicescontent = [
    {
      title: "Strategic IT Planning Sessions",
      description:
        "We work closely with your leadership team to understand your long-term goals and translate them into a practical, scalable IT roadmap. From setting digital priorities to aligning systems with your growth strategy, we help you stay ahead of change.",
    },
    {
      title: "IT Architecture Assessment",
      description:
        "We evaluate your current IT architecture to identify gaps, security risks, and performance bottlenecks. Then we design improvements focused on stability, flexibility, and long-term scalability.",
    },
    {
      title: "Technology Audit & Optimization",
      description:
        "Our consultants take a deep dive into your existing technology stack—hardware, software, and infrastructure—to uncover inefficiencies and hidden costs. We recommend optimizations that improve speed, reduce waste, and simplify your tech environment.",
    },
    {
      title: "Digital Transformation Strategy",
      description:
        "We support your shift to modern tools and workflows with a clear, phased transformation plan. Whether you’re replacing legacy systems or automating manual processes, we ensure minimal disruption and maximum impact.",
    },
  ];

  const benefitContent = [
    {
      title: " Avoid Expensive Technology Mistakes",
      description:
        "Learn from our experience instead of making costly errors. Our guidance helps you prevent common mistakes that could set your business back months.",
    },
    {
      title: "Stay Ahead of Your Competition",
      description:
        "Leverage cutting-edge technology strategies that give you market advantages. While competitors struggle with outdated systems, you'll be operating efficiently.",
    },
    {
      title: "Make Smarter Technology Investments",
      description:
        "Stop wasting money on tools that don't deliver. Our experts help you choose solutions that actually solve your problems and give you real value for your money.",
    },
    {
      title: "Get Results Faster",
      description:
        "Accelerate your technology initiatives with proven strategies and best practices. Achieve in months what might otherwise take years of trial and error.",
    },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION  */}
      <div className="relative">
        <img
          src="/images/standard-quality-control-concept-m (1).jpg"
          className=" lg:h-[300px] object-cover h-[300px] w-full"
          alt="bg-image"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        <h1 className="lg:text-5xl text-3xl text-nowrap font-instrument-serif text-white text-center absolute top-1/2 left-1/2 -translate-1/2 z-1">
          IT Consulting
        </h1>
      </div>
      <div
        className="w-full h-72 bg-cover bg-center text-center flex flex-col items-center justify-center gap-8 rounded-xl my-6 lg:px-24 px-6"
        style={{
          backgroundImage: "url('/images/worldbg.svg')",
        }}
      >
        <p className="lg:text-3xl text-2xl font-instrument-serif lg:max-w-[550px]">
          We optimize your technology infrastructure, guide strategic decisions,
          and accelerate digital transformation through expert consulting that
          aligns IT with your business goals.
        </p>
        <HoverButton
          href="/contact-us"
          text="Contact us"
          className="button-primary w-fit"
        />
      </div>
      {/* <-------------------SERVICES WE OFFER-------------------------> */}
      <div className=" ">
        <div className="flex lg:flex-row flex-col lg:justify-between justify-normal gap-6 lg:gap-0 lg:items-center w-full pb-4 lg:py-12 py-6 lg:px-12 px-3">
          <h1 className="text-4xl font-instrument-serif capitalize">
            Services We Offer
          </h1>
          <HoverButton
            href="/contact-us"
            text="Start your project"
            className="button-primary"
            icon={<CgArrowRight />}
          />
        </div>
        <div className=" border-t-1 border-t-gray grid lg:grid-cols-2 grid-cols-1 items-center gap-8 lg:px-12 px-6">
          {" "}
          {servicescontent.map((content, idx) => (
            <div
              className="sticky top-0 z-30 bg-white flex lg:flex-row flex-col justify-center items-center w-full gap-12 lg:py-6 py-3"
              key={idx}
            >
              <div
                className={`flex flex-col gap-4 items-start justify-normal
        ${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                <img src="/icons/offericon.png" className="w-6 h-6" />
                <h2 className="font-instrument-serif text-3xl">
                  {content.title}
                </h2>
                <p>{content.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <----------------------BENEFITS OF USING SERVOICE SECTION----------------------> */}
      <div className="bg-off-white lg:p-12 p-6">
        <h2 className="text-4xl pb-12 text-center">
          Benefits of using our IT Consulting service
        </h2>
        <div className="flex lg:flex-row flex-col justify-center items-start lg:gap-32 gap-6">
          <img
            className="lg:w-[500px] w-full h-[400px] object-cover rounded-2xl"
            src="/images/Ifnotgodtech website images/Smiling Young Man in Hoodie.jpeg"
            alt="girl smiling"
          />
          <div className="flex flex-col gap-3">
            {benefitContent.map((item, idx) => (
              <div
                className="flex align-top justify-normal items-start gap-2"
                key={idx}
              >
                <CheckCircle2Icon
                  fill="var(--primary)"
                  stroke="var(--background)"
                  className="mt-2 min-h-6 min-w-6"
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-2xl">{item.title}</h4>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AccordionSection />
    </div>
  );
};

export default page;
