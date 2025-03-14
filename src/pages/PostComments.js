import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const PostComments = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        if (!response.ok) throw new Error('Failed to fetch comments');
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <div className="post-comments">
      {/* Go Back Button */}
      <button onClick={() => navigate(-1)} className="go-back-button">
        Go Back
      </button>

      <h2 className="page-title">Comments</h2>
      <ul className="comment-list">
        {comments.map(comment => (
          <li key={comment.id} className="comment-card">
            <h3 className="comment-name">{comment.name}</h3>
            <p className="comment-body">{comment.body}</p>
            <p className="comment-email"><strong>Email:</strong> {comment.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostComments;