import React from "react";
import HeroSection from "../components/home/HeroSection";
import Marquee from "../components/home/Marquee";
import { MdArrowRight } from "react-icons/md";
import { CgArrowRight } from "react-icons/cg";

const Homepage = () => {
  return (
    <div className="">
      <HeroSection />
      <div className="bg-foreground mt-12">
        <Marquee />
        {/* <----------------------------------------IDEAS PORTFOLIO SECTION-------------------------------------------------> */}
        <div className="px-20 py-12">
          <div className="text-background flex justify-between w-full items-center">
            <h2 className="lg:text-4xl text-2xl font-instrument-serif lg:w-[700px]">
              Turn your ideas into impactful digital experiences like these
            </h2>
            <button className="button-primary flex items-center justify-normal gap-3 text-sm ">
              Start your Project{" "}
              <span>
                <CgArrowRight />
              </span>
            </button>
          </div>
          <div className="grid grid-cols-2 place-items-center gap-8 justify-between">
            <div className="pt-8">
              <div className="bg-background rounded-xl p-3 w-[300px] h-[300px[]">
                <img src="/images/itestify-app.png" className="w-72" alt="" />
              </div>
              <div className="text-background">
                <h3 className="font-instrument-serif text-xl py-3">
                  iTestified
                </h3>
                <p className="">
                  A faith-based platform where Christians share testimonies to
                  encourage fellow believers. We handled the complete design and
                  development.
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
            <div className="pt-8">
              <div className="bg-background rounded-xl p-3 w-[300px] h-[300px[]">
                <img src="/images/itestify-app.png" className="w-72" alt="" />
              </div>
              <div className="text-background">
                <h3 className="font-instrument-serif text-xl py-3">
                  iTestified
                </h3>
                <p className="">
                  A faith-based platform where Christians share testimonies to
                  encourage fellow believers. We handled the complete design and
                  development.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
