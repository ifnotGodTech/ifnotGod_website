import React from "react";
import HeroSection from "../../components/home/HeroSection";
import Marquee from "../../components/home/Marquee";
import { CgArrowRight } from "react-icons/cg";
import Testimony from "../../components/home/Testimony";
import Accordion from "../../components/home/Accordion";
import Cardbuild from "@/app/components/reusuables/cardbuild";

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
        "/images/programming-background-with-person-working-with-codes-computer.jpg",
    },
    {
      id: 3,
      name: "Quality Assurance",
      content:
        "Quality is never an afterthought. Our QA team conducts comprehensive testing including functional, performance, and security testing. We catch bugs before your users do, ensuring a smooth launch and optimal user experience across all platforms and devices.",
      image:
        "/images/standard-quality-control-concept-m (1).jpg",
    },
    {
      id: 4,
      name: "IT Consulting",
      content:
        "We help you make smarter tech decisions. From choosing the right tools and architecture to planning your product roadmap, we provide strategic guidance to build efficiently and scale with confidence.",
      image:
        "/images/group-multinational-busy-people-working-office (1).jpg",
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
        <div className="p-6 lg:px-24 lg:py-12 ">
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
          <div className="flex lg:flex-row flex-col justify-center lg:gap-32 lg:items-center  lg:px-0">
            {[...Array(2)].map((_, idx) => (
              <div className="pt-8" key={idx}>
                <div className="bg-background rounded-xl p-3 lg:w-[400px] h-[250px] w-full ">
                  <img
                    src="/images/itestify-app.png"
                    className="lg:w-72 w-64 m-auto"
                    alt=""
                  />
                </div>
                <div className="text-background">
                  <h3 className="font-instrument-serif text-xl py-3">
                    iTestified
                  </h3>
                  <p className="lg:w-[450px] w-full">
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
        <div className="lg:p-12 p-6 bg-background">
          <h1 className="lg:text-6xl capitalize text-4xl font-instrument-serif text-center pb-12">
            From startup to enterprise, accelerate your business with complete
            digital solutions!
          </h1>
          <div className="flex flex-col items-center gap-8">
            {" "}
            {servicescontent.map((content, idx) => (
              <div
                className="flex lg:flex-row flex-col justify-center items-center w-full gap-12"
                key={idx}
              >
                <div
                  className={`flex flex-col gap-4 items-start justify-normal  ${
                    idx % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <h2 className="font-instrument-serif text-3xl">
                    {content.name}
                  </h2>
                  <p>{content.content}</p>
                </div>
                <img
                  className={`rounded-xl w-[400px] ${
                    idx % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  }`}
                  src={content.image}
                  alt={`${content.name} img`}
                />
              </div>
            ))}
          </div>
        </div>
        {/* <---------------------------END OF SERVICES SECTION WITH IMAGES---------------------------------------> */}

        {/* <------------------------------WHY YOU SHOULD JOIN US ---------------------------------> */}
        <div className="bg-foreground lg:p-24 p-6 text-background">
          <h1 className="font-instrument-serif text-4xl pb-12">
            Why You Should Choose IFNOTGODTECH
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-8">
            {whycontent.map((item) => (
              <div
                className="flex flex-col gap-3 bg-off-black border-background border-[0.5px] p-3 rounded-lg"
                key={item.title}
              >
                <h3 className="capitalize text-2xl font-instrument-serif">
                  {item.title}
                </h3>
                <p className="lg:text-base text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <---------------------END OF WHY YOU SHOULD JOIN US --------------------------------> */}
        <Testimony />
        {/* <--------------------------OUR INSIGHTS AND IDEAS--------------------------> */}
        <div className="bg-background lg:py-24 py-12 lg:px-12 px-6">
          <div className="flex lg:flex-row flex-col lg:justify-between justify-normal gap-6 lg:gap-0 lg:items-center w-full pb-4">
            <h1 className="text-4xl font-instrument-serif ">
              Our insights and ideas
            </h1>
            <button className="w-fit button-primary flex items-center justify-normal gap-3 text-sm ">
              See More
              <span>
                <CgArrowRight />
              </span>
            </button>
          </div>
          <div className="lg:grid lg:grid-cols-3 flex justify-between overflow-x-auto snap-mandatory scrollbar-hide place-items-center pt-6 gap-3">
            {[...Array(3)].map((_, i) => (
              <div className="flex flex-col gap-4 items-start max-w-[350px] lg:max-w-96" key={i}>
                <img
                  src="/images/ProgrammeratWork.png"
                  alt="programmer at work"
                  className="rounded-2xl lg:w-96 min-w-[350px]"
                />
                <div className="flex justify-between items-center max-w-84 w-full text-sm">
                  <button className="rounded-xl p-2 border-[1px] border-foreground text-xs lg:text-sm">
                    Development
                  </button>
                  <div className="flex items-center gap-1 lg:tet-base text-xs">
                    <p>June 20, 2025 </p>
                    <div className="w-2 h-2 bg-gray rounded-full lg:text-base text-xs" />
                    <p>5 min read</p>
                  </div>
                </div>
                <h3 className="lg:text-3xl text-lg font-instrument-serif ">
                  Building Scalable Software Architecture for Growing Businesses
                </h3>
                <p className="text-gray lg:text-base text-sm">
                  Learn the basics of React development and start building
                  modern web applications.
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* <-------------------------------END OF INSIGHTS AND IDEAS SECTIOn --------------------------> */}
        <Accordion />
        {/* <-----------------------------------CONTACT BOX ------------------------------> */}
        <Cardbuild/>
      </div>
    </div>
  );
};

export default Homepage;
