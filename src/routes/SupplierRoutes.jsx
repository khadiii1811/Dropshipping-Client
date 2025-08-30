import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const SupplierRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage userType="supplier" />} />
      {/* Add more supplier routes here */}
    </Routes>
  );
};

export default SupplierRoutes;
