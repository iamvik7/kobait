import React from "react";
import HeroContent from "./HeroContent";
import ClientLogos from "./ClientLogos";
const Hero = () => {
  return (
    <section className="flex overflow-hidden z-0 flex-col self-stretch w-full max-md:max-w-full">
      <div className="flex flex-col pt-24 pb-8 w-full bg-amber-600 max-md:max-w-full">
        <div className="flex flex-col items-center px-32 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[1200px]">
            <HeroContent />
          </div>
        </div>
        <ClientLogos />
      </div>
    </section>
  );
};

export default Hero;
