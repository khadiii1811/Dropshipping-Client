import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import SellerRoutes from './routes/SellerRoutes';
import SupplierRoutes from './routes/SupplierRoutes';
import CustomerRoutes from './routes/CustomerRoutes';
import AdminRoutes from './routes/AdminRoutes';
import Homepage from './pages/Homepage';
import './App.css';

// Component to handle homepage with userType parameter
const HomepageWithUserType = () => {
  const { userType } = useParams();
  return <Homepage userType={userType} />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default route - redirect to seller homepage */}
          <Route path="/" element={<Navigate to="/seller" replace />} />
          
          {/* Direct homepage routes with userType */}
          <Route path="/homepage/:userType" element={<HomepageWithUserType />} />
          
          {/* Seller routes */}
          <Route path="/seller/*" element={<SellerRoutes />} />
          
          {/* Supplier routes */}
          <Route path="/supplier/*" element={<SupplierRoutes />} />
          
          {/* Customer routes */}
          <Route path="/customer/*" element={<CustomerRoutes />} />
          
          {/* Admin routes */}
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
