import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Details } from "@pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="details" element={<Details />} />
    </Routes>
  );
};

export default App;
