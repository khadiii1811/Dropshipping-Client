import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      {children}
    </div>
  );
};

export default MainLayout; 