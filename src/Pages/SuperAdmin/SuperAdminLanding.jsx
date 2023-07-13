import React from 'react';
import SuperAdminSidebar from '../../Components/SuperAdminSidebar.jsx';
import AddInstitution from '../SuperAdmin/AddInstitution.jsx';
import CreateAdmin from '../SuperAdmin/CreateAdmin';
import AssignAdmin from '../SuperAdmin/AssignAdmin';
import SuperAdminDashboard from '../SuperAdmin/SuperAdminDashboard';
import UserManagement from '../SuperAdmin/UserManagement.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
const SuperAdminLanding = () => {
  return (
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
  );
};

export default SuperAdminLanding;