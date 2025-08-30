import React from 'react';
import { Routes, Route } from 'react-router-dom';

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Customer Dashboard</h1>
            <p className="text-gray-400">Customer homepage coming soon...</p>
          </div>
        </div>
      } />
    </Routes>
  );
};

export default CustomerRoutes;
