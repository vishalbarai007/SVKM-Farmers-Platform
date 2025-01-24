import React from 'react'
import Navbar from '../Components/Developer/Header';
import { Slider } from '../Components/Developer/Slider';
import Services from '../Components/Developer/Services';
import { CardHoverEffectDemo } from '../Components/Aceternity/Main/Card';

const Home = () => {
  return (
    <div className='bg-zinc-950 text-white h-screen flex justify-center items-center flex-col'>
      <Slider/>
      {/* <Services/> */}
      <CardHoverEffectDemo/>
    </div>
  )
}

export default Home;
