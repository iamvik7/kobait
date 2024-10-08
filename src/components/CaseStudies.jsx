
import React from "react";
import CaseStudyCard from "./CaseStudyCard";

const caseStudies = [
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/681700d1bf17709ad1491e00233b9ca14f62d18d87cc84daceca11c9b6b33091?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    percentage: "129%",
    metric: "Revenue Improvement",
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/868227458dfa83ed6d06e238c73dba00bef1614932e69c07c6bc6db56ab7b571?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    percentage: "47%",
    metric: "Traffic Improvement",
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/373815cc7c5ebe65e11a070bbbe31f87fbc8d3eb558f3f28b1ea0c97492b25a9?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    percentage: "125%",
    metric: "Increase In SEO traffic",
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/ead773ac31fb86c2df9750d29e25f3bef9ac61cfc37fc42e5654f583850bb4cb?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    percentage: "86%",
    metric: "Increase In Non-Branded Traffic",
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ffaa6f4625f98b2c3c6a6b2f9074d8f81a9833ca2bc1df0bbfdb4e2df6824ce?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    percentage: "129%",
    metric: "Increase In SEO Traffic",
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e3ef781ed25374fdce43ca1b936ed8a6d064af37a1b595447619826be43a301?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    percentage: "608%",
    metric: "Increase In SEO Traffic",
  },
];

const CaseStudies = () => {
  return (
    <section className="flex flex-col justify-center items-center px-44 py-24 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1100px]">
        <div className="flex flex-col self-center px-px w-full max-w-[1130px] max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={index} {...study} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-8 w-full px-[462px] max-md:px-5 max-md:max-w-full">
          <button className="flex justify-center items-center px-16 py-7 rounded-3xl border border-solid bg-zinc-700 bg-opacity-40 border-zinc-700 max-md:px-5">
            <span className="self-stretch my-auto text-lg font-semibold leading-7 text-center text-white uppercase">
              View more
            </span>
            <div className="flex flex-col items-start self-stretch pl-2.5 my-auto w-8 max-w-[493px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a41dc809eee7289fb8ba6f4f07c188d6f11d075c3976817941985fadb796b6ab?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d"
                className="object-contain aspect-[1.57] w-[22px]"
                alt=""
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
