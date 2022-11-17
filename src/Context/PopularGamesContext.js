import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from 'react'
import { popularGamesGet } from "../API";

const PopularGamesContext = createContext(null);
export const PopularGamesProvider = ({ children }) => {
  const [PopularGames, setPopularGames] = useState()

  useEffect(() => {
    axios.get(popularGamesGet())
      .then(res => setPopularGames(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <PopularGamesContext.Provider value={PopularGames}>
        {children}
      </PopularGamesContext.Provider>
    </>
  )
}

export const usePopularGames = () => {
  return useContext(PopularGamesContext);
};

