import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gameDetailsGet } from '../API'
import SearchBar from '../Components/SearchBar'

const GameDetails = () => {
    const [game, setGame] = useState()


    useEffect(() => {
        axios.get(gameDetailsGet(param.id)).then(
            (res) => {
                setGame(res.data)
                console.log(res.data);
            }
        ).catch(e => console.log(e))
    }, [])
    const param = useParams()
    if (game == null) {
        return <h1>loading</h1>
    }
    return (
        <div className=" text-white bg-gray-900">
            <div className='flex justify-center'>
                <img className="w-3/4 mt-10 hover:shadow-[0px_0px_22px_1px_rgba(38,0,255,0.65);] " alt="img of a girl posing" src={game.background_image} />
            </div>
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                <div className="w-2/3">
                    <img className="mt-6 w-full" alt="img of a girl posing" src={game.background_image_additional} />
                </div>
                <div className="md:hidden">
                    <img className="w-full" alt="img of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
                </div>
                <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="border-b border-gray-200 pb-6">
                        <p className="text-sm leading-none text-gray-100">{game.genres[0].name}</p>
                        <h1
                            className="
                        lg:text-2xl
                        text-xl
                        font-semibold
                        lg:leading-6
                        leading-7
                        text-gray-100
                        mt-2
          
                    "
                        >
                            {game.name}
                        </h1>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-xl leading-4  text-gray-100">Publisher/s</p>
                        <div className="flex items-center justify-center">
                            <p className="text-md leading-none text-gray-100">{game.publishers.map(p => p.name + " ")}</p>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-xl leading-4 text-gray-100">Platform</p>
                        <div className="flex items-center justify-center">
                            <p className="text-md leading-none text-gray-100 mr-3">
                                {game.platforms.map(platform => platform.platform.name + " ")
                                }
                            </p>

                        </div>
                    </div>

                    <div>
                        <p className="xl:pr-48 text-md lg:leading-tight leading-normal text-gray-100 mt-7">
                            <h4>Description</h4>
                            {game.description_raw
                            }
                        </p>
                        <p className="md:w-96 text-md leading-normal text-gray-100 mt-4">Released Date: {game.released}</p>
                        <p className="text-md leading-4 mt-7 text-gray-100">Developer: {game.developers.map(m => m.name + " ")}</p>
                        <p className="text-md leading-4 mt-4 text-gray-100">Rating: {game.rating}</p>
                        <p className="text-md leading-4 mt-4 text-gray-100"><a href={game.reddit_url}>Reddit</a></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GameDetails