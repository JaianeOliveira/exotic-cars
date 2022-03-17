/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header, MyCarrousel } from "@components";
import car from "@shared/types/car";

import { Screen, CarDataContainer } from "./styles";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const carsData = useSelector((state: any) => state.cars);

  if (!id) {
    navigate("/home");
    return <div>Error</div>;
  }
  const carItem: car = carsData.find((item: car) => item.id === parseInt(id));
  const { RenderCarrousel: Carrousel, focusItem } = MyCarrousel({
    id: carItem.id,
  });
  return (
    <Screen>
      <Header />
      <CarDataContainer image={focusItem().image}>
        <Carrousel />
      </CarDataContainer>
    </Screen>
  );
};

export default Details;
