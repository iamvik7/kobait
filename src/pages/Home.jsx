import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import ClientSpeak from '../components/ClientSpeak';
import CEOSpeaks from '../components/CEOSpeaks';
import AcquiredStartups from '../components/AcquiredStartups';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      {/*<CaseStudies />
      <ClientSpeak />
      <CEOSpeaks /> */}
      {/* <AcquiredStartups /> */}
    </Layout>
  );
};

export default Home;