import HoverButton from "@/app/components/reusuables/buttonHover";
import AccordionSection from "@/app/components/quality-assurance/Accordion";
import Carasouel from "@/app/components/quality-assurance/Carousel";
import { CheckCircle2Icon } from "lucide-react";
import React from "react";
import { CgArrowRight } from "react-icons/cg";

const page = () => {
  const servicescontent = [
    {
      title: "Unit Testing",
      description:
        "We test individual code components in isolation to catch bugs at the source. Each function, method, and module is validated independently, ensuring your codebase is solid and reducing debugging time later.",
    },
    {
      title: "Functional Testing",
      description:
        "We verify that every feature works exactly as intended. From user login to payment processing, we test all functionalities against requirements to ensure your software delivers what users expect.",
    },
    {
      title: "Regression Testing",
      description:
        "We ensure new updates don't break existing features. Every time code changes, we run comprehensive tests to catch unintended side effects and maintain system stability across releases.",
    },
    {
      title: "Performance Testing",
      description:
        "We stress-test your application under real-world conditions. Load testing, stress testing, and scalability analysis ensure your software performs flawlessly whether you have 10 users or 10,000 simultaneously.",
    },
    {
      title: "Usability Testing",
      description:
        "We evaluate how real users interact with your software. Through user scenarios and feedback analysis, we identify friction points and ensure your application is intuitive and user-friendly.",
    },
    {
      title: "Non-Functional Testing",
      description:
        "We test everything beyond core features - security vulnerabilities, browser compatibility, accessibility compliance, and system reliability. This ensures your software meets quality standards.",
    },
  ];

  const benefitContent = [
    {
      title: "Prevent Costly Post-Launch Fixes",
      description:
        "Avoid the nightmare of emergency repairs when thousands of users are already using your software - we catch issues before they become expensive problems.",
    },
    {
      title: "Meet Compliance Requirements",
      description:
        "Our testing ensures your software meets industry standards and regulatory requirements from launch.",
    },
    {
      title: "Scalable Performance",
      description:
        "Performance testing ensures your software handles growth without crashes or slowdowns.",
    },
    {
      title: "Protect Your Brand Reputation",
      description:
        "Users remember bad experiences. Our testing ensures your software works flawlessly from day one, building trust and credibility.",
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
          Quality Assurance
        </h1>
      </div>
      <div
        className="w-full h-72 bg-cover bg-center text-center flex flex-col items-center justify-center gap-8 rounded-xl my-6 lg:px-24 px-6"
        style={{
          backgroundImage: "url('/images/worldbg.svg')",
        }}
      >
        <p className="lg:text-3xl text-2xl font-instrument-serif lg:max-w-[550px]">
          We guarantee your software meets your exact specifications, prevents
          costly post-launch issues and delivers flawless user experiences
          through comprehensive testing.
        </p>
        <HoverButton
          href="/contact-us"
          text="Contact us"
          className="button-primary w-fit"
        />
      </div>
      {/* <-------------------SERVICES WE OFFER-------------------------> */}
      <div className="bg-[#FAFAFA]">
        <div className="flex lg:flex-row flex-col lg:justify-between justify-normal gap-6 lg:gap-0 lg:items-center w-full pb-4  lg:py-12 py-6 lg:px-12 px-3">
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
        <div className="sticky bg-[#FAFAFA] top-0 z-30 lg:py-12 py-6 grid lg:grid-cols-2 grid-cols-1 items-center gap-8 lg:px-12 px-6 border-t-1">
          {servicescontent.map((content, idx) => (
            <div
              className="flex lg:flex-row flex-col justify-center items-center w-full gap-12 h-[200px]"
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
      <Carasouel />
      {/* <----------------------BENEFITS OF USING SERVOICE SECTION----------------------> */}
      <div className="bg-off-white lg:p-12 p-6 ">
        <h2 className="text-4xl pb-12 text-center">
          Benefits of using our Quality Assurance service
        </h2>
        <div className="flex lg:flex-row flex-col justify-center items-start lg:gap-12 gap-6">
          <img
            className="lg:w-[800px] w-full lg:h-[450px] h-[400px] object-cover rounded-2xl"
            src="/images/Smiling Young Man in Hoodie.jpeg"
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
