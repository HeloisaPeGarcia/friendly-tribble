import React, { useState, useEffect } from 'react';

const Totem = () => {
  const [pedidos, setPedidos] = useState([
    { id: 1, item: 'Açaí Tradicional', status: 'Em preparo' },
    // Adicione mais pedidos de teste
  ]);

  const pedidosEmAndamento = pedidos.filter(
    (pedido) => pedido.status !== 'Entregue'
  );

  return (
    <div>
      <h1>Tóten - Pedidos em Andamento</h1>
      {pedidosEmAndamento.map((pedido) => (
        <div key={pedido.id}>
          <h3>{pedido.item}</h3>
          <p>Status: {pedido.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Totem;
