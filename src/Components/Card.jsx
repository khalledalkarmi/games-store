import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function GameCard({ game }) {
    return (
        <Card sx={{ maxWidth: 345,marginTop:"0.8rem",marginBottom:"0.5rem",backgroundColor:'black' ,color:'white'} }  >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    width="20"
                    image={game.thumbnail}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {game.title}
                    </Typography>
                    <Typography variant="body2" className='text-gray-300'>
                        {game.short_description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
