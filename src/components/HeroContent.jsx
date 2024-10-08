import React from 'react';

const HeroContent = () => {
  return (
    <div className="flex relative flex-col w-full max-md:max-w-full">
      <div className="flex z-0 flex-col w-full font-light text-white max-md:max-w-full">
        <div className="flex flex-wrap pt-10 pb-px pl-24 w-full whitespace-nowrap border-b border-solid border-b-white border-b-opacity-30 max-md:pl-5 max-md:max-w-full">
          <div className="text-xl leading-7">
            Reach <br /> that
          </div>
          <div className="flex flex-col justify-center pb-2 text-7xl leading-[60px] min-w-[240px] max-md:text-4xl">
            <div className="pl-5 min-h-[60px] min-w-[328px] max-md:text-4xl"> Engages </div>
          </div>
        </div>
        <div className="flex flex-wrap pt-10 pb-px w-full border-b border-solid border-b-white border-b-opacity-30 max-md:max-w-full">
          <div className="text-xl leading-7 whitespace-nowrap">
            Visits <br /> that
          </div>
          <div className="flex flex-col justify-center pb-2 text-7xl leading-[60px] min-w-[240px]">
            <div className="flex gap-5 items-end pl-5 min-h-[60px]">
              <div className="max-md:text-4xl">Convert </div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/857d77236a989799f56bd8f6c8b3b8072f7476ec331c3c87b17b0af2aac7a25e?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d" className="object-contain shrink-0 w-5 aspect-[0.47] max-w-[20px]" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap pt-10 pb-px pl-24 w-full whitespace-nowrap border-b border-solid border-b-white border-b-opacity-30 max-md:pl-5 max-md:max-w-full">
          <div className="text-xl leading-7">
            Spends <br /> that
          </div>
          <div className="flex flex-col justify-center pb-2 text-7xl leading-[60px] min-w-[240px] max-md:text-4xl">
            <div className="pl-5 min-h-[60px] min-w-[347px] max-md:text-4xl"> Augment </div>
          </div>
        </div>
      </div>
      <div className="flex absolute z-0 flex-col justify-center max-w-full left-[792px] right-[180px] top-[5px] w-[228px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/50c6b40bf974f8e2f1402c2a74053bbddfbbd4ab2a094b435ab1cddea1069364?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d" className="object-contain w-full aspect-square" alt="Decorative element" />
      </div>
    </div>
  );
};

export default HeroContent;