import React from 'react';

const PedidoCard = ({ pedido, onStatusChange }) => (
  <div className="pedido-card">
    <h3>{pedido.item}</h3>
    <p>Status: {pedido.status}</p>
    <select
      value={pedido.status}
      onChange={(e) => onStatusChange(pedido.id, e.target.value)}
    >
      <option value="Em preparo">Em preparo</option>
      <option value="Retirar">Retirar</option>
      <option value="Entregue">Entregue</option>
    </select>
  </div>
);

export default PedidoCard;
