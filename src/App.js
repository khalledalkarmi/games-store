import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Deals from './Pages/Deals';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ResponsiveAppBar from './Components/NavBar';
import Store from './Pages/Store';
import Platforms from './Pages/Platforms';
import GameDetails from './Pages/GameDetails';

function App() {

  return (
    <div >
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Store' element={<Store />} >
        </Route>
        <Route path='/gamed/:id' element={<GameDetails />} />
        <Route path='/Deals' element={<Deals />} />
        <Route path='/Platforms' element={<Platforms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
