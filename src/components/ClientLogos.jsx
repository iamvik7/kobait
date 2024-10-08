import React from 'react';

const clientLogos = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cefe310efd379952d72e229c7414ba9f1f95dad835f1b625d805d5bef2d1424?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d", width: "w-[127px]", aspectRatio: "aspect-[2.28]", imageWidth: "w-[107px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9667dc2bf1c3278cf620d682b55d3a5a530632adf4d8607d29a00eba14641c94?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d", width: "w-[190px]", aspectRatio: "aspect-[3.4]", imageWidth: "w-[170px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/99ab2399c040f99e3832f3cfd1c67f273d8b0b8a5560f66765dd1bb5ccdad0e7?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d", width: "w-[85px]", aspectRatio: "aspect-[1.3]", imageWidth: "w-[65px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca28dc8598678edc4f70b978faa444d4e2df11a33d59238ad42b1f427684df57?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d", width: "w-[57px]", aspectRatio: "aspect-[0.72]", imageWidth: "w-9" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/42215159f61ee0d3bea3b078305edcd05ef8fed70c68111bb1c4b173fd132f43?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d", width: "w-[72px]", aspectRatio: "aspect-[1.06]", imageWidth: "w-[53px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/107decadd654c6fdc4ac5df5ef8547f8cae30a887f011e0576601760947222fd?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d", width: "w-[150px]", aspectRatio: "aspect-[2.6]", imageWidth: "w-[130px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ca35e0445777b771d5f174d0968cc6992696cdb383a70775c37945bd5d46ba2?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d", width: "w-[103px]", aspectRatio: "aspect-[1.66]", imageWidth: "w-[83px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f4896e83333b5d6d4476f1fb11f4193f794d1663c393e7d1847176815930678?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d", width: "w-[185px]", aspectRatio: "aspect-[4.13]", imageWidth: "w-[165px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a65b9ad948dddd0811c9b33dbda37d1daa708c3c1d6b4180ef7d11e9cb1484fe?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d", width: "w-[226px]", aspectRatio: "aspect-[1.88]", imageWidth: "w-[75px]" }
];

const ClientLogos = () => {
  return (
    <div className="flex overflow-hidden flex-col mt-10 w-full max-md:max-w-full">
      <div className="flex gap-10 justify-center items-start w-full max-md:max-w-full">
        {clientLogos.map((logo, index) => (
          <div key={index} className={`flex justify-center items-center px-2.5 py-14 min-h-[150px] ${logo.width}`}>
            <img 
              loading="lazy" 
              src={logo.src} 
              className={`object-contain self-stretch my-auto ${logo.aspectRatio} max-w-[${logo.width.replace('w-', '')}px] ${logo.imageWidth}`}
              alt={`Client logo ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;