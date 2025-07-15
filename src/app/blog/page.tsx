"use client";
import React, { useState, useEffect } from "react";
import Cardbuild from "../components/reusuables/cardbuild";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { blogPosts } from "./data";
export type blogProps = {
  id: number;
  image: string;
  title: string;
  date: string;
  category: string;
  preview: string;
  readTime: string;
};
const Page = () => {
  const route = useRouter();
  const [blogState, setBlogState] = useState<blogProps[]>(blogPosts);
  const [contentState, setContentState] = useState("All Posts");
  const typeContent = [
    "All Posts",
    "Software Development",
    "UI/UX Design",
    "IT Consulting",
    "Quality Assurance",
  ];

  useEffect(() => {
    if (contentState === "All Posts") {
      setBlogState(blogPosts);
    } else {
      const filtered = blogPosts.filter(
        (item) => item.category === contentState
      );
      setBlogState(filtered);
    }
  }, [contentState]);

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
      <div className="lg:p-12 p-6">
        <div className="flex item-center lg:justify-center justify-normal gap-3 w-full flex-wrap lg:flex-nowrap">
          {typeContent.map((item, idx) => (
            <p
              className={`${
                contentState === item
                  ? `bg-primary text-background`
                  : `border-gray border-[1px]`
              } rounded-2xl p-2  w-fit cursor-pointer`}
              key={idx}
              onClick={() => setContentState(item)}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 pt-6 lg:gap-6 gap-12">
          {blogState.map((item) => (
            <div
              className="flex flex-col gap-2 items-start max-w-[350px] lg:max-w-96"
              key={item.id}
            >
              <img
                src={item.image}
                alt="programmer at work"
                className="rounded-2xl lg:w-96 min-w-[350px] cursor-pointer hover:opacity-70"
                onClick={() => route.push(`/blog/${item.id}`)}
              />
              <div className="flex justify-between items-center max-w-84 w-full text-sm">
                <button className="rounded-xl p-2 border-[1px] border-foreground text-xs lg:text-sm">
                  {item.category}
                </button>
                <div className="flex items-center gap-1 lg:tet-base text-xs">
                  <p>{item.date}</p>
                  <div className="w-2 h-2 bg-gray rounded-full lg:text-base text-xs" />
                  <p>{item.readTime}</p>
                </div>
              </div>
              <h3 className="lg:text-3xl text-lg font-instrument-serif ">
                {item.title}
              </h3>
              <p className="text-gray lg:text-base text-sm">{item.preview}</p>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex justify-center items-center gap-4 pt-8">
          <GrFormPrevious
            className="w-12 h-12 rounded-full border-2 border-black cursor-pointer"
            // onClick={prev}
          />
          <p>Page 1 out of 4</p>
          <GrFormNext
            // onClick={next}
            className="w-12 h-12 rounded-full border-2 border-primary cursor-pointer"
            stroke="#CA5202"
          />
        </div>
      </div>
      <Cardbuild />
    </div>
  );
};

export default Page;
