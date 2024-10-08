import React from 'react';

const Copyright = () => {
  return (
    <div className="flex flex-col grow shrink self-stretch my-auto max-w-[820px] min-w-[240px] w-[738px] max-md:max-w-full">
      <div className="flex flex-wrap justify-center items-center w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink self-stretch px-4 my-auto text-base leading-7 basis-0 max-w-[410px] min-w-[240px] text-white text-opacity-70">
          <div className="pb-px w-full">
            © 2024 AdLift. All rights reserved.
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink self-stretch pr-3.5 pl-4 my-auto basis-0 max-w-[410px] min-w-[240px]">
          <div className="flex w-full">
            <div className="flex flex-col justify-center pb-3 w-[99px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/64475c01ba771804aed70eb2930f8490b1d103cf551b10758030f2ddeb307e49?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d" className="object-contain aspect-[2.25] w-[99px]" alt="Logo 1" />
            </div>
            <div className="flex flex-col justify-center items-start pl-12 w-[193px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e628c23cb2b342bf51870ca47eb47b5b2b616343dc99612cb80dcb51cdae1db3?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d" className="object-contain max-w-full aspect-[2.55] w-[143px]" alt="Logo 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;