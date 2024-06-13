import React, { useEffect } from "react";
import * as S from "./index.styles";
import ImagePreview from "../../Components/ImagePreview";
import { ImageList, ImageListItemBar, TextField, Button, FormControl, ButtonGroup, Card } from "@mui/material";
import imageData from "../../images.json";
import { Image } from "../../Models/image";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ImageCard from "../../Components/ImageDetails";

const Home = () => {
    const images: Image[] = imageData.images;
    const [filteredImages, setFilteredImages] = React.useState<Image[]>(images);
    const [search, setSearch] = React.useState<string>("");
    const [tags, setTags] = React.useState<string[]>([]);
    const [viewingImage, setViewingImage] = React.useState<Image | null>(null);
    const [open, setOpen] = React.useState(false);

    const getTagList = () => {
        const allTags: string[] = [];
        images.forEach((image: Image) => {
            image.tags.forEach((tag: string) => {
                if (!allTags.includes(tag)) {
                    allTags.push(tag);
                }
            });
        });
        return allTags;
    }

    const addOrRemoveTag = (imageTag: string) => {
        if (tags.includes(imageTag)) {
            setTags([...tags.filter(tag => tag !== imageTag)])
        } else {
            setTags([...tags, imageTag])
        }
    }

    const resetImages = () => {
        setSearch("");
        setTags([]);
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
        setFilteredImages(images.filter((image: Image) => {
            // TODO: Add back tag filtering
            let tagInList = false
            if (search === "" && tags.length === 0) {
                return image.tags;
            }
            if (tags.length === 0) {
                return image.title.toLowerCase().includes(search.toLowerCase());
            } else {
                tagInList = !!image.tags.find(tag => tags.includes(tag));
            }
            console.log(tagInList);
            return image.title.toLowerCase().includes(search.toLowerCase()) && tagInList;
        }));
    }, [images, search, tags]);


    return (
        <S.Container>
            <Grid2>
                <S.StyledModal
                    open={open}
                    onClose={handleClose}
                >
                    <S.ModalContent>
                        {/* <Icon muiName" /> */}
                        {viewingImage && <ImageCard image={viewingImage} />}
                        <Button sx={{ marginBottom: "20px", width: "75%" }} onClick={handleClose} variant="contained">Back</Button>
                    </S.ModalContent>
                </S.StyledModal>
            </Grid2>
            <S.Row>
                <FormControl>
                    <S.SearchRow>
                        <ButtonGroup variant="contained" aria-label="Basic button group">
                            {getTagList().map((imageTag: string) => {
                                return (
                                    <Button
                                        key={imageTag}
                                        value={imageTag}
                                        variant={tags.includes(imageTag) ? "contained" : "outlined"}
                                        onClick={() => addOrRemoveTag(imageTag)}
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
            </S.Row>
            <S.Row>
                <ImageList
                    variant="quilted"
                    gap={8}
                >
                    {filteredImages.map((image: Image) => {
                        return (
                            <Card sx={{cursor: "pointer"}}>
                                <S.Image key={image.path} onClick={() => handleOpen(image)}>
                                    <ImagePreview {...image} />
                                    <ImageListItemBar
                                        sx={{ padding: "5px" }}
                                        title={image.title}
                                        subtitle={image.date}
                                        position="below"
                                    />
                                </S.Image>
                            </Card>
                        );

                    })}
                </ImageList>
            </S.Row>
        </S.Container>
    );
};

export default Home;