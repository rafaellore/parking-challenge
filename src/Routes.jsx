import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./pages/Data";
import DataDetail from "./pages/DataDetail";
import Entrance from "./pages/Entrance";
import Exit from "./pages/Exit";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Entrance />} />
        <Route path="/exit" exact element={<Exit />} />
        <Route path="/data" exact element={<Data />} />
        <Route path="/data-detail" exact element={<DataDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
