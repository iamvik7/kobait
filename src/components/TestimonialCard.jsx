import React from 'react';

const TestimonialCard = ({ name, company, position, testimonial, image }) => {
  return (
    <div className="flex overflow-hidden flex-col grow shrink justify-center bg-gray-900 min-h-[1px] min-w-[240px] rounded-[30px] w-[920px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap justify-center bg-gray-900 rounded-[30px]">
        <div className="flex flex-col grow shrink justify-center py-8 pl-12 max-w-[688px] min-w-[240px] w-[590px] max-md:max-w-full">
          <div className="flex flex-col pb-8 w-full text-lg font-medium leading-8 text-white max-md:max-w-full">
            <div className="flex flex-col pb-4 w-full max-md:max-w-full">
              <div className="text-4xl font-light leading-[64px] max-md:max-w-full">
                {name}
              </div>
              <div className="pb-px mt-2.5 text-amber-600 whitespace-nowrap max-md:max-w-full">
                {company}
              </div>
              <div className="pb-px max-md:max-w-full">
                {position}
              </div>
            </div>
          </div>
          <div className="flex flex-col pb-4 w-full text-base leading-7 text-neutral-300 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/34a012795e11e5c0ad8dd8279d62f4502543bf367eda8978d442871433eede11?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d" className="object-contain aspect-[1.15] w-[30px]" alt="Quote icon" />
            <div className="flex flex-col py-1.5 w-full max-md:max-w-full">
              <p className="mr-4 ml-10 max-md:mr-2.5 max-md:max-w-full">
                {testimonial}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col grow shrink px-4 max-w-[492px] min-w-[240px] w-[393px] max-md:max-w-full">
          <div className="flex items-start w-full max-md:max-w-full">
            <img loading="lazy" src={image} className="object-contain aspect-[0.91] max-w-[492px] min-w-[240px] w-[367px]" alt={`${name} from ${company}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;