import React from 'react';

const StartupCard = ({ name, raisedFunds, caseStudy, logo }) => {
  return (
    <div className="flex flex-wrap pb-px w-full border-b border-solid border-b-gray-900 max-md:max-w-full">
      <div className="flex flex-col grow shrink justify-center p-2.5 min-w-[240px] w-[260px]">
        <div className="flex flex-col justify-center items-center pr-24 pl-24 w-full max-md:px-5">
          <img loading="lazy" src={logo} className="object-contain aspect-[3] max-w-[305px] w-[120px]" alt={`${name} logo`} />
        </div>
      </div>
      <div className="flex relative flex-col grow shrink px-32 py-2.5 text-sm leading-6 text-white min-w-[240px] w-[335px] max-md:px-5">
        <div className="flex absolute inset-x-0 -bottom-0.5 z-0 max-w-full border-solid border-b-[5px] border-b-gray-800 border-x-[5px] border-x-gray-800 min-h-[60px] top-[3px] w-[400px]" />
        <div className="flex z-0 flex-col self-center px-3 pt-0.5 pb-1 pb-1 w-full bg-amber-600 rounded max-w-[152px]">
          <div className="py-0.5 pr-1.5 pl-8 max-md:pl-5">{raisedFunds}</div>
        </div>
      </div>
      <div className="flex flex-col grow shrink px-2.5 pt-4 pb-5 text-sm leading-6 text-center text-amber-600 min-w-[240px] w-[260px]">
        <div className="flex flex-col items-center px-24 pb-px w-full max-md:px-5">
          <div>{caseStudy}</div>
        </div>
      </div>
    </div>
  );
};

export default StartupCard;