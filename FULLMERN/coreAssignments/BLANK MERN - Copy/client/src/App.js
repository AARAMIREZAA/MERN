import './App.css';
import {Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component }  from 'react';

import Main from './pages/Main';
import DetailProduct from './pages/DetailProduct';
import EditProduct from './pages/EditProduct';
// import RegLog from '../src/pages/RegLog'
import Auth from './components/Auth';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* <Route path="/" element={<RegLog/>} /> */}
        <Route path="/product" element={<Main />} />
        <Route path="/:product_id" element={<DetailProduct />} />
        <Route path="/:product_id/edit" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
