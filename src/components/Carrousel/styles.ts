import styled from "styled-components";

import Colors from "@constants/colors";

export const Container = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: none;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Card = styled.div`
  display: flex;
  background: linear-gradient(0.25turn, #c5c2f1, #e6e5e5);
  height: 223px;
  flex: 1;
  min-width: 287px;
  @media (min-width: 1527px) {
    max-width: 287px;
  }
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  transition: 0.4s all;

  :focus {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
