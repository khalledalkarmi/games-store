import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from 'react'
import { popularGamesGet, upcomingGamesGet } from "../API";

const UpcomingGamesContext = createContext(null);
export const UpcomingGamesProvider = ({ children }) => {
    const [PopularGames, setPopularGames] = useState()

    useEffect(() => {
        axios.get(upcomingGamesGet())
            .then(res => setPopularGames(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <UpcomingGamesContext.Provider value={PopularGames}>
                {children}
            </UpcomingGamesContext.Provider>
        </>
    )
}

export const useUpcomingGames = () => {
    return useContext(UpcomingGamesContext);
};

