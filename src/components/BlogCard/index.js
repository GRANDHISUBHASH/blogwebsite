import React from 'react';
import {Link} from 'react-router-dom'
import './index.css'

const BlogCard = (props) => {
  const cardsData=props.cardsData
 
  console.log(cardsData.cardsData)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {cardsData.map(card => (
    <div key={card.id} className="card">
      <img src={card.image} alt={`Card ${card.id}`} className="card-image" />
      <h3 className="card-title">{card.title}</h3>
      <p className="card-text">{card.text}</p>
      <Link to={`/blog/${card.id}`}>
  <button className="card-button">Read More</button>
</Link>


      
    </div>
  ))}
</div>

  );
}

export default BlogCard;
