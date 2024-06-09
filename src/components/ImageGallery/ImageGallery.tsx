import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'
import React from "react";

interface ImageGalleryProps {
    pictures: Picture[] | null;
    onClick: (photo: Picture) => void;

}



export const ImageGallery: React.FC<ImageGalleryProps> = ({pictures, onClick}) => {
    return (
        <div className={css.imageGallery}>
            <ImageGalleryItem onClickImg={onClick} pictures={pictures} />
        </div>
    )
}





// export const ImageGallery = ({pictures, onClick}) => {
//     return (
//         <div className={css.imageGallery}>
//             <ImageGalleryItem onClickImg={onClick} pictures={pictures} />
//         </div>
//     )
// }


// ImageGallery.propTypes = {
//     pictures: PropTypes.array.isRequired,
//     onClick: PropTypes.func.isRequired,
// }