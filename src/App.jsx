import { useState } from 'react'
import './App.css'
import React from 'react';
// import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import SuperAdminLanding from './Pages/SuperAdmin/SuperAdminLanding';
import AuthorLanding from './Pages/Author/AuthorLanding';
function App() {
  const [activePage, setActivePage] = useState('SuperAdminLanding');

  const handleButtonClick = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'SuperAdminLanding':
        return <SuperAdminLanding />;
      case 'AuthorLanding':
        return <AuthorLanding />;
      default:
        return null; // Or a default page component for unknown pages
    }
  };


  return (
   <>
      <div className="UserButtons">
        <button className='UserButton'  onClick={() => handleButtonClick('SuperAdminLanding')}>Super</button>
        <button className='UserButton'  onClick={() => handleButtonClick('AuthorLanding')}>Author</button>
      </div>

      {renderPage()}

   </>
    
  )
}
export default App
