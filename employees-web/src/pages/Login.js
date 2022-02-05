import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  return <div>
    <h1>Login</h1>
    <button onClick={() => {auth.login({login: true}); navigate('/employee')}}>Login</button>
  </div>;
}

export default Login;
