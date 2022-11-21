import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useGame } from '../Context/GameProvider'
import GameCard from '../Components/Card'
import ProgressBar from '../Components/ProgressBar/ProgressBar.component'
import SearchBar from '../Components/SearchBar'
import { Spinner } from 'flowbite-react'

const Store = () => {
    const allGames = useGame()
    const [currentPage, setCurrentPage] = useState(1);
    const [gameSlice, setGameSlice] = useState([]);
    const handlePagination = (page) => {
        console.log(page);
        setCurrentPage(page);
    }
    const indexOfLastPost = currentPage * 12;

    //                         10              10
    const indexOfFirstPost = indexOfLastPost - 12;
    useEffect(() => {
        if (allGames != null) {
            setGameSlice([])
            setGameSlice(allGames.slice(indexOfFirstPost, indexOfLastPost))
            console.log(gameSlice);
        }
    }, [currentPage])

    function searchHandle(value) {
        let results = allGames.filter(m => m.title.toLowerCase().includes(value))
        setGameSlice(results)
    }

    if (allGames == null) {

        return (
            <div className="text-center min-h-screen">
                <Spinner size='2xl' className=' text-xl w-1/3 mt-20' aria-label="Center-aligned spinner example" />
            </div>
        )
    } else {
        return (
            <>

                <div id="blog" className="bg-gray-900 px-4 xl:px-0 py-12">
                    <div className='flex justify-center'><SearchBar searchHandle={searchHandle} /></div>

                    <div className="mx-auto container">
                        <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-200">Store</h1>
                        <div className="mt-12">

                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                                {
                                    gameSlice.map(game => {
                                        return <GameCard game={game} key={game.id} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center w-full bg-gray-400 text-white '>
                    <Pagination color='white' variant='light' className='text-white' count={Math.floor(allGames.length / 12)} onChange={(e, page) => handlePagination(page)} />
                </div>
            </>
        )
    }

}

export default Store