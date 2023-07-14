import React from "react";
import "./App.css";
import Main from "./components/Main";
import ArtDetails from "./components/ArtDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/:id" element={<ArtDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
