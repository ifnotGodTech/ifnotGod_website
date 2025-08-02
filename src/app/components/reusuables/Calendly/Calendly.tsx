"use client";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

export default function Calendly() {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Only run on the client
    const el = document.getElementById("__next");
    if (el) setRootElement(el);
  }, []);

  if (!rootElement) return null; //

  return (
    <div className="cal_div">
      <PopupButton
        className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
        url="https://calendly.com/your-link"
        rootElement={document.getElementById("__next")!}
        text="Schedule Appointment"
      />
    </div>
  );
}
