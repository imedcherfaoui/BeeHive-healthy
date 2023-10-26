import React from "react";
import {Routes, Route} from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Acceuil from "./pages/Acceuil/Acceuil";

function App() {
  
  return (
    <>
    <div className="layout">
      <Navbar />
        <Routes>
          <Route path="/" element={<Acceuil />}/>
          {/* <Route path='*' element={<Page404 />} /> */}
        </Routes>
    </div>
    </>
);
}

export default App;