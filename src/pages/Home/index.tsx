import React, { useLayoutEffect, useState } from "react";

import { CenteredDiv, Screen } from "./styles";

import { useNavigate } from "react-router-dom";

import { Header, Card } from "@components";

import CircularProgress from "@mui/material/CircularProgress";

import getCarsData from "@services";
import { setData } from "@redux/carsSlice";
import { useDispatch, useSelector } from "react-redux";

import Colors from "@/shared/constants/colors";

type car = {
  id: number;
  brand: string;
  model: string;
  price: number;
  image: string;
  details: { id: number; color: string; image: string }[];
};
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const carsData: car[] = useSelector((state: any) => state.cars);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setIsLoading(true);
    getCarsData().then((response) => {
      dispatch(setData(response));
      setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <div>
      <Header />
      {!isLoading ? (
        <Screen>
          {carsData.map((item) => {
            console.log(item);
            return <Card {...item}></Card>;
          })}
        </Screen>
      ) : (
        <CenteredDiv>
          <CircularProgress color="primary" />
        </CenteredDiv>
      )}
    </div>
  );
};

export default Home;
