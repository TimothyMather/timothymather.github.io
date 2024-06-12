import React, { useEffect } from "react";
import * as S from "./index.styles";
import ImagePreview from "../../Components/ImagePreview";
import { ImageList, ImageListItemBar, ImageListItem, TextField, Button, FormControl, ButtonGroup, Modal } from "@mui/material";
import imageData from "../../images.json";
import { Image } from "../../Models/image";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ImageDetails from "../../Components/ImageDetails";

const Home = () => {
    const images: Image[] = imageData.images;
    const [filteredImages, setFilteredImages] = React.useState<Image[]>(images);
    const [search, setSearch] = React.useState<string>("");
    const [tag, setTag] = React.useState<string>("");
    const [viewingImage, setViewingImage] = React.useState<Image | null>(null);
    const [open, setOpen] = React.useState(false);

    const getTagList = () => {
        const tags: string[] = [];
        images.forEach((image: Image) => {
            image.tags.forEach((tag: string) => {
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            });
        });
        return tags;
    }
    const resetImages = () => {
        setSearch("");
        setTag("");
        setFilteredImages(images);
    }

    const handleClose = () => {
        setOpen(false);
        setViewingImage(null);
    }

    const handleOpen = (image: Image) => {
        setOpen(true);
        setViewingImage(image);
    }

    useEffect(() => {
        if (search === "" && tag === "") {
            setFilteredImages(images);
            return;
        }

        setFilteredImages(images.filter((image: Image) => {
            if (search === "") {
                return image.tags.includes(tag);
            }
            if (tag === "") {
                return image.title.toLowerCase().includes(search.toLowerCase());
            }
            return image.title.toLowerCase().includes(search.toLowerCase()) && image.tags.includes(tag);
        }));
    }, [images, search, tag]);


    return (
        <Grid2 container spacing={2}>
            <Grid2 xs={12} xsOffset={2}>
                <Modal
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}}
                    open={open}
                    onClose={handleClose}
                >
                    <S.ModalContent>
                        {viewingImage && ImageDetails({ image: viewingImage })}
                    </S.ModalContent>
                </Modal>
            </Grid2>
            <Grid2 xs={12} xsOffset={2}>
                <FormControl>
                    <S.SearchRow>
                        <ButtonGroup variant="contained" aria-label="Basic button group">
                            {getTagList().map((imageTag: string) => {
                                return (
                                    <Button
                                        key={imageTag}
                                        value={imageTag}
                                        variant={imageTag === tag ? "contained" : "outlined"}
                                        onClick={() => setTag(imageTag)}
                                    >
                                        {imageTag}
                                    </Button>
                                );
                            })}
                            <Button onClick={resetImages} variant="outlined">Reset</Button>
                        </ButtonGroup>
                        <TextField onChange={(e) => setSearch(e.target.value)} variant="outlined" label="Search" />
                    </S.SearchRow>
                </FormControl>
                <ImageList
                    sx={{ width: "1016px", height: "100%" }}
                    rowHeight={340}
                    variant="quilted"
                    cols={2}
                    gap={8}
                >
                    {filteredImages.map((image: Image) => {
                        return (
                            <ImageListItem key={image.path} onClick={() => handleOpen(image)}>
                                <ImagePreview {...image} />
                                <ImageListItemBar title={image.title} subtitle={image.date} />
                            </ImageListItem>
                        );

                    })}
                </ImageList>
            </Grid2>
        </Grid2>
    );
};

export default Home;