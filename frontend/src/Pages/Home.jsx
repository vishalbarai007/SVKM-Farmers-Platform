import React from 'react'
import Navbar from '../Components/Developer/Header';
import { Slider } from '../Components/Developer/Slider';

const Home = () => {
  return (
    <div className='bg-zinc-950 text-white h-screen flex justify-center items-center'>
      {/* hello  */}
      {/* <Navbar/> */}
      <Slider/>
    </div>
  )
}

export default Home;
