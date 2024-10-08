import React from 'react';

const tabs = [
  { label: 'SEO', active: true },
  { label: 'Content Marketing', active: false },
  { label: 'Paid Media', active: false }
];

const ServiceTabs = () => {
  return (
    <div className="flex flex-col grow shrink justify-center items-start pr-9 text-sm font-semibold leading-5 text-center text-white uppercase w-[188px]">
      <div className="flex flex-col max-w-full min-h-[542px] w-[200px]">
        <div className="flex flex-col w-full">
          {tabs.map((tab, index) => (
            <div key={index} className="flex flex-col pt-1.5 pb-1 w-full">
              <div className={`flex-1 shrink self-stretch py-3.5 px-6 w-full ${tab.active ? 'rounded-3xl' : 'bg-gray-800 rounded-none'} min-h-[70px] max-md:px-5`}>
                {tab.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTabs;