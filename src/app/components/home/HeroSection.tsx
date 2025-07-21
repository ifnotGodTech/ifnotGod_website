"use client";
import Link from "next/link";
import HoverButton from "../buttonHover";

const HeroSection = () => {
  return (
    <div className="bg-[#FAFAFA] lg:p-20 p-4 rounded-lg lg:m-12 m-5">
      <div className="flex items-center justify-center text-center flex-col lg:gap-8 gap-4">
        <h1 className="font-instrument-serif text-foreground capitalize lg:text-[70px] text-3xl">
          A full-cycle software and design agency building digital products for
          <span className="text-primary italic"> business growth.</span>
        </h1>
        <p className="text-foreground lg:w-[600px]">
          We’re not just builders — we’re your digital partners, focused on
          creating seamless, user-centered solutions that make an impact.
        </p>
        <div className="flex gap-3">
           <HoverButton href="/contact-us" text="Contact us" className="button-secondary"/>
           <HoverButton href="/contact-us" text="Book a free call" className="button-primary"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
