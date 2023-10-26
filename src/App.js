import React from "react";
import {Routes, Route} from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar/Navbar";

function App() {
  
  return (
    <>
    <div className="layout">
      <Navbar />
        <Routes>
          <Route path="/" element={null}/>
          {/* <Route path='*' element={<Page404 />} /> */}
        </Routes>
    </div>
    </>
);
}

export default App;