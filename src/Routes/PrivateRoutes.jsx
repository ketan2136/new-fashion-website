import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

function PrivateRoutes() {
  const { user } = useAuth(); // Replace with your authentication logic return user
//   const { user } = false; // Replace with your authentication logic return user

  return (
    <div>
      {user ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
}

export default PrivateRoutes


