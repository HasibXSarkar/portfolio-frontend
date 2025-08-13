import React, { useEffect, useState } from 'react';
import './Blog.css';
import api from '../services/api';


const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('blogs/')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="blog-page">
      <h2>Blog Posts</h2>
      <div className="blog-list">
        {posts.map(post => (
          <div className="blog-card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>
              <small>
                {new Date(post.created_at).toLocaleDateString()}
              </small>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;