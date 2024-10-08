import React from 'react';
import ServiceTabs from './ServiceTabs';
import ServiceContent from './ServiceContent';

const Services = () => {
  return (
    <section className="flex flex-col justify-center items-center px-32 py-24 w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1200px]">
        <div className="flex flex-wrap w-full max-md:max-w-full">
          <ServiceTabs />
          <ServiceContent />
        </div>
      </div>
    </section>
  );
};

export default Services;