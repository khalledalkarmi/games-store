import axios from 'axios'

import React, { useContext, useEffect, useState } from 'react'
import GameCard from '../Components/Card'
import Hero from '../Components/Hero'
import { useGame } from '../GameProvider'

function Home() {
    const allGame = useGame()

    if (allGame == null) {
        return <h1>Loading</h1>
    } else
        return (
            <>
                <Hero />
                <div className='flex justify-around my-10'>
                    <GameCard game={allGame[0]} />
                    <GameCard game={allGame[1]} />
                    <GameCard game={allGame[2]} />
                    <GameCard game={allGame[3]} />
                </div>
            </>
        )
}

export default Home