import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useGame } from '../GameProvider'
import GameCard from '../Components/Card'
import ProgressBar from '../Components/ProgressBar/ProgressBar.component'

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

    if (allGames == null) {
        return <ProgressBar/>
    } else {
        return (
            <>
                <div className='flex flex-wrap justify-around'>
                    {
                        gameSlice.map(game => {
                            return <GameCard game={game} key={game.id}/>
                        })
                    }
                </div>
                <div className='flex justify-center w-full my-5'>
                    <Pagination count={Math.floor(allGames.length/12)} color="secondary" onChange={(e, page) => handlePagination(page)} />
                </div>
            </>
        )
    }

}

export default Store