import React from 'react'
import Header from '../Components/Developer/Header'
// import Navbar from '../Components/Developer/Header';
// import { Slider } from '../Components/Developer/Slider';
import { CardHoverEffectDemo } from '../Components/Aceternity/Main/Card';
import { AppleCardsCarouselDemo } from '../Components/Aceternity/Main/Applecard';
import ChatBot from '../Components/Developer/ChatBot';
import { useLocation } from 'react-router-dom';

// import Dashboard from '../Components/Developer/DashboardOptions';
// import Navbar from '../Components/Developer/Header';
// import { Carousel } from '../Components/Aceternity/Support/carousel';
// import { CarouselDemo } from '../Components/Aceternity/Main/HomeCarousel';

const Home = () => {
  
  const location = useLocation();
  console.log("state: ", location.state);
  const uid = location.state?.uid || null;
  console.log(uid);
  return (
    <div className=' text-white h-screen '>
      <Header uid={uid}/>
      {/* <Slider/> */}
      {/* <Carousel/> */}
      {/* <LandingHome/> */}
      <CardHoverEffectDemo/>
      <AppleCardsCarouselDemo/>
      <Footer/>
    </div>
  )
}

export default Home;
