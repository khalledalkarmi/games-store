import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const CardGameRow = ({ game }) => {
    const navigate = useNavigate()
    function handleNavigate(id) {
        navigate(`gamed/${id}`)
    }
    // console.log(game);
    return (
        <div className="text-gray-100 ">
            <Card sx={{
                maxWidth: 345, '--tw-bg-opacity': 1,
                backgroundColor: 'rgb(107 114 128 / var(--tw-bg-opacity))'
            }} >
                <CardMedia
                    component="img"
                    height="140"
                    image={game.background_image}
                    alt="green iguana"
                    sx={{ height: '300px' }}
                />
                <CardContent sx={{ height: '220px' }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{
                        '--tw-bg-opacity': 1,
                        color: 'rgb(243 244 246 / var(--tw-bg-opacity))'
                    }}>
                        {game.name}
                    </Typography>
                    <Typography variant="body2" sx={{
                        '--tw-bg-opacity': 1,
                        color: 'rgb(243 244 246 / var(--tw-bg-opacity))'
                    }}>
                        {game.released}
                    </Typography>
                    <Typography variant="body2" sx={{
                        '--tw-bg-opacity': 1,
                        color: 'rgb(243 244 246 / var(--tw-bg-opacity))'
                    }}>
                        {game.rating === 0 ? '' : game.rating}
                    </Typography>
                    <Typography variant="body2" sx={{
                        '--tw-bg-opacity': 1,
                        color: 'rgb(243 244 246 / var(--tw-bg-opacity))'
                    }}>
                        {game.genres.map(g => g.name + " ")}
                    </Typography>
                    <Typography variant="body2" sx={{
                        '--tw-bg-opacity': 1,
                        color: 'rgb(243 244 246 / var(--tw-bg-opacity))',

                    }}>
                        {game.platforms.map(p => p.platform.name + " ")}
                    </Typography>
                    <div className='flex justify-between mt-1'>
                        <span className='mt-2'>
                            <Typography variant="body2" sx={{
                                '--tw-bg-opacity': 1,
                                color: 'rgb(243 244 246 / var(--tw-bg-opacity))'
                            }}>

                            </Typography>
                        </span>
                        <Button outline={false} onClick={e => handleNavigate(game.id)}
                            gradientDuoTone="cyanToBlue" className='text-black hover:text-cyan-600'>More Details</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
/*
PC PlayStation 5 Xbox One PlayStation 4 Xbox Series S/X

4 187 1 18 186
*/


export default CardGameRow