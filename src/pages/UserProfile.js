import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../App.css';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [editingPost, setEditingPost] = useState(null); // Track the post being edited
  const [editedTitle, setEditedTitle] = useState('');
  const [editedBody, setEditedBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user details
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user');
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch user posts
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!postsResponse.ok) throw new Error('Failed to fetch posts');
        const postsData = await postsResponse.json();
        setPosts(postsData);

        // Fetch user albums
        const albumsResponse = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
        if (!albumsResponse.ok) throw new Error('Failed to fetch albums');
        const albumsData = await albumsResponse.json();
        setAlbums(albumsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [userId]);

  // Handle Edit Post
  const handleEditPost = (post) => {
    setEditingPost(post);
    setEditedTitle(post.title);
    setEditedBody(post.body);
  };

  // Handle Save Edited Post
  const handleSaveEdit = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${editingPost.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: editingPost.id,
          title: editedTitle,
          body: editedBody,
          userId: editingPost.userId,
        }),
      });

      if (!response.ok) throw new Error('Failed to update post');

      // Update the posts state with the edited post
      const updatedPosts = posts.map((post) =>
        post.id === editingPost.id ? { ...post, title: editedTitle, body: editedBody } : post
      );
      setPosts(updatedPosts);

      // Close the dialog
      setEditingPost(null);
    } catch (error) {
      console.error(error);
    }
  };

  // Handle Delete Post
  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete post');

      // Remove the post from the posts state
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) return <div className="loading">Loading...</div>;

  return (
    <div className="user-profile">
      {/* User Details Section */}
      <button onClick={() => navigate(-1)} className="go-back-button">
        Go Back
      </button>
      <div className="user-details">
        <h1 className="user-name">{user.name}</h1>
        <p className="user-username">@{user.username}</p>

        <div className="user-info">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        </div>

        <div className="user-address">
          <h2>Address</h2>
          <p>{user.address.street}, {user.address.suite}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
          <p><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>
        </div>

        <div className="user-company">
          <h2>Company</h2>
          <p><strong>Name:</strong> {user.company.name}</p>
          <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
          <p><strong>Business:</strong> {user.company.bs}</p>
        </div>
      </div>

      {/* Albums Section */}
      <div className="user-section">
        <h2>Albums</h2>
        <ul className="user-list">
          {albums.map(album => (
            <li key={album.id} className="user-item">
                {album.title}
              <Link to={`/albums/${album.id}/photos`} className="user-link">
                View Album Photos
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Posts Section */}
      <div className="user-section">
        <h2>Posts</h2>
        <ul className="user-list">
          {posts.map(post => (
            <li key={post.id} className="user-item">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <div className="post-actions">
                <button onClick={() => handleEditPost(post)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDeletePost(post.id)} className="delete-button">
                  Delete
                </button>
                <Link to={`/posts/${post.id}/comments`} className="user-link">
                  View Comments
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Edit Post Dialog */}
      {editingPost && (
        <div className="dialog-overlay">
          <div className="dialog">
            <h2>Edit Post</h2>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="Title"
              className="dialog-input"
            />
            <textarea
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
              placeholder="Body"
              className="dialog-input"
            />
            <div className="dialog-actions">
              <button onClick={handleSaveEdit} className="save-button">
                Save
              </button>
              <button onClick={() => setEditingPost(null)} className="cancel-button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;