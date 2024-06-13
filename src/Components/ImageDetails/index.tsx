import React from "react";
import { Image } from "../../Models/image";
import { CardMedia, CardContent, Typography } from "@mui/material";
import * as S from "./index.styles"

const ImageCard = ({ image }: { image: Image }) => (
    <S.StyledCard>
        {image && (
            <CardMedia
                component="img"
                sx={{width: "100%", objectFit: "contain"}}
                image={`./Images/${image.path}`}
                alt={image.title}
            />
        )}
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {image.title} - {image.date}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
                {image.description}
            </Typography>
        </CardContent>
    </S.StyledCard>
);


export default ImageCard;