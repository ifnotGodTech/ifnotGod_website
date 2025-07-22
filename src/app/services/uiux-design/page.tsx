import HoverButton from "@/app/components/reusuables/buttonHover";
import AccordionSection from "@/app/components/design/Accordion";
import Carasouel from "@/app/components/design/Carasouel";
import { CheckCircle2Icon } from "lucide-react";
import React from "react";
import { CgArrowRight } from "react-icons/cg";

const page = () => {
  const servicescontent = [
    {
      title: "Mobile App Deisign",
      description:
        "Your app idea deserves an interface that users love. We create intuitive, beautiful mobile designs that make complex features feel simple and keep users coming back for more.",
      image: "/images/itestify-app.png",
    },
    {
      title: "UX Research",
      description:
        "We talk to your real users to figure out what they love, what frustrates them, and what they actually need. No guessing games - just solid insights that guide better design decisions.",
      image:
        "/images/freepik__the-style-is-candid-image-photography-with-natural__37690.png",
    },
    {
      title: "Web Deisign",
      description:
        "We design websites that don't just look good - they convert visitors into customers. Clean, modern designs that work perfectly on every device and actually help your business grow.",
      image: "/images/mockuuups-free-macbook-pro-mockup-on-stone-pedestal.jpeg",
    },
    {
      title: "Prototyping",
      description:
        "Before we build anything, let's make sure it works. We create interactive prototypes so you can click through your app or website, test the flow, and perfect the experience before development starts.",
      image: "/images/man-designing-websites-high-angle.png",
    },
  ];

  const benefitContent = [
    {
      title: "Boost Conversion Rates by 200%+",
      description:
        "Well-designed interfaces turn more visitors into customers and leads.",
    },
    {
      title: "Reduce User Friction",
      description:
        "We design intuitive navigation that eliminates confusion and prevents users from leaving.",
    },
    {
      title: "Build Brand Trust & Credibility",
      description:
        "Our professional designs make users confident in choosing your business over competitors.",
    },
    {
      title: "Align Design with Marketing Goals",
      description:
        "We make sure every visual element supports your conversion and branding objectives.",
    },
    {
      title: "Create Memorable First Impressions",
      description:
        "We design striking interfaces that make users want to stay and explore your product.",
    },
    {
      title: "Improve Mobile Experience",
      description:
        "We ensure your product works flawlessly across all devices with responsive design.",
    },
  ];
  return (
    <div className="w-full">
      {/* HERO SECTION  */}
      <div className="relative">
        <img
          src="/images/high-angle-hands-holding-paper(1).jpg"
          className=" lg:h-[300px] object-cover h-[300px] w-full"
          alt="bg-image"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        <h1 className="lg:text-5xl text-3xl font-instrument-serif text-white text-center absolute top-1/2 left-1/2 -translate-1/2 z-1">
          UI/UX Design
        </h1>
      </div>
      <div
        className="w-full h-72 bg-cover bg-center text-center flex flex-col items-center justify-center gap-8 rounded-xl my-6 lg:px-24 px-6"
        style={{
          backgroundImage: "url('/images/worldbg.svg')",
        }}
      >
        <p className="lg:text-3xl text-2xl font-instrument-serif lg:max-w-[550px]">
          We create designs that convert visitors into customers, engage users,
          and drive measurable business growth through strategic, data-backed
          design decisions
        </p>
        <HoverButton
          href="/contact-us"
          text="Start your UI/UX Project"
          className="button-primary w-fit"
        />
      </div>
      {/* <-------------------SERVICES WE OFFER-------------------------> */}
      <div className="">
        <div className="flex lg:flex-row flex-col lg:justify-between justify-normal gap-6 lg:gap-0 lg:items-center w-full lg:p-12 py-6 px-3">
          <h1 className="text-4xl font-instrument-serif capitalize  ">
            Services We Offer
          </h1>
          <HoverButton
            href="/contact-us"
            text="See More"
            className="button-primary"
            icon={<CgArrowRight />}
          />
        </div>
        <div className="flex flex-col items-center gap-8">
          {" "}
          {servicescontent.map((content, idx) => (
            <div
              className="sticky top-0 z-20 bg-white border-b-[1px] p-6 lg:px-12  flex lg:flex-row flex-col justify-center items-center w-full gap-12"
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
      <div className="bg-off-white p-6 pb-12">
        <h2 className="text-4xl pb-12 text-center">
          Benefits of using our service
        </h2>
        <div className="flex lg:flex-row flex-col justify-center items-start lg:gap-32 gap-6">
          <img
            className="lg:w-[400px] w-full h-[400px] object-cover rounded-2xl"
            src="/images/freepik__the-style-is-candid-image-photography-with-natural__63828.png"
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
