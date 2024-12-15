import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom'; // Render route content dynamically
import whatsapp from './assets/image/whatsapp.png'; // Ensure this path is correct and the icon exists

function App() {
  return (
    <div>
       <Header /> 
      {/* This renders the matching route content */}
      <Outlet />
       <Footer /> 
      
      {/* WhatsApp Floating Button */}
      <div className="fixed-bottom p-3" style={{ zIndex: "6", right: "20px", left: "auto" }}>
        <a href="https://wa.me/917025127767?text=Hello How can I help you ?" 
           target="_blank" 
           rel="noopener noreferrer">
          <img src={whatsapp} width="60" alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
}

export default App;
