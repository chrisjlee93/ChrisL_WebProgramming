import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import errorImage from "../assets/404Background.jpg"

const ErrorCard = ({search}) => {

    return (
        <Card sx={{ maxWidth: 342 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={513}
                    image={errorImage}
                    alt='404'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        404
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        There are no results for {search}. Possible typos or network issues. Please try again later!
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Rating: 4.04
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ErrorCard

