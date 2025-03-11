import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../App.css"

const AlbumPhotos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
        if (!response.ok) throw new Error('Failed to fetch photos');
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhotos();
  }, [albumId]);

  return (
    <div>
      <h1>Photos</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumPhotos;