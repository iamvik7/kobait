import React from 'react';

const CEOSpeaks = () => {
  return (
    <section className="flex flex-col items-center px-10 pt-0 pb-24 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col pt-12 max-w-full w-[1360px]">
        <h2 className="flex px-20 pb-2 w-full text-7xl font-light text-white leading-[77px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
          <div className="min-w-[240px] max-md:text-4xl">CEO Speaks</div>
        </h2>
        <div className="flex overflow-hidden flex-col px-20 mt-8 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col justify-center pr-6 pl-2.5 w-full max-md:pr-5 max-md:max-w-full">
            <div className="flex flex-col flex-1 w-full max-w-[1165px] min-h-[1px] max-md:max-w-full">
              <div className="flex overflow-hidden flex-wrap justify-center w-full bg-gray-900 rounded-[30px]">
                <div className="flex flex-col grow shrink justify-center py-8 pl-12 max-w-[688px] min-w-[240px] w-[590px] max-md:max-w-full">
                  <div className="flex flex-col pb-8 w-full text-lg font-medium leading-8 text-white max-md:max-w-full">
                    <div className="flex flex-col pb-4 w-full max-md:max-w-full">
                      <div className="text-4xl font-light leading-[64px] max-md:max-w-full">
                        Prashant Puri
                      </div>
                      <div className="pb-px mt-2.5 text-amber-600 max-md:max-w-full">
                        CEO and Co-founder
                      </div>
                      <div className="pb-px whitespace-nowrap max-md:max-w-full">
                        AdLift
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pb-4 w-full text-base leading-7 text-neutral-300 max-md:max-w-full">
                    <img loading="lazy" src="http://b.io/ext_72-" className="object-contain aspect-[1.15] w-[30px]" alt="Quote icon" />
                    <div className="flex flex-col py-1.5 pr-8 w-full max-md:pr-5 max-md:max-w-full">
                      <div className="ml-10 max-md:max-w-full">
                        Prashant Puri, the CEO and Co-Founder of AdLift, is a seasoned speaker
                      </div>
                      <div className="mt-3 max-md:mr-2.5 max-md:max-w-full">
                        sought after for his expertise at top-tier digital marketing conferences and
                        publications. His knack for delivering insightful industry perspectives and
                        compelling case studies has impressed audiences for over 17 years!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col grow shrink px-4 max-w-[492px] min-w-[240px] w-[393px] max-md:max-w-full">
                  <div className="flex flex-col items-end w-full max-md:max-w-full">
                    <img loading="lazy" src="http://b.io/ext_73-" className="object-contain max-w-full aspect-[0.89] w-[322px]" alt="Prashant Puri" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col self-center pt-5 mt-8 max-w-full w-[1200px]">
          <img loading="lazy" src="http://b.io/ext_74-" className="object-contain w-full aspect-[13.7] max-md:max-w-full" alt="Decorative element" />
          <div className="flex flex-col justify-center items-center mt-8 w-full px-[462px] max-md:px-5 max-md:max-w-full">
            <button className="flex justify-center items-center px-16 py-7 rounded-3xl border border-solid bg-zinc-700 bg-opacity-40 border-zinc-700 max-md:px-5">
              <span className="self-stretch my-auto text-lg font-semibold leading-7 text-center text-white uppercase">Learn More</span>
              <div className="flex flex-col items-start self-stretch pl-2.5 my-auto w-8 max-w-[493px]">
                <img loading="lazy" src="http://b.io/ext_75-" className="object-contain aspect-[1.57] w-[22px]" alt="Arrow icon" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSpeaks;