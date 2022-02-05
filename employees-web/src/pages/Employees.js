import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';

function Employees() {
  const auth = useAuth();
  const navigate = useNavigate();

  return <div>
  <h2>Employee header</h2>
  <Outlet/>
  <button onClick={() => {
    auth.logout();
    navigate('/login')
  }}>Logout</button>
  </div>;

}

export default Employees;
