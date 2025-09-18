import { Mail, Phone } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import HoverButton from "./reusuables/buttonHover";
const Footer = () => {
  return (
    <div className="bg-near-black p-6 lg:p-12 text-background">
      <div className="flex lg:flex-row flex-col lg:justify-between gap-9 lg:gap-0 items-start w-full">
        <div className="flex flex-col gap-8 items-start">
          <img
            src="/images/ifnotgodtechlogo_dark.png"
            className="w-32"
            alt="logo"
          />
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-instrument-serif">
              Subscribe to our Newsletter
            </h3>
            <p className="text-xs lg:w-[350px]">
              Get our latest blog posts, industry insights, project tips, and
              exclusive offers — straight to your inbox.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3  grid-cols-2 gap-5">
          <div>
            <h4 className="text-2xl font-instrument-serif lg:pb-6 pb-3">Company</h4>
            <ul className="flex flex-col gap-2 lg:text-sm text-xs text-gray-black">
              <Link href="/about-us" className="cursor-pointer">
                About Us
              </Link>
              <Link href="" className="cursor-pointer">
                Services
              </Link>
              <Link href="/contact-us" className="cursor-pointer">
                Contact Us
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-instrument-serif lg:pb-6 pb-3">Services</h4>
            <ul className="flex flex-col gap-2 lg:text-sm text-xs text-gray-black">
              <Link href="/services/uiux-design" className="cursor-pointer ">
                UI/UX Design
              </Link>
              <Link href="/services/software-development" className="cursor-pointer ">
                Software Development
              </Link>
              <Link href="/services/quality-assurance" className="cursor-pointer ">
                Quality Assurance
              </Link>
              <Link href="/services/IT-consulting" className="cursor-pointer ">
                IT Consulting
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-instrument-serif lg:pb-6 pb-3">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-2 lg:text-sm text-xs text-gray-black">
              <li className="flex gap-2 items-center cursor-pointer">
                <CiLocationOn /> <span>Lagos Island</span>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <Mail className="w-3" />{" "}
                <a href="mailto:ifnotgodtech@gmail.com" className="text-nowrap">
                  ifnotgodtech@gmail.com
                </a>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <Phone className="w-3" /> <span className="text-nowrap">+234 91 234 56578</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-start justify-normal py-6 border-b-1 border-b-gray ">
        <div className="relative">
          <input
            type="email"
            name=""
            id=""
            className="p-2 rounded-md border-off-white pl-12 border-1 placeholder:text-xs"
            placeholder="example@gmail.com"
          />
          <Mail className="absolute left-3 top-2" stroke="#4E4F52" />
        </div>

         <HoverButton href="/book-a-call" text="Subscribe now" className="button-primary"/>
      </div>
      <div className="py-12 flex lg:flex-row flex-col justify-between lg:items-center gap-3 lg:gap-0">
        <p className="text-xs order-2 lg:order-1 text-gray-black">
          © {new Date().getFullYear()} IFNOTGODTECH. All rights reserved.
        </p>
        <div className="flex justify-normal items-center gap-3 order-1 lg:order-2">
          <FaInstagram className="w-6 h-8" />
          <FaFacebook className="w-6 h-8" />
          <FaXTwitter className="w-6 h-8" />
          <FaLinkedin className="w-6 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
