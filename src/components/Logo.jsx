import React from 'react';

const Logo = () => {
  return (
    <div className="flex flex-col items-start self-stretch pr-4 my-auto max-w-[137px] w-[137px]">
      <div className="flex flex-col justify-center py-1.5 max-w-full w-[121px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7be7292eff8d8a18dd400504cf9d4ec1e84a899816a51fafbd90e17ae4a63ec?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d" className="object-contain w-full aspect-[2.05]" alt="AdLift Logo" />
      </div>
    </div>
  );
};

export default Logo;