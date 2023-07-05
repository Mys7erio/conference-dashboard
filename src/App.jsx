import { useState } from 'react'
import './App.css'
import SuperAdminSidebar from './Components/SuperAdminSidebar.jsx';
import AddInstitution from './Pages/AddInstitution';
import CreateAdmin from './Pages/CreateAdmin';
import AssignAdmin from './Pages/AssignAdmin';
import SuperAdminDashboard from './Pages/SuperAdminDashboard';
import UserManagement from './Pages/UserManagement';
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
            <Route path="/CreateAdmin" element={<CreateAdmin />} />
            <Route path="/AssignAdmin" element={<AssignAdmin />} />
            <Route path="/SuperAdminDashboard" element={<SuperAdminDashboard />} />
            <Route path="/UserManagement" element={<UserManagement />} />
          </Routes>  
        </div>
      </Router>
      
    </>
  )
}
export default App
