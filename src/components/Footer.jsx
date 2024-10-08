import React from 'react';
import FooterLinks from './FooterLinks';
import SocialIcons from './SocialIcons';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center px-32 py-16 w-full bg-amber-600 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1200px]">
        <FooterLinks />
        <div className="flex flex-wrap gap-px justify-center items-center self-center mt-12 w-full max-md:mt-10">
          <SocialIcons />
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;