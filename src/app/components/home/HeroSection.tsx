
const HeroSection = () => {
  return (
    <div className="bg-[#FAFAFA] lg:p-20 p-8 rounded-lg lg:m-12 m-5">
      <div className="flex items-center justify-center text-center flex-col lg:gap-8 gap-4">
        <h1 className="font-instrument-serif text-foreground capitalize lg:text-[70px] text-4xl">
          A full-cycle software and design agency building digital products for
          <span className="text-primary font-instrument-serif">
            {" "}
            business growth.
          </span>
        </h1>
        <p className="text-foreground lg:w-[600px]">
          We’re not just builders — we’re your digital partners, focused on
          creating seamless, user-centered solutions that make an impact.
        </p>
        <div className="flex gap-3">
          <button className="button-secondary">Contact Us</button>
          <button className="button-primary">Book A Free Call</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
