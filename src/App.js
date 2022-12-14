import React from 'react';
import { HashRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from "./Component/Home";
import Background from './Component/Background';
import Menu from "./Component/Menu";
import Materi from "./Component/Materi";

function App() {
  return (
    <HashRouter>
      <Background />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Materi" element={<Materi />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
