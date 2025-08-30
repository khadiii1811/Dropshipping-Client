import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const SellerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage userType="seller" />} />
      {/* Add more seller routes here */}
    </Routes>
  );
};

export default SellerRoutes;
