import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import './index.css'


const BlogFullCard = (props) => {
  // Use useParams to get the id parameter from the URL
  const { id } = useParams();
  
  // Find the blog post with the matching ID
  const blog = props.cardsData.find(card => card.id === parseInt(id));

  // Check if blog exists before rendering
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="card1">
      <img src={blog.image} alt={`Card ${blog.id}`} className="card-image1" />
      <h3 className="card-title">{blog.title}</h3>
      <p className="card-text">{blog.text}</p>
      
    </div>
  );
};

export default BlogFullCard;
