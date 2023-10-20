import './App.css';
import Home from "./screens/Home";
import MisCreaciones from "./screens/MisCreaciones";
import Favoritos from "./screens/Favoritos";
import InfoNuestra from "./screens/InfoNuestra";
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './screens/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/Home' index element={<Home></Home>}></Route>
            <Route path='/InfoNuestra' element={<InfoNuestra></InfoNuestra>}></Route>
            <Route path='/Favoritos' element={<Favoritos></Favoritos>}></Route>
            <Route path='/MisCreaciones' element={<MisCreaciones></MisCreaciones>}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
