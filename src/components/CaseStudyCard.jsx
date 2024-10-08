import React from 'react';

const CaseStudyCard = ({ logo, percentage, metric }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-4 pt-12 min-h-[412px]">
        <div className="flex flex-col w-full">
          <div className="flex justify-center items-center px-20 py-16 w-full bg-[linear-gradient(180deg,#0071DC_0%,#18212B_100%)] min-h-[220px] rounded-[30px_30px_0px_0px] max-md:px-5">
            <div className="flex flex-col flex-1 shrink justify-center items-center self-stretch my-auto w-full basis-0">
              <img loading="lazy" src={logo} className="object-contain max-w-full aspect-[2.27] w-[200px]" alt="Company logo" />
            </div>
          </div>
          <div className="flex flex-col gap-0 px-8 pt-5 pb-10 w-full bg-gray-900 rounded-none max-md:px-5">
            <div className="flex w-full h-[58px]">
              <div className="flex flex-col pb-2 text-3xl font-medium leading-8 text-white whitespace-nowrap w-[66px]">
                <div className="z-10 min-h-[50px]">{percentage}</div>
              </div>
              <div className="self-end text-base leading-7 min-h-[58px] text-neutral-300">
                {metric}
              </div>
            </div>
            <div className="self-start text-base leading-6 text-white">
              See Case Study
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;