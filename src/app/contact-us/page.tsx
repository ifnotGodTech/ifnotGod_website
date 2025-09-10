"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import HoverButton from "../components/reusuables/buttonHover";
import axios from "axios";
import { Loader } from "lucide-react";
import { Toaster, toast } from "sonner";

type formData = {
  fullname: string;
  companyname: string;
  countrycode: string;
  phonenumber: string;
  email: string;
  service: string;
  description: string;
};
type CountryCode = {
  name: { common: string };
  cca2: string;
  idd: {
    root?: string;
    suffixes?: string[];
  };
};

const Page = () => {
  const typeContent = [
    "Software Development",
    "UI/UX Design",
    "IT Consulting",
    "Quality Assurance",
  ];
  const budget = [
    "Less than $1000",
    " $1000",
    " $2000",
    " $5000",
    " $5000 or more",
    "I'm not sure",
  ];
  const [loading, setLoading] = useState(false);
  const [selectContent, setSelectContent] = useState<string>("");
  const [selectBudget, setSelectBudget] = useState("");
  const [error, setError] = useState(false);
  const [countryCodes, setCountryCodes] = useState<CountryCode[]>([]);
  const [formData, setFormData] = useState<formData>({
    fullname: "",
    companyname: "",
    countrycode: "",
    phonenumber: "",
    email: "",
    service: "",
    description: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendMessage = async () => {
    const updatedData = {
      ...formData,
      service: selectContent,
      budget: selectBudget,
    };
    const params = {
      full_name: formData.fullname,
      company_name: formData.companyname,
      country_code: formData.countrycode,
      mobile_number: formData.phonenumber,
      email_address: formData.email,
      service: selectContent,
      project_description: formData.description,
      project_budget: selectBudget,
    };

    const formValid =
      updatedData.fullname &&
      updatedData.companyname &&
      updatedData.phonenumber &&
      updatedData.email &&
      updatedData.description &&
      updatedData.service.length > 0 &&
      updatedData.budget;
    try {
      setLoading(true);
      setError(false);
      if (!formValid) {
        setError(true);
        toast.error("Please fill in all details!")
      } else {
        await axios.post(
          "https://ifnotgod-website-backend.onrender.com/contact-us/",
          params
        );
        toast.success(
          "Message sent successfully! We'll get back to you in due time. "
        );
      }
      setFormData({
        fullname: "",
        companyname: "",
        countrycode: "",
        phonenumber: "",
        email: "",
        service: "",
        description: "",
      });
      setSelectContent("");
      setSelectBudget("");
    } catch (error: any) {
      console.log(error);
      toast.error("Sorry, that didn't go. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,cca2,idd"
        );
        const filtered = response.data.filter(
          (c: any) =>
            c.idd && c.idd.root && c.idd.suffixes && c.idd.suffixes.length > 0
        );
        const sorted = filtered.sort((a: any, b: any) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountryCodes(sorted);
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };
    fetchCodes();
  }, []);

  return (
    <div className="w-full">
      <Toaster position="top-right" richColors/>
      {/* <------------------------HERO SECTION -------------------> */}
      <div className="relative">
        <img
          src="/images/aboutusimg.jpg"
          className="object-cover h-[300px] w-full"
          alt="bg-image"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        <h1 className="lg:text-5xl text-3xl text-nowrap  text-white text-center absolute top-1/2 left-1/2 -translate-1/2 z-1">
          Contact Us
        </h1>
      </div>
      <div className="lg:px-24 px-6 py-12 flex lg:flex-row flex-col items-start justify-center w-full gap-6 lg:gap-12 bg-off-white">
        <div className="flex flex-col gap-4 lg:w-3/5 w-full">
          <h1 className="lg:text-4xl text-2xl text-center lg:text-left">
            Do you have a nice project idea
          </h1>
          <p>
            Share Your Project Details, We will Review your requirement and get
            back to you soon.
          </p>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
          }}
          className="pb-6 bg-white rounded-lg shadow-md p-6 w-full"
        >
          <div className="flex lg:flex-row flex-col gap-2 lg:justify-between w-full justify-normal lg:items-center items-start">
            <div className="flex flex-col gap-2 w-full">
              <p>Full Name</p>
              <input
                className={`${
                  error && !formData.fullname
                    ? `border-destructive`
                    : `border-gray`
                } border-[1px] rounded-md p-2 placeholder:text-xs`}
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Enter Full Name"
              />
              {error && !formData.fullname && (
                <small className="text-destructive text-xs">
                  This field is required
                </small>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p>Company Name </p>
              <input
                className={`${
                  error && !formData.companyname
                    ? `border-destructive`
                    : `border-gray`
                } border-[1px] rounded-md p-2 placeholder:text-xs`}
                type="text"
                name="companyname"
                value={formData.companyname}
                onChange={handleChange}
                placeholder="Enter Company Name"
              />
              {error && !formData.companyname && (
                <small className="text-destructive text-xs">
                  This field is required
                </small>
              )}
            </div>
          </div>
          <div className="flex gap-2 justify-normal items-end mt-8">
            <div className="flex flex-col gap-2">
              <p className="text-nowrap">Mobile Number</p>
              <DropdownMenu>
                <DropdownMenuTrigger className="relative">
                  <input
                    className={`${
                      error && !formData.countrycode
                        ? `border-destructive`
                        : `border-gray`
                    } border-[1px] rounded-md p-2 placeholder:text-xs lg:w-[150px] w-[100px] cursor-pointer`}
                    type="text"
                    value={formData.countrycode || "Select"}
                    readOnly
                  />
                  <IoMdArrowDropdown className="absolute top-1/2 right-2 -translate-1/2" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {countryCodes.length > 0 ? (
                    countryCodes.map((item: any, i: number) => {
                      const root = item?.idd?.root || "";
                      const suffix = item?.idd?.suffixes?.[0] || "";
                      const dialCode = root + suffix;

                      return (
                        <DropdownMenuItem
                          key={i}
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              countrycode: dialCode,
                            }));
                          }}
                        >
                          {dialCode} ({item.name.common})
                        </DropdownMenuItem>
                      );
                    })
                  ) : (
                    <DropdownMenuItem>Loading...</DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <input
              className={`${
                error && !formData.phonenumber
                  ? `border-destructive`
                  : `border-gray`
              } border-[1px] rounded-md p-2 placeholder:text-xs w-full`}
              type="number"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
            />
          </div>
          {error && !formData.phonenumber && (
            <small className="text-destructive text-xs">
              These field are required
            </small>
          )}
          <div className="flex flex-col gap-2 mt-8">
            <p>Email Address</p>
            <input
              className={`${
                error && !formData.email ? `border-destructive` : `border-gray`
              } border-[1px] rounded-md p-2 placeholder:text-xs`}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
            />
            {error && !formData.email && (
              <small className="text-destructive text-xs">
                This field is required
              </small>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <p>Project Budget</p>
            <DropdownMenu>
              <DropdownMenuTrigger className="relative">
                {" "}
                <input
                  className={`${
                    error && !formData.phonenumber
                      ? `border-destructive`
                      : `border-gray`
                  } border-[1px] border-gray rounded-md p-2  w-full placeholder:text-xs cursor-pointer`}
                  type="text"
                  placeholder="Select"
                  value={selectBudget}
                  readOnly
                />
                <IoMdArrowDropdown className="absolute top-1/2 right-2 -translate-1/2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-[var(--radix-popper-anchor-width)] min-w-[var(--radix-popper-anchor-width)]"
              >
                {budget.map((price, idx) => (
                  <DropdownMenuItem
                    key={idx}
                    onClick={() => setSelectBudget(price)}
                  >
                    {price}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {error && !selectBudget && (
            <small className="text-destructive text-xs">
              This field is required
            </small>
          )}
          <div className="mt-8">
            <p className="text-lg pb-3">How can we help you?</p>
            <div className="flex item-center justify-normal gap-3 w-full flex-wrap">
              {typeContent.map((item, idx) => (
                <p
                  onClick={() => {
                    setSelectContent(item);
                  }}
                  className={`rounded-md py-2 border px-4 w-fit text-sm cursor-pointer ${
                    selectContent.includes(item)
                      ? "bg-[#fbede4] border-primary"
                      : "bg-transparent border-gray"
                  }`}
                  key={idx}
                >
                  {item}
                </p>
              ))}
            </div>
            {error && selectContent.length < 1 && (
              <small className="text-destructive text-xs">
                This field are required
              </small>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <p>Project description</p>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about your project and any specific requirement you have in mind..."
              className="rounded-lg p-2 border-[1px] border-gray resize-none h-[150px] w-full placeholder:text-xs"
            ></textarea>
            {error && !formData.description && (
              <small className="text-destructive text-xs">
                This field is required
              </small>
            )}
          </div>
          <div className="flex lg:flex-row flex-col-reverse justify-between items-stretch lg:items-end lg:align-bottom w-full mt-8 lg:mt-4">
            <HoverButton
              href="/contact-us"
              text={loading ? "Sending" : "Send Message"}
              className={`button-primary mt-5 lg:mt-0 w-fit ${
                loading ? `bg-gray-300 cursor-not-allowed` : ``
              }`}
              type="submit"
              icon={loading && <Loader className="animate-spin" />}
            />

            <div className="flex flex-col text-sm">
              <p className="text-gray lg:text-right">Prefer email? </p>
              <a href="mailto:IfnotGodtech@gmail.com">IfnotGodtech@gmail.com</a>
            </div>
          </div>
        </form>
      </div>
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
            Got a project idea? We&apos;d love to hear about it! Book a Call
            with Us
          </p>

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

export default Page;
