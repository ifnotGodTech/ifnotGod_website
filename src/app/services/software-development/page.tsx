import HoverButton from "@/app/components/reusuables/buttonHover";
import AccordionSection from "@/app/components/software-development/Accordion";
import Carasouel from "@/app/components/software-development/Carousel";
import { CheckCircle2Icon } from "lucide-react";
import React from "react";
import { CgArrowRight } from "react-icons/cg";

const page = () => {
  const servicescontent = [
    {
      title: "Custom Web Applications",
      description:
        "Your business is unique, and your software should be too. We build custom web applications that perfectly fit your workflow, solve your specific challenges, and scale as you grow.",
      image: "/images/itestify-app.png",
    },
    {
      title: "Mobile App Development",
      description:
        "Your app idea deserves to come to life exactly as you envision it. We develop native iOS and Android apps that deliver the performance and user experience your customers expect.",
      image:
        "/images/freepik__the-style-is-candid-image-photography-with-natural__37690.png",
    },
    {
      title: "API Development & Integration",
      description:
        "Your systems shouldn't work in silos. We create seamless connections between your platforms and favorite tools, making your workflow smoother and your data more powerful.",
      image: "/images/mockuuups-free-macbook-pro-mockup-on-stone-pedestal.jpeg",
    },
    {
      title: "Database Design & Management",
      description:
        "Your data is your business's goldmine. We design secure, lightning-fast databases that handle your growing data needs while keeping everything organized and accessible.",
      image:
        "/images/freepik__the-style-is-candid-image-photography-with-natural__37690.png",
    },
    {
      title: "Cloud Solutions",
      description:
        "Your application deserves infrastructure that never lets you down. We deploy your solutions on reliable cloud platforms that scale automatically and keep your costs predictable.",
      image: "/images/ProgrammeratWork.png",
    },
    {
      title: "E-commerce Development",
      description:
        "Your products deserve a store that converts visitors into customers. We build e-commerce platforms that make buying easy, managing inventory simple, and growing your sales inevitable.",
      image:
        "/images/freepik__the-style-is-candid-image-photography-with-natural__37690.png",
    },
  ];

  const benefitContent = [
    {
      title: "Your Data Stays Safe & Private",
      description:
        "Enterprise-grade security protects your business and customer information from threats and breaches.",
    },
    {
      title: "We're Your Long-Term Tech Partners",
      description:
        "You get dedicated support beyond launch - we're invested in your success, not just project completion.",
    },
    {
      title: "Seamless Experience Across Every Device",
      description:
        "One codebase, flawless performance everywhere - your users get the same premium experience on desktop, tablet, or phone",
    },
    {
      title: "Launch 3x Faster Than Your Competition",
      description:
        "Skip the trial-and-error phase. Our battle-tested development framework and pre-built modules mean your MVP hits the market in 6-8 weeks, not 6 months.",
    },
  ];
  return (
    <div className="w-full">
      {/* HERO SECTION  */}
      <div className="relative">
        <img
          src="/images/programming-background-with-person-working-with-codes-computer.jpg"
          className=" lg:h-[300px] object-cover h-[300px] w-full"
          alt="bg-image"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        <h1 className="lg:text-5xl text-3xl text-nowrap font-instrument-serif text-white text-center absolute top-1/2 left-1/2 -translate-1/2 z-1">
          Software Development
        </h1>
      </div>
      <div
        className="w-full h-72 bg-cover bg-center text-center flex flex-col items-center justify-center gap-8 rounded-xl my-6 lg:px-24 px-6"
        style={{
          backgroundImage: "url('/images/worldbg.svg')",
        }}
      >
        <p className="lg:text-3xl text-2xl font-instrument-serif lg:max-w-[550px]">
          We build software that automates your processes, scales with your
          growth, and delivers measurable business results through strategic,
          performance-driven development decisions.
        </p>
        <HoverButton
          href="/contact-us"
          text="Build your project"
          className="button-primary w-fit"
        />
      </div>
      {/* <-------------------SERVICES WE OFFER-------------------------> */}
      <div className="">
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
        <div className="flex flex-col items-center gap-8">
          {" "}
          {servicescontent.map((content, idx) => (
            <div
              className="sticky top-0 z-20 bg-white border-b-[1px] lg:px-12 lg:py-6 justify-center items-center w-full gap-12 flex lg:flex-row flex-col "
              key={idx}
            >
              <div
                className={`flex flex-col gap-4 items-start justify-normal
        ${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                <h2 className="font-instrument-serif text-3xl">
                  {content.title}
                </h2>
                <p>{content.description}</p>
              </div>
              <img
                className={`rounded-xl w-[400px] ${
                  idx % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
                src={content.image}
                alt={`${content.title} img`}
              />
            </div>
          ))}
        </div>
      </div>
      <Carasouel />
      {/* <----------------------BENEFITS OF USING SERVOICE SECTION----------------------> */}
      <div className="bg-off-white lg:p-12 p-6">
        <h2 className="text-4xl pb-12 text-center">
          Benefits of using our Development service
        </h2>
        <div className="flex lg:flex-row flex-col justify-center items-start lg:gap-32 gap-6">
          <img
            className="lg:w-[500px] w-full h-[400px] object-cover rounded-2xl"
            src="/images/Joyful Person with OK Gesture.jpeg"
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
