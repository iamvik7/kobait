import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "Lomit Patel",
    company: "Tynker",
    position: "Chief Marketing and Growth Officer",
    testimonial: "We've seen a huge improvement in our SEO since working with AdLift, the biggest impact we've seen is by following the road map and the plan that they've come up with within the first four months, SEO traffic increased over 50% and it's continued to increase month, over month beyond that",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/245f7f96597cd263772da9ba12e2ec815922d140b81df10f1791f9fe70bf78b1?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d"
  },
  {
    name: "Kaushik Patel",
    company: "ThoughtSpot",
    position: "Vice President, Demand Generation",
    testimonial: "fantastic! We've grown 165% with new unique users growing upwards of 250%. In addition, they have played a significant role in evangelizing the importance of SEO across the organization",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/79b3a49e7bb4223baa7a4d836761fdcda4140719a51ea4dde80fb2a2ff623b74?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d"
  }
];

const ClientSpeak = () => {
  return (
    <section className="flex flex-col items-center px-10 pt-0 pb-24 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1360px]">
        <h2 className="flex px-20 pb-2 w-full text-7xl font-light text-white leading-[77px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
          <div className="min-w-[240px] max-md:text-4xl">Client Speak</div>
        </h2>
        <div className="flex relative flex-col items-start mt-8 w-full max-md:max-w-full">
          <div className="flex overflow-hidden z-0 flex-col items-start self-stretch pl-20 w-full max-md:pl-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 pb-1.5 pl-6 w-full pr-[3625px] max-md:px-5">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
          <button className="flex absolute z-0 justify-center items-center pr-6 pl-6 opacity-20 bg-zinc-700 h-[76px] min-h-[76px] right-[180px] rounded-[38px] top-[-107px] w-[76px] max-md:px-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/62f35986c662f29f5a7b65e676dcc609d6f8df8c902a90cde62d921cc58a42fb?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d" className="object-contain self-stretch my-auto aspect-[0.97] w-[29px]" alt="Previous testimonial" />
          </button>
          <button className="flex absolute right-20 z-0 justify-center items-center pr-6 pl-6 bg-zinc-700 h-[76px] min-h-[76px] rounded-[38px] top-[-107px] w-[76px] max-md:px-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ac503bf774e4f07e866f2e5f8e8486aa75f574498ea365997ea927b767429a2?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d" className="object-contain self-stretch my-auto aspect-[0.97] w-[29px]" alt="Next testimonial" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientSpeak;