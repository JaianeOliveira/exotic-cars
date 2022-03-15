import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home, Details } from "@pages";

import GlobalStyle from "./shared/styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
