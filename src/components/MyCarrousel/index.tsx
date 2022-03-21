/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

import { Card, Container, Carrousel, Button } from "./styles";

import { useSelector } from "react-redux";

import car from "@shared/types/car";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const MyCarrousel = (props: { id: number }) => {
  const cars = useSelector((state: any) => state.cars);

  const [items, setItems] = useState<
    { id: number; color: string; image: string }[]
  >(cars.find((car: car) => car.id === props.id)?.details);

  const next = () => {
    const newArr = [...items, items[0]];
    newArr.shift();
    setItems(newArr);
  };

  const back = () => {
    const newArr = [...items];
    newArr.unshift(items[items.length - 1]);
    newArr.pop();
    setItems(newArr);
  };

  const focusItem = () => {
    return items[1];
  };

  const RenderCarrousel = () => {
    return (
      <Container>
        <Button onClick={back}>
          <BsFillArrowLeftCircleFill size={30} color="#313136" />
        </Button>
        <Carrousel>
          {items.map((item: { id: number; color: string; image: string }) => (
            <Card isFocused={focusItem().id === item.id}>
              <img src={item.image} />
            </Card>
          ))}
        </Carrousel>
        <Button onClick={next}>
          <BsFillArrowRightCircleFill color="#313136" />
        </Button>
      </Container>
    );
  };

  return {
    RenderCarrousel,
    focusItem,
  };
};

export default MyCarrousel;
