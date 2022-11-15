import React from 'react'
import GameCard from './Card'

function Home() {
    return (
        <div>
            <div className='flex justify-between'>
                <GameCard />
                <GameCard />
                <GameCard />
            </div>


        </div>
    )
}

export default Home