import React from 'react';

const FooterLinks = () => {
  return (
    <div className="flex flex-col justify-center pb-12 w-full border-b border-solid border-b-white border-b-opacity-30 max-md:max-w-full">
      <div className="flex flex-wrap justify-center max-md:mr-0">
        <div className="flex flex-col grow shrink px-4 max-w-[308px] min-w-[240px] w-[246px]">
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center max-w-full w-[121px]">
              <img loading="lazy" src="http://b.io/ext_82-" className="object-contain self-stretch my-auto aspect-[2.05] max-w-[360px] w-[121px]" alt="AdLift logo" />
            </div>
          </div>
        </div>
        <div className="flex flex-col grow shrink text-sm font-medium leading-5 text-white uppercase max-w-[615px] min-w-[240px] w-[554px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-wrap max-md:max-w-full">
              <div className="flex flex-col flex-1 grow shrink-0 justify-center items-start px-4 py-2 basis-0 min-h-[37px] w-fit">
                <div>Search Engine Optimization</div>
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 justify-center items-start px-4 py-2 basis-0 min-h-[37px] w-fit">
                <div>Content Marketing</div>
              </div>
            </div>
            <div className="flex flex-wrap max-md:max-w-full">
              <div className="flex flex-col flex-1 grow shrink-0 justify-center items-start px-4 py-2 basis-0 min-h-[37px] w-fit">
                <div className="flex gap-2 py-1.5 w-60 max-w-full">
                  <div className="grow">Digital marketing in your city </div>
                  <div className="flex shrink-0 self-start w-1 h-2 border-l-4 border-solid border-l-white border-y-4 border-y-white" />
                </div>
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 justify-center items-start px-4 py-2 basis-0 min-h-[37px] w-fit">
                <div className="flex gap-2 py-1.5 max-w-full w-[200px]">
                  <div className="grow">SEO services in your city </div>
                  <div className="flex shrink-0 self-start w-1 h-2 border-l-4 border-solid border-l-white border-y-4 border-y-white" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap max-md:max-w-full">
              <div className="flex flex-col flex-1 grow shrink-0 justify-center items-start px-4 py-2 basis-0 min-h-[37px] w-fit">
                <div>Paid Media</div>
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 justify-center items-start px-4 py-2 whitespace-nowrap basis-0 min-h-[37px] w-fit">
                <div>Sitemap</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start px-4 py-2 max-w-full min-h-[37px] w-[308px]">
              <div>SEO Analyzer Extension</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col grow shrink text-sm font-medium leading-5 text-white uppercase max-w-[308px] min-w-[240px] w-[247px]">
          <div className="flex flex-col w-full">
            <div className="flex whitespace-nowrap">
              <div className="flex flex-col flex-1 justify-center items-start px-4 py-2 min-h-[37px]">
                <div>Blog</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-start px-4 py-2 min-h-[37px]">
                <div>Contact</div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col flex-1 justify-center items-start px-4 py-2 min-h-[37px]">
                <div>About us</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-start px-4 py-2 min-h-[37px]">
                <div>Web Stories</div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col flex-1 justify-center items-start px-4 py-2 min-h-[37px]">
                <div>Privacy Policy</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-start px-4 py-2 min-h-[37px]">
                <div>CEO Speaks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;