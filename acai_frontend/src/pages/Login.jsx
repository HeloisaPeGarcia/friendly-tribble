import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', { user, password });
      if (response.data.success) {
        navigate('/pedidos');
      } else {
        alert('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro no login');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Usuário"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
