import React from 'react';

const FloatingButton = () => {
  return (
    <div className="flex absolute bottom-2.5 left-2.5 z-0 flex-col max-w-full w-[130px]">
      <div className="flex items-center max-w-full w-[100px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/43fb6ffe7ea51a7dd6aac9d03218bfcf666c9265bb11e52a080d9f43b44804c3?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d" className="object-contain self-stretch my-auto aspect-square max-w-[100px] w-[100px]" alt="Floating button" />
      </div>
    </div>
  );
};

export default FloatingButton;