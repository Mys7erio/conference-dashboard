import { useState } from 'react'
import './App.css'
import SuperAdminSidebar from './Components/SuperAdminSidebar.jsx';
import AddInstitution from './Pages/AddInstitution';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <div className='container'>
          <SuperAdminSidebar />
          <Routes>
            <Route path="/AddInstitution" element={<AddInstitution />} />
          </Routes>  
        </div>
      </Router>
      
    </>
  )
}
export default App
