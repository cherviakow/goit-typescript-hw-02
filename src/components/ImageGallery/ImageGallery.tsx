import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'
import React from "react";

interface ImageGalleryProps {
    pictures: Picture[];
    onClick: (photo: string) => void;

}



export const ImageGallery: React.FC<ImageGalleryProps> = ({pictures, onClick}) => {
    return (
        <div className={css.imageGallery}>
            <ImageGalleryItem onClickImg={onClick} pictures={pictures} />
        </div>
    )
}