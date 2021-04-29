import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import NewsSection from '../../NewsSection';
import PeminjamanSection from '../../PeminjamanSection';
function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <NewsSection/>
      <PeminjamanSection/>
      {/* <Pricing />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      
      <HeroSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;
