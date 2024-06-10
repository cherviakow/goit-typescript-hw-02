import React from 'react';
import css from './ImageGalleryItem.module.css'

interface ImageGalleryItemProps {
    pictures: Picture[];
    onClickImg: (picture: string) => void;
}

export const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
    pictures, 
    onClickImg
}) => {

    return pictures.map((picture: Picture) => {
        return(
            <div className={css.imageGalleryItem} key={picture.id}>
                <img 
                onClick={()=> {
                    onClickImg(picture.largeImageURL);
                }}
                src={picture.webformatURL} 
                alt={picture.tags}
                className={css.imageGalleryItemImage} />

            </div>
        )
    })
}
