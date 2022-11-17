import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Deals from './Components/Deals';
import Footer from './Components/Footer';
import Home from './Components/Home';
import ResponsiveAppBar from './Components/NavBar';
import Store from './Components/Store';

function App() {

  return (
    <div >
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Store' element={<Store />} />
        <Route path='/Deals' element={<Deals />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
