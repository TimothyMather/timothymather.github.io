import React from "react";
import { Image } from "../../Models/image";
import * as S from "./index.styles";

const ImagePreview = ({ title, path, description, date }: Image) => {
    return <S.Image
        srcSet={`./Images/${path}`}
        src={`./Images/${path}`}
        alt="title"
    />;
};


export default ImagePreview;