
import React from 'react'
import Hero from '../Components/Hero'
import { useGame } from '../Context/GameProvider'
import { usePopularGames } from '../Context/PopularGamesContext'

import CardGameRow from '../Components/CardGameRow'
import { useUpcomingGames } from '../Context/UpcomingGamesContext'
import { useNewGamesGet } from '../Context/NewGamesGetContext'
import { Spinner } from 'flowbite-react'

function Home() {
    const allGame = useGame()
    const PopularGames = usePopularGames()
    const UpcomingGames = useUpcomingGames()
    const NewGamesGet = useNewGamesGet()

    if (PopularGames == null || NewGamesGet == null || UpcomingGames == null)
 
    return(
        <div className="text-center min-h-screen">
            <Spinner size='2xl' className=' text-xl w-1/3 mt-20' aria-label="Center-aligned spinner example" />
      </div>
        )
    else if (allGame == null) {

        return(
            <div className="text-center min-h-full">
            <Spinner size='2xl' className=' text-xl w-1/3 mt-20' aria-label="Center-aligned spinner example" />
          </div>
            )
    } else {
        // console.log(NewGamesGet);
        return (
            <div className='bg-gray-900'>
                <Hero />
                <h3 className='ml-7 mt-12 text-gray-100'>Popular Games</h3>
                {/* TODO: View All */}
                <div className='grid lg:grid-cols-4 gap-4 p-4 md:grid-cols-2'>
                    {PopularGames.results.map(game => <CardGameRow game={game} />)}
                </div>
                <h3 className='ml-7 text-gray-100'>Upcoming Games</h3>
                {/* TODO: View All */}
                <div className='grid lg:grid-cols-4 gap-4 p-4 md:grid-cols-2'>
                    {UpcomingGames.results.map(game => <CardGameRow game={game} />)}
                </div>
                <h3 className='ml-7 text-gray-100'>New Games</h3>
                {/* TODO: View All */}
       
                <div className='grid lg:grid-cols-4 gap-4 p-4 md:grid-cols-2'>
                    {NewGamesGet.results.filter(game=>game.background_image).map(game => <CardGameRow game={game} />)}
                </div>
            </div>
        )
    }
}

export default Home