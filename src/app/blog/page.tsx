import React from "react";

const page = () => {
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
        <h1 className="lg:text-5xl text-3xl text-nowrap font-instrument-serif text-white text-center absolute top-1/2 left-1/2 -translate-1/2 z-1">
          The IFNOTGODTECH Blog
        </h1>
      </div>
    </div>
  );
};

export default page;
