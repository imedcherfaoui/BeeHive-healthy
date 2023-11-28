import React from "react";
import {Routes, Route} from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  
  return (
    <>
    <div className="layout">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
    </div>
    </>
);
}

export default App;