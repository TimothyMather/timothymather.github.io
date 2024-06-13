import React from "react";
import { Image } from "../../Models/image";

const ImagePreview = ({ path }: Image) => {
    return <img
        srcSet={`./Images/${path}`}
        src={`./Images/${path}`}
        alt="title"
    />;
};


export default ImagePreview;