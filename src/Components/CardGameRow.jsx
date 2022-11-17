import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const CardGameRow = ({ game }) => {
    console.log(game);
    return (
        <div className="text-gray-100">
            <Card sx={{
                maxWidth: 345, '--tw-bg-opacity': 1,
                backgroundColor: 'rgb(107 114 128 / var(--tw-bg-opacity))'
            }} >
                <CardMedia
                    component="img"
                    height="140"
                    image={game.background_image}
                    alt="green iguana"
                    sx={{ height: '300px'}}
                />
                <CardContent sx={{ height: '220px'}}>
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
                    <Typography variant="body2" sx={{
                        '--tw-bg-opacity': 1,
                        color: 'rgb(243 244 246 / var(--tw-bg-opacity))'
                    }}>
                        {game.platforms.map(p => p.platform.id + " ")}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardGameRow