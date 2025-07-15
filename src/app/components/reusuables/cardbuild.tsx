'use client'
import React from "react";
import Link from "next/link";

const Cardbuild = () => {
  return (
    <div className="lg:p-12 p-4 bg-background relative text-center w-full">
      <img
        src="/images/backgroundcontact.png"
        className="lg:h-auto rounded-2xl h-42"
        alt="bgimage"
      />
      <div className="rounded-2xl absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-2 items-center justify-center text-background p-8 w-full">
        <h3 className="lg:text-4xl text-xl ">
          Let&apos;s build something amazing together
        </h3>
        <p className="lg:text-sm text-xs">
          Got a project idea? We&apos;d love to hear about it! Book a Call with Us
        </p>
        <div className="flex gap-3 lg:mt-6">
          <button className="button-secondary text-nowrap"><Link href="/contact-us">Contact Us</Link></button>
          <button className="button-primary text-nowrap">
            Book A Free Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardbuild;
