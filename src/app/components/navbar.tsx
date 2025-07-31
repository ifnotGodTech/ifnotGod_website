"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiArrowDropDownFill } from "react-icons/ri";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import HoverButton from "./reusuables/buttonHover";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [openServices, setopenServices] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const route = useRouter();
  const pathname = usePathname();

  const navItems = [
    { href: "/about-us", label: "About us" },
    { href: "/our-portfolio", label: "Our Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact us" },
  ];
  const servicesItems = [
    {
      href: "/services/uiux-design",
      name: "UI/UX Design",
      description: "Design interfaces that solve user problems.",
    },
    {
      href: "/services/software-development",
      name: "Software Development",
      description:
        "Build custom web and mobile applications that scale with your business.",
    },
    {
      href: "/services/quality-assurance",
      name: "Quality Assurance",
      description:
        "Ensure your software works flawlessly through comprehensive testing.",
    },
    {
      href: "/services/IT-consulting",
      name: "IT Consulting",
      description:
        "Get expert guidance to optimize your technology strategy and operations.",
    },
  ];
  const findname =
    servicesItems.find((item) => item.href === pathname)?.name ||
    navItems.find((item) => item.href === pathname)?.label;
  const isServicesActive = servicesItems.some((item) => item.href === pathname);
  const isDynamicBlog = pathname.startsWith("/blog/") && pathname !== "/blog";

  return (
    <>
      <nav className="relative p-4 bg-background lg:flex justify-between items-center w-full px-12 hidden">
        <img
          src="/images/MAIN-IFNOTGODTECH-LOGO.png"
          className="w-24 cursor-pointer"
          alt="logo"
          onClick={() => route.push("/")}
        />
        <div className="lg:flex justify-center items-center gap-4">
          <div>
            <div
              className={`flex items-center gap-1 cursor-pointer ${
                isServicesActive ? "text-primary" : ""
              } hover:text-primary transition-colors`}
              onClick={() => setopenServices(!openServices)}
            >
              <p>Services</p>
              <RiArrowDropDownFill
                className={`hover:fill-primary ${
                  openServices ? `rotate-180` : ``
                }`}
              />
            </div>

            {openServices && (
              <div className="bg-background text-gray py-4 px-8 z-20 flex justify-normal items-center w-fit absolute top-16 left-2  shadow-lg overflow-x-hidden ">
                {servicesItems.map((item, idx) => (
                  <div
                    className="flex flex-col justify-normal items-start hover:bg-gray-200 cursor-pointer p-3 min-w-[250px] rounded-xl"
                    key={idx}
                    onClick={() => {
                      route.push(item.href);
                      setopenServices(false);
                    }}
                  >
                    <h1 className="text-2xl font-instrument-serif">
                      {item.name}
                    </h1>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <Link
              onClick={() => openServices && setopenServices(false)}
              key={item.label}
              href={item.href}
              className={`capitalize cursor-pointer ${
                item.href === pathname ? "text-primary" : "text-gray-600"
              } hover:text-primary transition-colors`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <HoverButton
          href="/contact-us"
          text="Book a free call"
          className="button-primary"
        />
      </nav>

      {/* <---------------------------MOBILE NAV -----------------------------> */}
      <nav className="block lg:hidden">
        <div className="flex justify-between items-center w-full p-4">
          <img
            src="/images/MAIN-IFNOTGODTECH-LOGO.png"
            className="w-24"
            alt="logo"
            onClick={() => route.push("/")}
          />
          <Menu onClick={() => setOpenNav(!openNav)} />
        </div>
        <AnimatePresence>
          {openNav && (
            <motion.div
              key="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-col justify-normal items-start pt-6">
                {/* Services toggle */}
                <div
                  className={`flex items-center gap-1 cursor-pointer ${
                    isServicesActive ? "text-primary" : ""
                  } px-5 pt-7 pb-4 border-b-1 border-b-gray w-full`}
                  onClick={() => setopenServices(!openServices)}
                >
                  <p className="hover:text-primary transition-colors">
                    Services
                  </p>
                  <RiArrowDropDownFill
                    className={`hover:fill-primary ${
                      openServices ? `rotate-180` : ``
                    } transition-transform duration-300`}
                  />
                </div>

                {/* Services list */}
                {openServices && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bg-background text-gray flex flex-col justify-normal items-start w-full overflow-hidden"
                  >
                    {servicesItems.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          route.push(item.href);
                          setOpenNav(false);
                          setopenServices(false);
                        }}
                        className="flex flex-col justify-normal items-start p-4 hover:bg-gray-200"
                      >
                        <h1 className="text-2xl font-instrument-serif">
                          {item.name}
                        </h1>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Main nav links */}
                {navItems.map((item) => (
                  <Link
                    onClick={() => setOpenNav(false)}
                    key={item.label}
                    href={item.href}
                    className={`w-full capitalize cursor-pointer ${
                      item.href === pathname ? "text-primary" : "text-gray-600"
                    } hover:text-primary transition-colors border-b-1 border-b-gray px-5 pt-7 pb-4`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="w-full px-4 mt-6 flex items-center">
                <HoverButton
                  href="/contact-us"
                  text="Book a free call"
                  className="w-[90vw] py-3 text-center button-primary"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {!isDynamicBlog && pathname !== "/" && (
        <p className="lg:px-12 lg:p-4  p-6 ">
          <Link className="text-gray" href="/">
            Home/
          </Link>{" "}
          <span className="text-black">{findname}</span>
        </p>
      )}
    </>
  );
};

export default Navbar;
