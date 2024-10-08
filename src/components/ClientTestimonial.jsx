import React from 'react';

const ClientTestimonial = () => {
  return (
    <div className="flex overflow-hidden flex-col grow shrink justify-center bg-gray-900 min-h-[1px] min-w-[240px] rounded-[30px] w-[920px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap justify-center bg-gray-900 rounded-[30px]">
        <div className="flex flex-col grow shrink justify-center py-8 pl-12 max-w-[688px] min-w-[240px] w-[590px] max-md:max-w-full">
          <div className="flex flex-col pb-8 w-full text-lg font-medium leading-8 text-white max-md:max-w-full">
            <div className="flex flex-col pb-4 w-full max-md:max-w-full">
              <div className="text-4xl font-light leading-[64px] max-md:max-w-full">
                Lomit Patel
              </div>
              <div className="pb-px mt-2.5 text-amber-600 whitespace-nowrap max-md:max-w-full">
                Tynker
              </div>
              <div className="pb-px max-md:max-w-full">
                Chief Marketing and Growth Officer
              </div>
            </div>
          </div>
          <div className="flex flex-col pb-4 w-full text-base leading-7 text-neutral-300 max-md:max-w-full">
            <img loading="lazy" src="http://b.io/ext_70-" className="object-contain aspect-[1.15] w-[30px]" alt="Quote icon" />
            <div className="flex flex-col py-1.5 w-full max-md:max-w-full">
              <div className="mr-4 ml-10 max-md:mr-2.5 max-md:max-w-full">
                We've seen a huge improvement in our SEO since working with AdLift, the
              </div>
              <div className="mt-3 max-md:max-w-full">
                biggest impact we've seen is by following the road map and the plan that
                <br /> they've come up with within the first four months, SEO traffic increased over 50%
                <br /> and it's continued to increase month, over month beyond that
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col grow shrink px-4 max-w-[492px] min-w-[240px] w-[393px] max-md:max-w-full">
          <div className="flex items-start w-full max-md:max-w-full">
            <img loading="lazy" src="http://b.io/ext_71-" className="object-contain aspect-[0.91] max-w-[492px] min-w-[240px] w-[367px]" alt="Lomit Patel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;