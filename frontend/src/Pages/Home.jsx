import React from 'react'
import Header from '../Components/Developer/Header'
// import Navbar from '../Components/Developer/Header';
import { Slider } from '../Components/Developer/Slider';
// import Services from '../Components/Developer/Services';
import { CardHoverEffectDemo } from '../Components/Aceternity/Main/Card';
import { AppleCardsCarouselDemo } from '../Components/Aceternity/Main/Applecard';
import Footer from '../Components/Developer/Footer';
// import { NavbarDemo } from '../Components/Aceternity/Main/Navigation-bar';

const Home = () => {
  return (
    <div className='bg-zinc-950 text-white h-screen '>
      {/* <NavbarDemo/> */}
      <Header/>
      <Slider/>
      {/* <Services/> */}
      <CardHoverEffectDemo/>
      <AppleCardsCarouselDemo/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home;
