import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header } from "@components";
import car from "@shared/types/car";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const carsData = useSelector((state: any) => state.cars);

  if (!id) {
    navigate("/home");
    return <div>Error</div>;
  }
  const carItem = carsData.find((item: car) => item.id === parseInt(id));
  return (
    <div>
      <Header />
      <h1>{carItem.brand}</h1>
    </div>
  );
};

export default Details;
