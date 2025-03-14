import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

const Photos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState("all"); // Dropdown selection
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos`
        );
        if (!response.ok) throw new Error("Failed to fetch photos");
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhotos();
  }, [albumId]);

  // Function to parse search query with field filtering
  const filterPhotos = () => {
    if (!searchQuery) return photos;

    // Split by spaces, filter by key:value pairs
    const queryParts = searchQuery.toLowerCase().split(" ");
    return photos.filter((photo) => {
      return queryParts.every((query) => {
        const [key, value] = query.split(":");

        if (value) {
          // Search based on field name
          if (key === "albumid" && photo.albumId.toString().includes(value))
            return true;
          if (key === "id" && photo.id.toString().includes(value)) return true;
          if (key === "title" && photo.title.toLowerCase().includes(value))
            return true;
          if (key === "url" && photo.url.toLowerCase().includes(value))
            return true;
        } else {
          // Generic search if no key is provided
          return (
            photo.id.toString().includes(query) ||
            photo.albumId.toString().includes(query) ||
            photo.title.toLowerCase().includes(query) ||
            photo.url.toLowerCase().includes(query)
          );
        }
        return false;
      });
    });
  };

  const filteredPhotos = filterPhotos();

  return (
    <div className="album-photos">
      {/* Go Back Button */}
      <button onClick={() => navigate(-1)} className="go-back-button">
        Go Back
      </button>

      <h1 className="page-title">Photos</h1>

      {/* Search Bar & Dropdown */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search (e.g., albumId:1 title:beach)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <select
          value={selectedField}
          onChange={(e) => setSelectedField(e.target.value)}
          className="search-dropdown"
        >
          <option value="all">All Fields</option>
          <option value="id">Photo ID</option>
          <option value="albumId">Album ID</option>
          <option value="title">Title</option>
          <option value="url">URL</option>
        </select>
      </div>

      <div className="photo-grid">
        {filteredPhotos.length > 0 ? (
          filteredPhotos.map((photo) => (
            <div key={photo.id} className="photo-card">
              <img src={photo.url} alt={photo.title} className="photo-image" />
              <p className="photo-title">{photo.title}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Photos;
