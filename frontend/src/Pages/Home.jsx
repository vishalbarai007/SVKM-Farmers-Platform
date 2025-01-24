import React from 'react'
import Navbar from '../Components/Developer/Header';
import { Slider } from '../Components/Developer/Slider';
import { AppleCardsCarouselDemo } from '../Components/Aceternity/Main/Applecard';

const Home = () => {
  return (
    <div className='bg-zinc-950 text-white h-screen flex justify-center items-center flex-col'>
      <Slider/>
      <AppleCardsCarouselDemo/>
    </div>
  )
}

export default Home;
