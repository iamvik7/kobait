import React from 'react';

const SocialIcons = () => {
  return (
    <div className="flex flex-col grow shrink self-stretch pr-3.5 pl-4 my-auto max-w-[410px] min-w-[240px] w-[327px]">
      <div className="flex w-full">
        <div className="flex flex-col items-start pr-5 w-[50px]">
          <div className="flex items-center w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ac1a13f7cc51af21b58629c07e702bc7c6c2ebcf7699cde6ec6159a3e440bea?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d" className="object-contain self-stretch my-auto aspect-square max-w-[50px] w-[30px]" alt="Social icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;