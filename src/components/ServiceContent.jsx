import React from 'react';

const ServiceContent = () => {
  return (
    <div className="flex flex-col grow shrink min-w-[240px] w-[918px] max-md:max-w-full">
      <div className="flex flex-wrap w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink basis-[50px] min-w-[240px] max-md:max-w-full">
          <h2 className="w-full text-7xl font-light text-white leading-[77px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
            SEO that <br /> works
          </h2>
          <div className="flex flex-col mt-7 w-full max-md:max-w-full">
            <p className="pb-px w-full text-base leading-7 text-neutral-300 max-md:max-w-full">
              Are you jumping from one agency to another looking for an <br /> SEO plan that actually delivers your business goals? The <br /> buck stops here, at AdLift.
            </p>
            <p className="pb-px mt-4 w-full text-base leading-7 text-neutral-300 max-md:max-w-full">
              At AdLift, we don't focus on keywords alone. We focus on the <br /> big picture: bettering your page authority on search <br /> engines. This means directing more of the right kind of <br /> traffic to your site. In a nutshell? Not just more visits, but <br /> visits that convert.
            </p>
            <div className="flex flex-col justify-center items-center px-24 pt-4 mt-4 w-full max-md:px-5 max-md:max-w-full">
              <button className="flex justify-center items-center px-16 py-7 rounded-3xl border border-solid bg-zinc-700 bg-opacity-40 border-zinc-700 max-md:px-5">
                <span className="self-stretch my-auto text-lg font-semibold leading-7 text-center text-white uppercase">Learn more</span>
                <div className="flex flex-col items-start self-stretch pl-2.5 my-auto w-8 max-w-[493px]">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1950c00e18928a9d4f0d82b8b22e61cc4b10e1c4d0dc0e17101ac700d2177884?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d" className="object-contain aspect-[1.57] w-[22px]" alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink pl-12 basis-0 max-w-[483px] min-w-[240px] max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f774ba8da207e772575b1af3b21ce60ab5f19242b634e0a3ee8af1f6787d9d6e?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d" className="object-contain w-full aspect-[1.2] max-md:max-w-full" alt="SEO illustration" />
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;