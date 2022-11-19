import React, { useEffect, useState } from 'react'
import { useGame } from '../Context/GameProvider'
import GameCard from '../Components/Card'
import axios from 'axios';

const Deals = () => {
    const [allStore, setAllStore] = useState()

    var config = {
        method: 'get',
        url: 'https://www.cheapshark.com/api/1.0/stores',
    };

    useEffect(() => {

    }, [])
    
    const getAllStore = () => {
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <>

        </>
    )
}

export default Deals