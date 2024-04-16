import React, { useState } from 'react';
import './index.css'

export default function AddBlog({ addBlog }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  const handleAddBlog = () => {
    const newBlog = {
      id: Date.now(),
      title,
      image,
      text: content,
    };
    addBlog(newBlog);
    setTitle('');
    setImage('');
    setContent('');
  };

  return (
    <div className="blog-card">
      <div className="add-blog-container">
        <div className="blog-inputs">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button type="button" onClick={handleAddBlog}>
            Add Your Blog
          </button>
        </div>
      </div>
    </div>
  );
}
