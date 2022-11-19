import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ searchHandle }) => {
    return (
        <TextField
            type="text"
            id="q_game"
            label="Search for a game"
            margin="normal"
            style={{ width: '50%' }}
            onChange={e => searchHandle(e.target.value)}
            className='text-white bg-white opacity-90 rounded-xl'
        />
    );
}

export default SearchBar;