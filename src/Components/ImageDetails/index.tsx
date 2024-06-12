import React from "react";
import { Image } from "../../Models/image";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const ImageDetails = ({ image }: { image: Image }) => (
    <Card>
        {image && (
            <CardMedia
                component="img"
                sx={{ width: 800, objectFit: "contain"}}
                image={`./Images/${image.path}`}
                alt={image.title}
            />
        )}
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {image.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {image.description}
        </Typography>
        </CardContent>
    </Card>
);


export default ImageDetails;