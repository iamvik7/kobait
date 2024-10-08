import React from 'react';
import StartupCard from './StartupCard';


const startups = [
  { name: 'Company', raisedFunds: 'Stock Debut', caseStudy: 'See Case Study', logo: 'http://b.io/ext_76-' },
  { name: 'Company', raisedFunds: 'Stock Debut', caseStudy: 'See Case Study', logo: 'http://b.io/ext_77-' },
  { name: 'Company', raisedFunds: 'Stock Debut', caseStudy: 'See Case Study', logo: 'http://b.io/ext_78-' },
  { name: 'Company', raisedFunds: 'Stock Debut', caseStudy: 'See Case Study', logo: 'http://b.io/ext_79-' },
  { name: 'Company', raisedFunds: 'Stock Debut', caseStudy: 'See Case Study', logo: 'http://b.io/ext_80-' },
  { name: 'Company', raisedFunds: 'Stock Debut', caseStudy: 'See Case Study', logo: 'http://b.io/ext_81-' }
];

const AcquiredStartups = () => {
  return (
    <section className="flex flex-col py-24 w-full bg-gray-900 max-md:max-w-full">
      <h2 className="px-80 mx-5 text-3xl font-medium leading-9 text-center text-white max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
        Acquired & Amplified: The Startups We Rocketed
      </h2>
      <div className="flex overflow-hidden flex-col self-center px-12 mt-14 w-full max-w-[1200px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center pr-8 pl-5 w-full bg-gray-800 rounded-xl max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-col w-full h-[476px] max-md:max-w-full">
            <div className="flex flex-wrap pb-0.5 w-full text-base font-semibold leading-6 text-center text-amber-600 uppercase border-b-2 border-solid border-b-gray-900 max-md:max-w-full">
              <div className="grow shrink px-32 pt-6 pb-5 whitespace-nowrap min-w-[240px] w-[260px] max-md:px-5">
                Company
              </div>
              <div className="flex relative flex-col grow shrink justify-center px-24 pt-6 pb-5 min-w-[240px] w-[335px] max-md:px-5">
                <div className="flex absolute inset-x-0 z-0 max-w-full border-solid border-b-[5px] border-b-gray-800 border-x-[5px] border-x-gray-800 bottom-[-3px] min-h-[69px] rounded-[42px_42px_0px_0px] top-[3px] w-[400px]" />
                <div className="z-0 self-center">
                  Raised Funds / Acquired
                </div>
              </div>
              <div className="grow shrink pt-6 pr-28 pb-5 pl-28 min-w-[240px] w-[260px] max-md:px-5">
                Case Study
              </div>
            </div>
            {startups.map((startup, index) => (
              <StartupCard key={index} {...startup} />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-8 w-full text-lg font-semibold leading-7 text-center text-white uppercase px-[598px] max-md:px-5 max-md:max-w-full">
          <button className="self-stretch px-16 py-7 rounded-3xl border border-solid bg-zinc-700 bg-opacity-40 border-zinc-700 max-md:px-5">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AcquiredStartups;