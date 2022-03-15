import React from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "@components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <button onClick={() => navigate("/details")}>Clique</button>
    </div>
  );
};

export default Home;
