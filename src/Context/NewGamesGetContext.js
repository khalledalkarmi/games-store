import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from 'react'
import { newGamesGet } from "../API";

const NewGamesGetContext = createContext(null);
export const NewGamesGetProvider = ({ children }) => {
    const [NewGamesGet, setNewGamesGet] = useState()

    useEffect(() => {
        axios.get(newGamesGet())
            .then(res => setNewGamesGet(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <NewGamesGetContext.Provider value={NewGamesGet}>
                {children}
            </NewGamesGetContext.Provider>
        </>
    )
}

export const useNewGamesGet = () => {
    return useContext(NewGamesGetContext);
};

