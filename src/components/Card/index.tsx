import React from "react";

import {
  CardContainer,
  Background,
  BottomRow,
  BrandAndModel,
  TopRow,
  Price,
  MoreOptionsButton,
} from "./styles";

import car from "@shared/types/car";

import { BsThreeDots } from "react-icons/bs";
import Colors from "@constants/colors";

import { useNavigate } from "react-router-dom";

const Card = (props: car) => {
  const navigate = useNavigate();
  return (
    <CardContainer
      key={props.id}
      onClick={() => navigate(`/details/${props.id}`)}
    >
      <Background image={props.image}>
        <TopRow>
          <BrandAndModel>
            <h3>{props.brand}</h3>
            <p>{props.model}</p>
          </BrandAndModel>
          <MoreOptionsButton>
            <BsThreeDots color={Colors.treeDotsIconColor} size={24} />
          </MoreOptionsButton>
        </TopRow>
        <BottomRow>
          <Price>
            <h3>
              $ {props.price}
              <span>/day</span>
            </h3>
          </Price>
        </BottomRow>
      </Background>
    </CardContainer>
  );
};

export default Card;
