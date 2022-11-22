import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useGame } from '../Context/GameProvider'
import GameCard from '../Components/Card'
import SearchBar from '../Components/SearchBar'
import { Spinner } from 'flowbite-react'
import axios from 'axios'
import CardGameRow from '../Components/CardGameRow'

const Store = () => {
    const [allGames,setAllGames]=useState()
    const [page,setPage]=useState(1)
    const handlePagination = (page) => {
       setPage(page)
        // setCurrentPage(page);
    }

    useEffect(()=>{
        axios.get(`https://api.rawg.io/api/games?key=10b00254796d41b6b0c3418b345aed6e&page=${page}`)
        .then(res=>{
            setAllGames(res.data.results);
            // console.log(res.data.results);
        })
    },[page])
    // const indexOfLastPost = currentPage * 12;

    //                         10              10
    // const indexOfFirstPost = indexOfLastPost - 12;
    // useEffect(() => {
    //     if (allGames != null) {
    //         setGameSlice([])
    //         setGameSlice(allGames.slice(indexOfFirstPost, indexOfLastPost))
    //         console.log(gameSlice);
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [currentPage])

    // function searchHandle(value) {
    //     let results = allGames.filter(m => m.title.toLowerCase().includes(value))
    //     setGameSlice(results)
    // }

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
                    {/* <div className='flex justify-center'><SearchBar searchHandle={searchHandle} /></div> */}

                    <div className="mx-auto container">
                        <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-200">Store</h1>
                        <div className="mt-12">

                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                                {
                                    allGames?.map(game => {
                                        return <CardGameRow game={game} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center w-full bg-gray-400 text-white '>
                    <Pagination color='white' variant='light' className='text-white' count={20} onChange={(e, page) => handlePagination(page)} />
                </div>
            </>
        )
    }

}

export default Store