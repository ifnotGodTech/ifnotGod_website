"use client";
import React from "react";
import HoverButton from "./buttonHover";

const Cardbuild = () => {
  return (
    <div
      className="rounded-lg lg:mx-20 mx-2 lg:my-12 my-8 bg-background"
      style={{
        backgroundImage: "url(/images/backgroundcontact.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center text-center gap-4 lg:py-20 py-10 px-4">
        <h3 className="lg:text-4xl text-xl text-background">
          Let&apos;s build something amazing together
        </h3>
        <p className="lg:text-sm text-xs text-nowrap text-background">
          Got a project idea? We&apos;d love to hear about it! Book a Call with
          Us
        </p>
        <div className="flex gap-3 lg:mt-6">
          <HoverButton
            href="/contact-us"
            text="Contact us"
            className="button-secondary"
          />
          <HoverButton
            href="/book-a-call"
            text="Book a free call"
            className="button-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Cardbuild;
