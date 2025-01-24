import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export function Slider() {
  return (
    <Swiper
      // Install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}  // Show one slide at a time
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,  // 2.5 seconds delay between slides
        disableOnInteraction: false,  // Keep autoplay even if user interacts with the swiper
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="h-screen"  // Full height of the viewport
    >
      <SwiperSlide className="bg-white-800 text-white flex justify-center items-center h-full">
        Slide 1
      </SwiperSlide>
      <SwiperSlide className="bg-white-800 text-white flex justify-center items-center h-full">
        Slide 2
      </SwiperSlide>
      <SwiperSlide className="bg-white-800 text-white flex justify-center items-center h-full">
        Slide 3
      </SwiperSlide>
      <SwiperSlide className="bg-white-800 text-white flex justify-center items-center h-full">
        Slide 4
      </SwiperSlide>
      <SwiperSlide className="bg-white-800 text-white flex justify-center items-center h-full">
        Slide 5
      </SwiperSlide> {/* You can add more slides here */}
    </Swiper>
  );
}
