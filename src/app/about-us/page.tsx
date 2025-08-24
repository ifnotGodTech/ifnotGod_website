"use client"
import React from "react";
import Testimony from "../components/home/Testimony";
import Cardbuild from "../components/reusuables/cardbuild";

const page = () => {


  const aboutcontent = [
    {
      title: "clear communication",
      description:
        "We believe transparency is the foundation of every successful project. From kickoff to delivery, we keep you updated every step of the way. Your vision guides the process; we just help bring it to life.",
    },
    {
      title: "Built-in Quality",
      description:
        "We don’t cut corners. With a product-first mindset, our team is committed to crafting software that’s clean, scalable, and robust. Every feature is tested and every detail is intentional.",
    },
    {
      title: "Client-centered delivery",
      description:
        "Your success is our success. We’re here to solve real problems, not just write code. Whether it’s your first app or your fifth, we tailor every solution to meet your goals and exceed expectations.",
    },
    {
      title: "Relationships that last",
      description:
        "We don’t aim for one-off projects—we build long-term partnerships. By understanding your business and supporting your growth, we become more than just a vendor. We become part of your team.",
    },
  ];
  const teamMember = [
    {
      img: "/images/teamphotos/Igiebor Elvis_Software Developer.JPG",
      name: "Elvis Igbiebor",
      role: "CEO/Software Engineer",
    },
    {
      img: "/images/teamphotos/Adu Oreoluwa_UI_UX Designer.jpg",
      name: "Adu Oreoluwa",
      role: "Lead Product Designer",
    },
    {
      img: "/images/teamphotos/Oyindamola Abolarin_QA Tester.jpg",
      name: "Oyindamola Abolarin",
      role: "Lead Software Tester",
    },
    {
      img: "/images/teamphotos/Edwin Chris.jpg",
      name: "Edwin Chris",
      role: "Lead Frontend Engineer",
    },
    {
      img: "/images/teamphotos/Okereke Faith_Software developer.jpg",
      name: "Okereke Faith",
      role: "Frontend Engineer",
    },
    {
      img: "/images/teamphotos/Godson Jeremiah_Backend Developer.jpg",
      name: "Godson Jeremiah",
      role: "Backend Engineer",
    },
    {
      img: "/images/teamphotos/Pamela.jpg",
      name: "Pamela Animam",
      role: "QA Tester",
    },
    {
      img: "/images/teamphotos/Tobechukwu Dike_QA Tester.jpg",
      name: "Tobechukwu Dike",
      role: "QA Tester",
    },
    {
      img: "/images/teamphotos/Abah Success_backend developer.jpg",
      name: "Abah Succeess",
      role: "Backend Engineer",
    },
    {
      img: "/images/teamphotos/Akinola Daniel_UI_UX Designer.jpg",
      name: "Akinola Daniel",
      role: "UI/UX Designer",
    },
  ];
  return (
    <div>
      {/* <------------------------HERO SECTION -------------------> */}
      <div className="relative">
        <img
          src="/images/aboutusimg.jpg"
          className=" lg:h-[300px] object-cover h-[300px] w-full"
          alt="bg-image"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        <h1 className="lg:text-5xl text-3xl text-nowrap font-instrument-serif text-white text-center absolute top-1/2 left-1/2 -translate-1/2 z-1">
          about us
        </h1>
      </div>
       
      {/* <-------------------OUR STORY-----------------------------------> */}
      <div className="lg:p-24 p-6 flex lg:flex-row lg:justify-center lg:items-start flex-col-reverse lg:gap-12 gap-6">
        <img
          src="/images/freepik__the-style-is-candid-image-photography-with-natural__37688.png"
          className="rounded-2xl object-contain lg:w-[400px] w-full"
          alt="team image"
        />
        <div className="text-gray ">
          <h3 className="mb-12 lg:text-5xl text-3xl text-foreground">
            Our Story
          </h3>
          <p>
            Founded in 2019 in Lagos, Nigeria, we started as three passionate
            developers who believed great software could be built anywhere. What
            began as a small team tackling local projects quickly evolved when
            we realized our biggest advantage: while our clients sleep, we code.
          </p>
          <p className="pt-4">
            In 2023, we launched our first two custom apps—real solutions that
            marked the start of our full-scale product delivery journey.
          </p>
          <p className="pt-4">
            We&apos;re here to help your company achieve its goals faster. While
            you focus on strategy and growth, we handle the technical heavy
            lifting—turning time zone differences into your advantage.{" "}
          </p>
          <p className="pt-4">
            Today, we&apos;re a team of 12 skilled professionals serving clients
            across Africa, Europe, and North America. We&apos;ve mastered
            seamless remote collaboration, ensuring consistent progress on your
            projects.
          </p>{" "}
          <p className="pt-4">
            We don&apos;t just build software—we build trust through consistent
            delivery, clear communication, and results that exceed expectations.
          </p>
        </div>
      </div>
      {/* <----------------------OUR MISSION -----------------------------> */}
      <div className="bg-foreground text-center text-background flex flex-col gap-6 lg:px-24 px-6 lg:py-12 py-8">
        <h1 className="lg:text-5xl text-3xl">Our mission</h1>
        <p className="lg:text-base text-sm">
          To deliver exceptional software solutions that transform businesses
          and serve people - recognizing that our talents, opportunities, and
          success come from God. We believe that if not for God&apos;s grace and
          provision, none of our achievements would be possible. Every project
          we undertake is an opportunity to steward our gifts faithfully,
          crafting software that not only meets your business objectives but
          creates lasting value for your company and users
        </p>
      </div>
      {/* <------------------WHAT IFNOTGODTECH IS ALL ABOUT--------------------> */}
      <div className="bg-background lg:p-12 p-6 ">
        <h1 className="lg:text-5xl text-3xl pb-6">IFNOTGODTECH Is All About</h1>
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8 lg:px-12">
            {" "}
            {aboutcontent.map((content, idx) => (
              <div
                className="flex lg:flex-row flex-col justify-center items-center w-full gap-12 rounded-xl shadow-lg p-4 lg:h-[300px]"
                key={idx}
              >
                <div
                  className={`flex flex-col gap-4 items-start justify-normal ${
                    idx % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <img
                    src="/icons/offericon.png"
                    className="lg:w-12 lg:h-12 h-7 w-7"
                  />
                  <h2 className="font-instrument-serif lg:text-3xl text-xl">
                    {content.title}
                  </h2>
                  <p className="text-gray lg:text-base text-sm">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <----------------------------MEET  OUR TEAM-----------------------------------> */}
      <div className="bg-foreground lg:py-12 py-6 text-background">
        <h2 className="lg:text-3xl text-xl text-center lg:pb-12 pb-3">Meet our team</h2>
        <div className=" grid lg:grid-cols-4 grid-cols-2 justify-items-center w-full place-items-center items-center lg:px-16 px-0">
          {teamMember.map((member, idx) => (
            <div
              className=" flex flex-col gap-4 items-center justify-center mx-auto border-near-black border-[1px] lg:p-9 py-9 px-5"
              key={idx}
            >
              <img
                src={member.img}
                alt="team picture"
                className="rounded-lg lg:min-h-52 lg:min-w-52 w-52 h-64 object-cover"
              />
              <div className="text-center">
                <h4 className="lg:text-2xl text-lg">{member.name}</h4>
                <p className="lg:text-base text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Testimony />
      <div className="pt-5" />
      <Cardbuild />
    </div>
  );
};

export default page;
