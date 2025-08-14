"use client";
import React, { useEffect } from "react";

const BookingPage = () => {
  useEffect(() => {
    if (!document.querySelector('script[data-tidycal="embed"]')) {
      const script = document.createElement("script");
      script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
      script.async = true;
      script.setAttribute("data-tidycal", "embed");
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
      <iframe
        src="https://tidycal.com/faithi/15-minute-meeting"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default BookingPage;
