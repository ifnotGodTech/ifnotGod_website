import React from "react";
import Cardbuild from "../components/reusuables/cardbuild";

const page = () => {
  const typeContent = [
    "All Posts",
    "Software Development",
    "UI/UX Design",
    "IT Consulting",
    "Quality Assurance",
  ];
  return (
    <div>
      {" "}
      {/* <------------------------HERO SECTION -------------------> */}
      <div className="relative">
        <img
          src="/images/aboutusimg.jpg"
          className=" lg:h-[300px] object-cover h-[300px] w-full"
          alt="bg-image"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        <h1 className="lg:text-5xl text-3xl text-nowrap  text-white text-center absolute top-1/2 left-1/2 -translate-1/2 z-1">
          Contact Us
        </h1>
      </div>
      <div className="lg:px-12 px-6 py-12 flex lg:flex-row flex-col items-start justify-center w-full gap-6 lg:gap-12 bg-off-white">
        <div className="flex flex-col gap-4 lg:w-2/5 w-full">
          <h1 className="lg:text-4xl text-2xl text-center lg:text-left">
            Do you have a nice project idea
          </h1>
          <p>
            Share Your Project Details, We will Review your requirement and get
            back to you soon.
          </p>
        </div>
        <form action="" className="pb-6 bg-white rounded-lg shadow-md p-6">
          <div className="flex lg:flex-row flex-col gap-3 lg:justify-between justify-normal lg:items-center items-start">
            <div className="flex flex-col gap-2">
              <p>Full Name</p>
              <input
                className="border-[1px] border-gray rounded-md p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>Company Name </p>
              <input
                className="border-[1px] border-gray rounded-md p-2"
                type="text"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-normal items-end mt-8">
            <div className="flex flex-col gap-2">
              <p className="text-nowrap">Mobile Number</p>
              <input
                className="border-[1px] border-gray rounded-md p-2 lg:w-[150px] w-[100px]"
                type="text"
              />
            </div>
            <input
              className="border-[1px] border-gray rounded-md p-2 w-full"
              type="number"
            />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <p>Email Address</p>
            <input
              className="border-[1px] border-gray rounded-md p-2 w-full"
              type="email"
              placeholder="example@email.com"
            />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <p>Project Budget</p>
            <input
              className="border-[1px] border-gray rounded-md p-2 w-full"
              type="text"
              placeholder="Select"
            />
          </div>
          <div className="mt-8">
            <p className="text-lg pb-3">How can we help you?</p>
            <div className="flex item-center justify-normal gap-3 w-full flex-wrap">
              {typeContent.map((item, idx) => (
                <p
                  className={`
                      border-gray border-[1px]
                   rounded-2xl p-2  w-fit cursor-pointer`}
                  key={idx}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <p>Project description</p>
            <textarea
              name=""
              id=""
              placeholder="Tell us about your project and any specific requirement you have in mind..."
              className="rounded-lg p-2 border-[1px] border-gray resize-none h-[150px] w-full"
            ></textarea>
          </div>
          <div className="flex lg:flex-row flex-col-reverse justify-between items-stretch lg:items-end lg:align-bottom w-full mt-8 lg:mt-auto">
            <button className="button-primary lg:mt-8 mt-3 py-3">
              Send Message
            </button>
            <div className="flex flex-col text-sm">
              <p className="text-gray lg:text-right">Prefer email? </p>
              <a href="mailto:IfnotGodtech@gmail.com">IfnotGodtech@gmail.com</a>
            </div>
          </div>
        </form>
      </div>
      <div className="lg:p-12 p-4 bg-background relative text-center w-full">
        <img
          src="/images/backgroundcontact.png"
          className="lg:h-auto rounded-2xl h-48"
          alt="bgimage"
        />
        <div className="rounded-2xl absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-2 items-center justify-center text-background lg:py-8 w-full px-12">
          <h3 className="lg:text-4xl text-xl ">
            Let&apos;s build something amazing together
          </h3>
          <p className="lg:text-sm text-xs">
            Got a project idea? We&apos;d love to hear about it! Book a Call
            with Us
          </p>
          <div className="flex items-center justify-center my-6">
            <button className="button-primary text-nowrap">
              Book A Free Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
