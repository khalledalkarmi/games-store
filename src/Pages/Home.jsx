
import React from 'react'
import Hero from '../Components/Hero'
import { useGame } from '../Context/GameProvider'
import { usePopularGames } from '../Context/PopularGamesContext'

import CardGameRow from '../Components/CardGameRow'
import { useUpcomingGames } from '../Context/UpcomingGamesContext'
import { useNewGamesGet } from '../Context/NewGamesGetContext'

function Home() {
    const allGame = useGame()
    const PopularGames = usePopularGames()
    const UpcomingGames = useUpcomingGames()
    const NewGamesGet = useNewGamesGet()

    if (PopularGames == null || NewGamesGet == null || UpcomingGames == null)
        return <h1>Loading</h1>
    else if (allGame == null) {
        return <h1>Loading</h1>
    } else {
        // console.log(NewGamesGet);
        return (
            <div className='bg-gray-900'>
                <Hero />
                <h3 className='ml-7 mt-12 text-gray-100'>Popular Games</h3>
                {/* TODO: View All */}
                <div className='grid grid-cols-4 gap-4 p-4'>
                    {PopularGames.results.map(game => <CardGameRow game={game} />)}
                </div>
                <h3 className='ml-7 text-gray-100'>Upcoming Games</h3>
                {/* TODO: View All */}
                <div className='grid grid-cols-4 gap-4 p-4'>
                    {UpcomingGames.results.map(game => <CardGameRow game={game} />)}
                </div>
                <h3 className='ml-7 text-gray-100'>New Games</h3>
                {/* TODO: View All */}
       
                <div className='grid grid-cols-4 gap-4 p-4'>
                    {NewGamesGet.results.filter(game=>game.background_image).map(game => <CardGameRow game={game} />)}
                </div>
            </div>
        )
    }
}

export default Home