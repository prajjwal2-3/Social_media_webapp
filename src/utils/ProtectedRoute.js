// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ path, element }) => {
  const isUser = useSelector(state => state.user.user);

  return isUser ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
