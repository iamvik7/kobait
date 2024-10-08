import React from 'react';

const navigationItems = [
  { label: 'Services', width: 'w-24' },
  { label: 'About Us', width: 'w-[100px]' },
  { label: 'Blogs', width: 'w-[76px]' },
  { label: 'Clients', width: 'w-[86px]' },
  { label: 'Contact Us', width: 'w-[121px]' },
  { label: 'SEO Tools', width: 'w-[106px]' }
];

const Navigation = () => {
  return (
    <nav className="flex flex-1 shrink items-center self-stretch my-auto text-sm font-semibold leading-5 text-white uppercase basis-4 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-wrap self-stretch my-auto min-w-[240px] max-md:max-w-full">
        {navigationItems.map((item, index) => (
          <div key={index} className={`flex flex-col px-4 ${item.width} ${item.label !== 'Services' && item.label !== 'Blogs' && item.label !== 'Clients' ? '' : 'whitespace-nowrap'}`}>
            <div className="w-full">{item.label}</div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;