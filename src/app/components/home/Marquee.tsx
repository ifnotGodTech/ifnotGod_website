import React from "react";

const Marquee = () => {
  return (
    <div className="p-1 flex items-center justify-between w-full overflow-hidden whitespace-nowrap gap-8 bg-foreground">
      <img className="w-64 overflow-hidden animate-marquee whitespace-nowrap" src="/images/Travel_Mate_Logo.png" alt="" />
      <img className="w-64 overflow-hidden animate-marquee whitespace-nowrap" src="/images/Travel_Mate_Logo.png" alt="" />
      <img className="w-64 overflow-hidden animate-marquee whitespace-nowrap" src="/images/Travel_Mate_Logo.png" alt="" />
      <img className="w-64 overflow-hidden animate-marquee whitespace-nowrap" src="/images/Travel_Mate_Logo.png" alt="" />
      <img className="w-64 overflow-hidden animate-marquee whitespace-nowrap" src="/images/Travel_Mate_Logo.png" alt="" />
      <img className="w-64 overflow-hidden animate-marquee whitespace-nowrap" src="/images/Travel_Mate_Logo.png" alt="" />
      <img className="w-64 overflow-hidden animate-marquee whitespace-nowrap" src="/images/Travel_Mate_Logo.png" alt="" />
      <img className="w-64 overflow-hidden animate-marquee whitespace-nowrap" src="/images/Travel_Mate_Logo.png" alt="" />
    </div>
  );
};

export default Marquee;
