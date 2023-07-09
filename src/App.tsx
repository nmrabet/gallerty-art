import React from "react";
import "./App.css";
import Artslide from "./components/Artslide";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/art/:id" element={<Artslide />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
