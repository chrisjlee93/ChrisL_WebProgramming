import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import fillerGhost from '../assets/fillerGhost.png'

export default function ActionAreaCard({data}) {

    const {title, overview, vote_average, poster_path} = data
    const posterImage = poster_path ? `https://image.tmdb.org/t/p/w342${poster_path}` : `${fillerGhost}`

    return (
        <Card sx={{ maxWidth: 342 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={513}
                    image={posterImage}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {overview}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Rating: {vote_average}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
