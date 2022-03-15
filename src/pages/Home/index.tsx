import React, { useEffect, useState } from "react";

import { CenteredDiv } from "./styles";

import { useNavigate } from "react-router-dom";

import { Header } from "@components";

import CircularProgress from "@mui/material/CircularProgress";

import getCarsData from "@services";
import { setData } from "@redux/carsSlice";
import { useDispatch, useSelector } from "react-redux";

import Colors from "@/shared/constants/colors";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getCarsData().then((response) => {
      setIsLoading(false);
      console.log(response);
    });
  }, []);

  return (
    <div>
      <Header />
      {!isLoading ? (
        <CenteredDiv>Hi</CenteredDiv>
      ) : (
        <CenteredDiv>
          <CircularProgress color="primary" />
        </CenteredDiv>
      )}
    </div>
  );
};

export default Home;
