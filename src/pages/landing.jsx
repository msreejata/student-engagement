import React from 'react';
import ResponsiveAppBar from '../components/navbar';
import IndividualIntervalsExample from '../components/carousel';
import Hero from '../components/hero';
import Highlights from '../components/highlights';
import Footer from '../components/footer';

function Landing() {
  return (
    <div>
      <ResponsiveAppBar />
      <div style={{ marginTop: '64px' }}> {/* Add margin to account for fixed navbar */}
        <IndividualIntervalsExample />
        <Hero />
        <Highlights />
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
