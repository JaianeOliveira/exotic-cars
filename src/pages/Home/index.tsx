import React, { useLayoutEffect, useState } from "react";

import { CenteredDiv, Screen, TryAgainButton } from "./styles";

import { Header, Card } from "@components";

import CircularProgress from "@mui/material/CircularProgress";

import { getCarsData } from "@services";
import { setData } from "@redux/carsSlice";
import { useDispatch, useSelector } from "react-redux";

import car from "@shared/types/car";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);
  const carsData: car[] = useSelector((state: any) => state.cars);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    setIsLoading(true);
    setTryAgain(false);
    getCarsData()
      .then((response) => {
        dispatch(setData(response));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setTryAgain(true);
      });
  }, [dispatch]);

  return (
    <div>
      <Header />
      {!isLoading ? (
        <Screen>
          {tryAgain ? (
            <CenteredDiv>
              <TryAgainButton onClick={() => window.location.reload()}>
                try again
              </TryAgainButton>
            </CenteredDiv>
          ) : (
            carsData.map((item) => {
              return <Card {...item}></Card>;
            })
          )}
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
