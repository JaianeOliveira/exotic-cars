/* eslint-disable jsx-a11y/alt-text */
import React, { useLayoutEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header, MyCarrousel } from "@components";
import car from "@shared/types/car";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import {
  Screen,
  CarDataContainer,
  Title,
  GlobalStyle,
  ColorDetail,
  BackgroundImage,
  BackToCatalogButton,
  BookNowButton,
} from "./styles";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const carsData = useSelector((state: any) => state.cars);

  const back = () => navigate(-1);
  if (!id) {
    back();
    return <Screen>Error</Screen>;
  }
  const carItem: car = carsData.find((item: car) => item.id === parseInt(id));
  if (!carItem) {
    back();
    return <Screen>Error</Screen>;
  }
  const { RenderCarrousel: Carrousel, focusItem } = MyCarrousel({
    id: carItem.id,
  });

  return (
    <Screen>
      <GlobalStyle />
      <Header />

      <CarDataContainer image={focusItem().image}>
        <Title>
          <img src={carItem.logo} />
          <div>
            <h1>
              {carItem.brand} {carItem.model}
            </h1>
            <p>
              {"$"}
              {carItem.price}/day
            </p>
          </div>
        </Title>
        <ColorDetail>
          <h3>0{focusItem().id}</h3>
          <p>{focusItem().color}</p>
        </ColorDetail>
        {/* <BackgroundImage src={focusItem().image} /> */}
        <BackToCatalogButton onClick={back}>
          <BsArrowLeft />
          <p> Back to Catalog</p>
        </BackToCatalogButton>
        <BookNowButton>
          <p>Book Now</p>
          <BsArrowRight />
        </BookNowButton>
        <Carrousel />
      </CarDataContainer>
    </Screen>
  );
};

export default Details;
