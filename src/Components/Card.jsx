import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function GameCard({ game }) {
    return (
        <>
            {
                <Card sx={{
                maxWidth: 345, '--tw-bg-opacity': 1,
                backgroundColor: 'rgb(107 114 128 / var(--tw-bg-opacity))'
            }} >
                <CardMedia
                    component="img"
                    height="140"
                    image={game.thumbnail}
                    alt="green iguana"
                    sx={{ height: '200px'}}
                />
                <CardContent sx={{ height: '195px',overflow:'clip'}}>
                    <Typography gutterBottom variant="h5" component="div" sx={{
                        '--tw-bg-opacity': 1,
                        color: 'rgb(243 244 246 / var(--tw-bg-opacity))'
                    }}>
                        {game.title}
                    </Typography>
                    <Typography variant="body2" sx={{
                        '--tw-bg-opacity': 1,
                        color: 'rgb(243 244 246 / var(--tw-bg-opacity))'
                    }}>
                        {game.short_description}
                    </Typography>

                </CardContent>
            </Card>
            }
        </>
    );
}

