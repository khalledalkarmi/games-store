import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'


export const gameContext = createContext(null)
export const GameProvider = ({ children }) => {
  const [allGames, setAllGames] = useState()
  const getGames = () => {

    const options = {
      method: 'GET',
      url: 'https://mmo-games.p.rapidapi.com/games',
      headers: {
        'X-RapidAPI-Key': 'e10bf2fafamshcd2d86219bfa102p1a5306jsned95590326e5',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setAllGames(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }
  useEffect(() => {
    getGames()
  }, [])
  return (
    <gameContext.Provider value={allGames}>
      {children}
    </gameContext.Provider>
  )
}
export const useGame = () => {
  return useContext(gameContext);
};