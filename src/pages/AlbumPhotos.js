import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const AlbumPhotos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

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
    <div className="album-photos">
      {/* Go Back Button */}
      <button onClick={() => navigate(-1)} className="go-back-button">
        Go Back
      </button>

      <h1 className="page-title">Photos</h1>
      <div className="photo-grid">
        {photos.map(photo => (
          <div key={photo.id} className="photo-card">
            <img src={photo.url} alt={photo.title} className="photo-image" />
            <p className="photo-title">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumPhotos;