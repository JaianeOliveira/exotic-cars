/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Container, Card } from "./styles";

// import required modules
import { Pagination, Navigation } from "swiper";

import { useSelector } from "react-redux";
import car from "@shared/types/car";

export default function Carrousel(props: { id: number }) {
  const swiper = useSwiperSlide();
  const carData = useSelector((state: any) => state.cars);
  const { details } = carData.find((item: car) => item.id === props.id);

  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {details.map((item: { id: number; color: string; image: string }) => (
          <SwiperSlide>
            <Card>
              <img src={item.image} />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
