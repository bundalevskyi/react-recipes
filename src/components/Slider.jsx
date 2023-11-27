import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      loop={true}
      slidesPerView={1}
      modules={[Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
        <Link to={`/recipes/1`}>
          <img
            className="top__img"
            src="https://i.pinimg.com/564x/09/8a/3d/098a3dc6f2d665e8956a8927b1e69ab1.jpg"
            alt=""
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/recipes/2`}>
          <img
            className="top__img"
            src="https://i.pinimg.com/564x/09/8a/3d/098a3dc6f2d665e8956a8927b1e69ab1.jpg"
            alt=""
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/recipes/3`}>
          <img
            className="top__img"
            src="https://i.pinimg.com/564x/09/8a/3d/098a3dc6f2d665e8956a8927b1e69ab1.jpg"
            alt=""
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
