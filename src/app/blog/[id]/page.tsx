"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { blogProps } from "../page";
import { blogPosts } from "../data";
import Cardbuild from "@/app/components/reusuables/cardbuild";

const Page = () => {
  const params = useParams();
  const id = Number(params?.id);
  const router = useRouter();
  const [fullBlogPost, setFullBlogPost] = useState<blogProps[]>(blogPosts);

  const findBlog = fullBlogPost.find((item) => item.id === id);
  if (!findBlog) {
    return <div className="p-12">Blog post not found.</div>;
  }

  return (
    <>
      <div
        onClick={() => router.back()}
        className="flex items-center justify-normal gap-1 px-6 pt-4 cursor-pointer"
      >
        <MdArrowBack fill="var(--primary)" />
        <p className="text-primary">Back to Blog</p>
      </div>
      <div className="lg:px-12 p-6">
        <div className="text-center flex flex-col items-center justify-center gap-2">
          <h1 className="lg:text-5xl text-3xl">{findBlog.title}</h1>
          <p>{findBlog.preview}</p>
          <div className="flex items-center gap-1 lg:tet-base text-xs">
            <p>Oreoluwa Adu</p>
            <div className="w-2 h-2 bg-gray rounded-full lg:text-base text-xs" />
            <p>{findBlog.date}</p>
            <div className="w-2 h-2 bg-gray rounded-full lg:text-base text-xs" />
            <p>{findBlog.readTime}</p>
          </div>
        </div>
        <img
          src={findBlog.image}
          alt="blogImage"
          className="rounded-2xl w-full lg:h-84 h-52 object-cover my-6"
        />
        <div className="py-7">
          <p className="text-gray">
            In today&apos;s rapidly evolving digital landscape, businesses face the
            challenge of building software systems that can grow and adapt
            alongside their expanding operations. Scalable software architecture
            isn&apos;t just a luxury—it&apos;s a necessity for companies that want to
            thrive in competitive markets.
          </p>
          <div>
            <p className="text-xl font-bold py-2">
              {" "}
              What is Scalable Software Architecture?
            </p>
            <p className="text-gray">
              Scalable software architecture refers to the design and structure
              of software systems that can handle increased workload, users, and
              data without compromising performance or requiring complete system
              overhauls. It&apos;s about building systems that grow gracefully with
              your business.
            </p>
            <div>
              <p className="text-xl font-bold py-2">
                {" "}
                Key Principles of Scalable Architecture
              </p>
              <p className="pb-6">
                Building scalable software requires adherence to several
                fundamental principles:
              </p>
              <ol className="flex flex-col gap-4 ">
                <li className="list-item">
                  {" "}
                  1. Modular Design
                  <p className="text-gray">
                    Break your application into smaller, independent modules
                    that can be developed, tested, and deployed separately. This
                    approach, often called microservices architecture, allows
                    different parts of your system to scale independently based
                    on demand.
                  </p>
                </li>
                <li>
                  2. Stateless Design
                  <p className="text-gray">
                    Design your application components to be stateless whenever
                    possible. This means that each request should contain all
                    the information needed to process it, without relying on
                    stored session data.
                  </p>
                </li>
                <li>
                  3. Database Optimization
                  <p className="text-gray">
                    Implement proper database design patterns including:
                    Efficient indexing strategies Database sharding for
                    horizontal scaling Read replicas for improved performance
                    Caching layers to reduce database load
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <RelatedPosts />
      <Cardbuild />
    </>
  );
};

export default Page;

const RelatedPosts = () => {
  return (
    <div className="lg:px-12 px-6">
      <h1 className="text-3xl">Related Posts</h1>
      <div className="lg:grid lg:grid-cols-3 flex justify-between overflow-x-auto snap-mandatory scrollbar-hide place-items-center pt-6 gap-3">
        {[...Array(3)].map((_, i) => (
          <div
            className="flex flex-col gap-4 items-start max-w-[350px] lg:max-w-96"
            key={i}
          >
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
              Learn the basics of React development and start building modern
              web applications.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
