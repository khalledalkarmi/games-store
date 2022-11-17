import React from "react";
import { makeStyles, TextField } from "@mui/material";

const SearchBar = ({ validateQGame }) => {
    return (
        <TextField
            type="text"
            id="q_game"
            label="Search for a game"
            margin="normal"
            variant="outlined"
            style={{ width: '100%' }}
            onKeyPress={e => validateQGame(e)}
        />
    );
}

export default SearchBar;