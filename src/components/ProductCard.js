import React from 'react';

const ProductCard = ({ sneaker, onSelect, isSelected }) => {
  return (
    <div 
      className={`product-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <div className="card-image">{sneaker.image}</div>
      <div className="card-info">
        <h3>{sneaker.name}</h3>
        <p className="year">{sneaker.year}</p>
        <p className="color">{sneaker.color}</p>
        <span className="price">{sneaker.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
