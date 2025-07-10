import React from "react";
import HeroSection from "../components/home/HeroSection";
import Marquee from "../components/home/Marquee";
import { MdArrowRight } from "react-icons/md";
import { CgArrowRight } from "react-icons/cg";
import Testimony from "../components/home/Testimony";

const Homepage = () => {
  const servicescontent = [
    {
      id: 1,
      name: "UI/UX Design",
      content:
        "From user research to wireframing and prototyping, we design digital products that users love. Our design process focuses on understanding your users' needs and creating interfaces that are both beautiful and functional, ensuring your product stands out in the market.",
      image:
        "/images/freepik__the-style-is-candid-image-photography-with-natural__37690.png",
    },
    {
      id: 2,
      name: "Software Engineering",
      content:
        "We build robust, scalable applications using modern technologies. Our development process follows agile methodologies, ensuring clean code, proper testing, and on-time delivery. We specialize in web applications, mobile apps, and enterprise software solutions tailored to your business needs.",
      image:
        "/images/freepik__the-style-is-candid-image-photography-with-natural__37690.png",
    },
    {
      id: 3,
      name: "Quality Assurance",
      content:
        "Quality is never an afterthought. Our QA team conducts comprehensive testing including functional, performance, and security testing. We catch bugs before your users do, ensuring a smooth launch and optimal user experience across all platforms and devices.",
      image:
        "/images/freepik__the-style-is-candid-image-photography-with-natural__37690.png",
    },
    {
      id: 4,
      name: "IT Consulting",
      content:
        "We help you make smarter tech decisions. From choosing the right tools and architecture to planning your product roadmap, we provide strategic guidance to build efficiently and scale with confidence.",
      image:
        "/images/freepik__the-style-is-candid-image-photography-with-natural__37690.png",
    },
  ];
  const whycontent = [
    {
      title: "Data Driven Decisions",
      content:
        "We don't guess—we know. Every design choice and development decision is backed by user research, analytics, and testing. This ensures your product not only looks great but delivers real business results.",
    },
    {
      title: "Agile Partnership Approach",
      content:
        "You're not just a client; you're our partner. We work closely with you throughout the entire process, providing regular updates, incorporating your feedback, and ensuring the final product exceeds your expectations.",
    },
    {
      title: "Proven Track Record",
      content:
        "We've worked with clients across industries to deliver solutions that meet real needs. From smooth user experiences to stable, scalable products, our track record shows we don’t just promise results — we deliver them.",
    },
    {
      title: "Industry Expertise across sectors",
      content:
        "Our diverse portfolio spans multiple industries, giving us unique insights into what works across different markets. We bring cross-industry best practices to your specific business needs.",
    },
  ];
  return (
    <div className="">
      <HeroSection />
      <div className="bg-foreground mt-12">
        <Marquee />

        {/* <----------------------------------------IDEAS PORTFOLIO SECTION-------------------------------------------------> */}
        <div className="px-8 lg:px-24 lg:py-12 py-6">
          <div className="text-background flex lg:flex-row flex-col justify-between  w-full lg:items-center gap-6 lg:gap-32">
            <h2 className="lg:text-4xl text-2xl font-instrument-serif lg:w-[700px]">
              Turn your ideas into impactful digital experiences like these
            </h2>
            <button className="w-fit button-primary flex items-center justify-normal gap-3 text-sm ">
              Start your Project{" "}
              <span>
                <CgArrowRight />
              </span>
            </button>
          </div>
          <div className="flex lg:flex-row flex-col justify-center gap-32 items-center ">
            {[...Array(2)].map((item) => (
              <div className="pt-8" key={item}>
                <div className="bg-background rounded-xl p-3 w-[400px] h-[250px]">
                  <img
                    src="/images/itestify-app.png"
                    className="w-72 m-auto"
                    alt=""
                  />
                </div>
                <div className="text-background">
                  <h3 className="font-instrument-serif text-xl py-3">
                    iTestified
                  </h3>
                  <p className="w-[450px]">
                    A faith-based platform where Christians share testimonies to
                    encourage fellow believers. We handled the complete design
                    and development.
                  </p>
                  <div className="flex items-center gap-3 pt-6">
                    <button className="rounded-xl p-2 border-2 border-background">
                      Design
                    </button>
                    <button className="rounded-xl p-2 border-2 border-background">
                      Development
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <------------------------------ END OF IDEA PORTFOLIO SECTION------------------------------------> */}

        {/* <---------------------------------SERVICES SECTION WITH IMAGES -------------------------------------> */}
        <div className="p-12 bg-background">
          <h1 className="lg:text-6xl capitalize text-4xl font-instrument-serif text-center pb-12">
            From startup to enterprise, accelerate your business with complete
            digital solutions!
          </h1>
          <div className="flex flex-col items-center gap-8">
            {" "}
            {servicescontent.map((content) => (
              <div
                className="flex justify-center items-center w-full gap-12"
                key={content.id}
              >
                <div className="flex flex-col gap-4 items-start justify-normal odd:order-1 even:order-2">
                  <h2 className="font-instrument-serif text-3xl">
                    {content.name}
                  </h2>
                  <p>{content.content}</p>
                </div>
                <img
                  className="rounded-xl w-[400px] odd:order-2"
                  src={content.image}
                  alt={`${content.name} img`}
                />
              </div>
            ))}
          </div>
        </div>
        {/* <---------------------------END OF SERVICES SECTION WITH IMAGES---------------------------------------> */}

        {/* <------------------------------WHY YOU SHOULD JOIN US ---------------------------------> */}
        <div className="bg-foreground p-24 text-background">
          <h1 className="font-instrument-serif text-4xl pb-12">
            Why You Should Choose IFNOTGODTECH
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-8">
            {whycontent.map((item) => (
              <div className="flex flex-col gap-3 bg-off-black border-background border-[0.5px] p-3 rounded-lg">
                <h3 className="capitalize text-2xl font-instrument-serif">
                  {item.title}
                </h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <---------------------END OF WHY YOU SHOULD JOIN US --------------------------------> */}
        <Testimony />
        {/* <--------------------------OUR INSIGHTS AND IDEAS--------------------------> */}
        <div className="bg-background py-12 px-12">
          <div className="flex justify-between items-center w-full pb-4">
            <h1 className="text-4xl font-instrument-serif ">Our insights and ideas</h1>
            <button className="w-fit button-primary flex items-center justify-normal gap-3 text-sm ">
              See More
              <span>
                <CgArrowRight />
              </span>
            </button>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
