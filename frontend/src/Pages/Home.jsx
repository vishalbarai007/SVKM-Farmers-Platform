import React from 'react'
<<<<<<< Updated upstream
=======
import { Slider } from '../Components/Developer/Slider';
import Services from '../Components/Developer/Services';
import { CardHoverEffectDemo } from '../Components/Aceternity/Main/Card';
import { AppleCardsCarouselDemo } from '../Components/Aceternity/Main/Applecard';
import Dashboard from '../Components/Developer/DashboardOptions';
>>>>>>> Stashed changes
import Navbar from '../Components/Developer/Header';

const Home = () => {
  return (
<<<<<<< Updated upstream
    <div className='bg-zinc-950 text-white h-screen flex justify-center items-center'>
      hello 
      {/* <Navbar/> */}
=======
    <div className='bg-zinc-950 text-white h-screen flex justify-center items-center flex-col'>
      {/* <Navbar/> */}
      <Navbar/>
      {/* <Slider/> */}
      {/* <Services/> */}
      {/* <CardHoverEffectDemo/> */}

      {/* <AppleCardsCarouselDemo/> */}
      <Dashboard/>
>>>>>>> Stashed changes
    </div>
  )
}

export default Home;
