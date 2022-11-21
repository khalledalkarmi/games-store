import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Card, Carousel, Dropdown, Select, Spinner } from 'flowbite-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CardContent, CardMedia, Typography } from '@mui/material';
import { DealsCard } from '../Components/DealsCard';
import { AsyncPaginate } from 'react-select-async-paginate';

const Deals = () => {
    const [allStore, setAllStore] = useState()
    const [storeId, setStoreId] = useState()
    const [steamGame, setSteamGame] = useState()
    const [goGGame, setGog] = useState()
    const [epicGame, setEpicGame] = useState()
    const [price, setPrice] = useState('30')

    const handleDealsSearch=(e)=>{
        console.log(e);
        axios.get(`https://www.cheapshark.com/api/1.0/games?title=${e.value}&limit=60`).then(res=>{
            console.log(res);
        }).catch(res=>{
            console.log(res);
        })
       }
       const loadOptions = (inputValue) => {
        const config = {
            method: 'get',
            url: `https://www.cheapshark.com/api/other/getAutocompleteList?query=${inputValue.replace(' ', '%20')}`,
        };
        return axios(config)
            .then((response) => {
                return {
                    options: response.data.map((game) => {
                        return {
                            value: `${game}`,
                            label: `${game}`,
                        };
                    }),
                };
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    var config = {
        method: 'get',
        url: 'https://www.cheapshark.com/api/1.0/stores',
    };

    useEffect(() => {
        getAllStore()

    }, [])
    useEffect(() => {
        getSteamGAme(price)
        getEpicGame(price)
        getGoGGame(price)
    }, [price])
    const getSteamGAme = (price) => {
        axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=1&lowerPrice=${price}&storeBy=price`)
            .then(res => {
                setSteamGame(res.data)
                console.log(res.data);
            }).catch(res => console.log(res))
    }
    const getEpicGame = (price) => {
        axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=25&lowerPrice=${price}&storeBy=price`)
            .then(res => {
                setEpicGame(res.data)
                console.log(res.data);
            }).catch(res => console.log(res))
    }

    const getGoGGame = (price) => {
        axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=7&lowerPrice=${price}&storeBy=price`)
            .then(res => {
                setGog(res.data)
                console.log(res.data);
            }).catch(res => console.log(res))
    }
    function onClick(value) {
        let v = value.replace('$', '')
        console.log(v);
        setPrice(v)
    }

    const getAllStore = () => {
        axios(config)
            .then(function (response) {
                // console.log((response.data));
                setAllStore(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    if (allStore == null || steamGame == null || epicGame == null || goGGame == null) {

        return(
            <div className="text-center min-h-screen">
            <Spinner size='2xl' className=' text-xl w-1/3 mt-20' aria-label="Center-aligned spinner example" />
          </div>
            )
    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };
    return (

        <div className=' bg-gray-900'>
            <div className="h-[30rem] flex justify-center  bg-[url('https://2game.com/wp/wp-content/uploads/2022/11/Website-background-1920-x-850.jpg')]">
                <Carousel className=''>
                    {allStore.map(store => {
                        return (
                            <>
                                <div className="flex h-full items-center justify-center bg-opacity-0 ">
                                    <div>
                                        <img src={'https://www.cheapshark.com' + store.images.logo} className='mt-2 mb-3' />
                                        <p className='text-2xl bg-black bg-opacity-50 text-center border rounded-xl'><span className='text-gray-200'> {store.storeName}</span></p>
                                        <p className='text-2xl bg-black bg-opacity-50 text-center border rounded-xl'><span className='text-gray-200'>{store.isActive ? 'Is Active' : 'Is Not Active'}</span></p>
                                    </div>
                                </div>

                            </>
                        )
                    })}
                </Carousel>
            </div>
            <div className='flex justify-center'>
                        <AsyncPaginate
                            placeholder='Game'
                            debounceTimeout={600}
                            filterOption={false}
                            loadOptions={loadOptions}
           
                            onChange={handleDealsSearch}
                            className="w-1/3"
                        />
                    </div>
            <div className='p-5 border  rounded-xl mt-3'>
                <div className='flex justify-between mb-5'>
                    <p className='text-2xl bg-opacity-50'><span className='text-gray-200'>Steam Store</span></p>
                    <Select
                        id="countries"
                        required={true}
                        onClick={e => { onClick(e.target.value) }}
                    >
                        <option>
                            Price
                        </option>
                        <option>
                            10$
                        </option>
                        <option>
                            20$
                        </option>
                        <option>
                            30$
                        </option>
                        <option>
                            40$
                        </option>
                        <option>
                            60$
                        </option>
                    </Select>
                </div>
                <Slider {...settings} className='text-white'>
                    {steamGame.map(game => {
                        return (
                            <div className='h-1/2'>
                                <DealsCard game={game} />
                            </div>
                        )
                    })}

                </Slider>

            </div>
            <div className=' p-5 border  rounded-xl mt-3'>
                <p className='text-2xl bg-opacity-50'><span className='text-gray-200'>Epic Store</span></p>

                <Slider {...settings} className='text-white'>
                    {epicGame.map(game => {
                        return (
                            <div className='h-1/2 '>
                                <DealsCard game={game} />
                            </div>
                        )
                    })}

                </Slider>

            </div>
            <div className=' p-5 border  rounded-xl mt-3'>
                <p className='text-2xl bg-opacity-50'><span className='text-gray-200'>GoG Store</span></p>

                <Slider {...settings} className='text-white'>
                    {goGGame.map(game => {
                        return (
                            <div className='h-1/2 '>
                                <DealsCard game={game} />
                            </div>
                        )
                    })}

                </Slider>

            </div>
        </div>
    )
}

export default Deals