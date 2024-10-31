import React, { useState } from 'react';
import PedidoCard from '../components/PedidoCard';

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([
    { id: 1, item: 'Açaí Tradicional', status: 'Em preparo' },
    // Adicione mais pedidos de teste
  ]);

  const handleStatusChange = (id, newStatus) => {
    setPedidos(pedidos.map((pedido) => 
      pedido.id === id ? { ...pedido, status: newStatus } : pedido
    ));
  };

  return (
    <div>
      <h1>Pedidos</h1>
      {pedidos.map((pedido) => (
        <PedidoCard
          key={pedido.id}
          pedido={pedido}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default Pedidos;
