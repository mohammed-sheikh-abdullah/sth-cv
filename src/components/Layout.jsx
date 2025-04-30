import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content container">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Mohammed Sheikh Abdallah</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 