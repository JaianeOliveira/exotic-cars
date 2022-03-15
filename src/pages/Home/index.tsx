import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "@components";

import getCarsData from "@services";
import { setData } from "@redux/carsSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getCarsData().then((response) => console.log(response));
  }, []);

  return (
    <div>
      <Header />
      <button onClick={() => navigate("/details")}>Clique</button>
    </div>
  );
};

export default Home;
