// src/components/Gallery.js
import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Breadcrumbs from '../Breadcrumbs';
import "./Gallery.css"

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/images/galleryimages/galleryimages.json`);
        const imageList = await response.json();
        const imageObjects = imageList.map(image => ({
          original: `${process.env.PUBLIC_URL}/images/galleryimages/${image}`,
          thumbnail: `${process.env.PUBLIC_URL}/images/galleryimages/${image}`
        }));
        setImages(imageObjects);
      } catch (error) {
        console.error('Error fetching images', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className='container Gallery-page'>
      <div className='mt-5'>
        <Breadcrumbs className='mt-5' />
      </div>
      <h1 className='event-heading'>Our Gallery</h1>
      <ImageGallery
        items={images}
        showThumbnails={true}
        thumbnailPosition='left'
        infinite={true}
        autoPlay={true}
      />
    </div>
  );
};

export default Gallery;
