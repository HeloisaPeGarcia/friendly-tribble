import React from 'react';

const ItemCard = ({ item, onAddToCart }) => (
  <div className="item-card">
    <h3>{item.name}</h3>
    <p>{item.description}</p>
    <span>R$ {item.price.toFixed(2)}</span>
    <button onClick={() => onAddToCart(item)}>Adicionar ao Pedido</button>
  </div>
);

export default ItemCard;
