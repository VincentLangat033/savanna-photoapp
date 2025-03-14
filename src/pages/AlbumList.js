import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const AlbumList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (!selectedUserId) return;

    const fetchAlbums = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${selectedUserId}`);
        if (!response.ok) throw new Error('Failed to fetch albums');
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbums();
  }, [selectedUserId]);

  return (
    <div className="album-list">
      {/* Go Back Button */}
      <button onClick={() => navigate(-1)} className="go-back-button">
        Go Back
      </button>

      <h1 className="page-title">Albums</h1>

      {/* User Dropdown */}
      <div className="user-dropdown">
        <select
          onChange={(e) => setSelectedUserId(e.target.value)}
          className="dropdown"
        >
          <option value="">Select a user</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
      </div>

      {/* Album List */}
      <ul className="album-grid">
        {albums.map(album => (
          <li key={album.id} className="album-card">
            <Link to={`/albums/${album.id}/photos`} className="album-link">
              {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;