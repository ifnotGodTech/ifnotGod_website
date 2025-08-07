"use client"
import React from "react";
import { CgArrowRight } from "react-icons/cg";
import {motion} from "framer-motion"
import Cardbuild from "../components/reusuables/cardbuild";

const page = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="/images/aboutusimg.jpg"
          className="object-cover h-[300px] w-full"
          alt="bg-image"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        <h1 className="lg:text-5xl text-3xl text-nowrap  text-white text-center absolute top-1/2 left-1/2 -translate-1/2 z-1">
        Our Porfolio
        </h1>
      </div>
      <div className="p-6 lg:px-24 lg:py-12 ">
        <div className="flex lg:flex-row flex-col justify-center lg:gap-5 lg:items-start  lg:px-0">
          <div className="pt-8">
            <motion.div
              className="bg-gradient-to-b from-[#9F09BD] to-[#F2AEFF] rounded-xl p-3 lg:w-[400px] max-h-[250px] min-h-[250px] w-full text-white relative overflow-hidden"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {/* Image */}
              <motion.img
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.1 },
                }}
                transition={{ duration: 0.4, type: "spring" }}
                src="/images/itestify-app.png"
                className="lg:w-72 w-64 m-auto"
                alt="Project Preview"
              />

              {/* Arrow Icon */}
              <motion.div
                variants={{
                  rest: { opacity: 0, y: -40, scale: 0 },
                  hover: { opacity: 1, y: 0, scale: 1.2 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-8 h-8 bg-primary rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer z-10"
              >
                <CgArrowRight className="text-white" />
              </motion.div>
            </motion.div>
            <div className="text-foreground">
              <h3 className="font-instrument-serif text-xl py-3">iTestified</h3>
              <p className="lg:w-[450px] w-full text-sm">
                {" "}
                A faith-based platform where Christians share testimonies to
                encourage fellow believers. We handled the complete design and
                development.
              </p>
              <div className="flex items-center gap-3 pt-6">
                <button className="rounded-xl p-2 border-2 border-gray">
                  Design
                </button>
                <button className="rounded-xl p-2 border-2 border-gray">
                  Development
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <motion.div
              className="bg-[#002F61] rounded-xl p-3 lg:w-[400px] max-h-[250px] min-h-[250px] w-full text-white relative overflow-hidden"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {/* Image */}
              <motion.img
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.1 },
                }}
                transition={{ duration: 0.4, type: "spring" }}
                src="/images/travelmate_portfolio.png"
                className="lg:w-72 w-64 m-auto"
                alt="Project Preview"
              />

              {/* Arrow Icon */}
              <motion.div
                variants={{
                  rest: { opacity: 0, y: -40, scale: 0 },
                  hover: { opacity: 1, y: 0, scale: 1.2 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-8 h-8 bg-primary rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer z-10"
              >
                <CgArrowRight className="text-white" />
              </motion.div>
            </motion.div>
            <div className="text-foreground">
              <h3 className="font-instrument-serif text-xl py-3">TravelMate</h3>
              <p className="lg:w-[450px] w-full text-sm">
                A modern travel platform that lets users search,book flights,
                stays and airport taxis in one place. We led the end-to-end
                design and development for a seamless booking experience.
              </p>
               <div className="flex items-center gap-3 pt-6">
                <button className="rounded-xl p-2 border-2 border-gray">
                  Design
                </button>
                <button className="rounded-xl p-2 border-2 border-gray">
                  Development
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cardbuild/>
    </div>
  );
};

export default page;
