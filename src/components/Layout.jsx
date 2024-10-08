import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingButton from './FloatingButton';

const Layout = ({ children }) => {
  return (
    <div className="flex relative flex-col items-start">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Layout;