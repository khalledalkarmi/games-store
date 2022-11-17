import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from 'react'
import { gamePlatformsGet, newGamesGet } from "../API";

const GamePlatformsContext = createContext(null);
export const GamePlatformsProvider = ({ children }) => {
    const [GamePlatforms, setGamePlatforms] = useState()

    useEffect(() => {
        axios.get(gamePlatformsGet())
            .then(res => setGamePlatforms(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <GamePlatformsContext.Provider value={GamePlatforms}>
                {children}
            </GamePlatformsContext.Provider>
        </>
    )
}

export const useGamePlatforms = () => {
    return useContext(GamePlatformsContext);
};

