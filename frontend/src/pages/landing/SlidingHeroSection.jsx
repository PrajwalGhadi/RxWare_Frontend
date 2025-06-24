import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SingleSlidingWindow from "./SingleSlidingWindow";

import slidingImage1 from '../../assets/RxWare_Sliding_Image_1.jpeg'

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

const SlidingHeroSection = () => {
  const slidingData = [
    {
      slidingImg: slidingImage1,
      slidingTitle: "Warehouse Management System",
      slidingDetails:
        "Efficiently track, manage, and optimize warehouse operations – all in one place.",
      isSignUpBtn: true,
      isLoginBtn: true,
    },

    {
      slidingImg: slidingImage1,
      slidingTitle: "Warehouse Management System",
      slidingDetails:
        "Efficiently track, manage, and optimize warehouse operations – all in one place.",
      isSignUpBtn: true,
      isLoginBtn: true,
    },
  ];

  return (
    <section className="slidingHeroSection">
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
      >
        {slidingData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <SingleSlidingWindow item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default SlidingHeroSection;
