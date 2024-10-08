import React from 'react';

const Button = ({ label }) => {
  return (
    <button className="flex justify-center items-center px-16 py-7 rounded-3xl border border-solid bg-zinc-700 bg-opacity-40 border-zinc-700 max-md:px-5">
      <span className="self-stretch my-auto text-lg font-semibold leading-7 text-center text-white uppercase">{label}</span>
      <div className="flex flex-col items-start self-stretch pl-2.5 my-auto w-8 max-w-[493px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1950c00e18928a9d4f0d82b8b22e61cc4b10e1c4d0dc0e17101ac700d2177884?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d" className="object-contain aspect-[1.57] w-[22px]" alt="" />
      </div>
    </button>
  );
};
export default Button;