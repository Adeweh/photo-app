import React from 'react'
import ImageItem from './ImageItem'
import styles from "./ImageList.module.css"

const ImageList = ({images}) => {
  return (
    <div className={styles["image-list"]}>
     {images.map((image) => (
        <ImageItem
        key={image.id}
        src={image.urls.regular}
        alt={image.alt_description}
        />
     ))}
    </div>
  );
};

export default ImageList
