import React, { useState } from 'react';
import './App.css'; // Assuming you have CSS styles in a separate file

const MyClass = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [menuItems, setMenuItems] = useState([]); // Replace with your menu items
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]); // Replace with your orders
  const [activeOrders, setActiveOrders] = useState([]); // Replace with your active orders

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const confirmOrder = () => {
    // Confirm order logic
  };

  const login = () => {
    // Handle login logic
    setIsLoggedIn(true); // Example, replace with actual logic
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const updateOrderStatus = (order) => {
    // Update order status logic
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0).toFixed(2); // Calculate total

  return (
    <div>
      <base href="." />
      <title>Sistema de Pedidos de Açaí</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
          }
          body {
            background: #f5f5f5;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          /* Additional CSS styles... */
        `}
      </style>

      <div id="app">
        <nav>
          <div className="container">
            <a href="#" onClick={() => setCurrentPage('home')}>Home</a>
            {!isLoggedIn && <a href="#" onClick={() => setCurrentPage('login')}>Login</a>}
            {isLoggedIn && <a href="#" onClick={() => setCurrentPage('orders')}>Pedidos</a>}
            <a href="#" onClick={() => setCurrentPage('totem')}>Totem</a>
            {isLoggedIn && <a href="#" onClick={logout}>Logout</a>}
          </div>
        </nav>

        {/* Home Page */}
        {currentPage === 'home' && (
          <div className="container">
            <h1>Cardápio de Açaí</h1>
            <div className="menu-grid">
              {menuItems.map(item => (
                <div className="menu-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>R$ {item.price.toFixed(2)}</p>
                  <button onClick={() => addToCart(item)}>Adicionar ao Pedido</button>
                </div>
              ))}
            </div>
            {cart.length > 0 && (
              <div className="cart-summary">
                <h2>Seu Pedido</h2>
                {cart.map(item => (
                  <p key={item.id}>{item.name} - R$ {item.price.toFixed(2)}</p>
                ))}
                <p>Total: R$ {cartTotal}</p>
                <button onClick={confirmOrder}>Confirmar Pedido</button>
              </div>
            )}
          </div>
        )}

        {/* Login Page */}
        {currentPage === 'login' && (
          <div className="container">
            <div className="form-container">
              <h2>Login</h2>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                />
              </div>
              <button onClick={login}>Entrar</button>
            </div>
          </div>
        )}

        {/* Orders Page */}
        {currentPage === 'orders' && isLoggedIn && (
          <div className="container">
            <h2>Gerenciar Pedidos</h2>
            <div className="order-list">
              {orders.map(order => (
                <div className="order-item" key={order.id}>
                  <h3>Pedido #{order.id}</h3>
                  <p>Status: {order.status}</p>
                  <select value={order.status} onChange={(e) => updateOrderStatus(order)}>
                    <option value="em preparo">Em Preparo</option>
                    <option value="retirar">Retirar</option>
                    <option value="entregue">Entregue</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Totem Page */}
        {currentPage === 'totem' && (
          <div className="container">
            <div className="totem-display">
              <h2>Acompanhe seu Pedido</h2>
              {activeOrders.map(order => (
                <div className="order-status" key={order.id}>
                  <p>Pedido #{order.id} - {order.status}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyClass;
