import React from 'react';
import {Link} from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import { FaBuilding, FaBars, FaUserPlus, FaUserTag, FaChartLine,FaUserEdit, FaWalking} from 'react-icons/fa';
import Logo from '../assets/KJCLogo.png';
import userimage from '../assets/userimage.png'
import { FaHome, FaBars} from 'react-icons/fa';
import Logo from '../assets/KJCLogo.png';
import '../Components/SuperAdminSidebar.css' 
const SuperAdminSidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (  
    <div style={{ display: 'flex', height: '100%', minHeight: '400px'}}>
    <Sidebar collapsed={collapsed} className='custom' backgroundColor="#66615B" collapsedWidth="50px">
      <Menu>
          <div className="topLogo">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="text">
              <h4>CONFERENCE PORTAL</h4>
            </div>
          </div>
          <hr />
          <div className="userdetails">
            <div className="userImage">
              <img src={userimage} alt="" />
            </div>
            <div className="username">
              <h3>Username</h3>
            </div>
          </div>
          <hr />
        <MenuItem icon={<FaBuilding />} component={<Link to="/AddInstitution"/>}>Create Institutions</MenuItem>
        <MenuItem icon={<FaUserPlus />} component={<Link to="/CreateAdmin"/>}>Create Admin</MenuItem>
        <MenuItem icon={<FaUserTag />} component={<Link to="/AssignAdmin"/>}>Assign Admin</MenuItem>
        <MenuItem icon={<FaChartLine />} component={<Link to="/SuperAdminDashboard"/>}>Dashboard</MenuItem>
        <MenuItem icon={<FaUserEdit />} component={<Link to="/UserManagement"/>}>User Management</MenuItem>
        <button className='logout'>
          <FaWalking /> Logout
        </button>
        <MenuItem icon={<FaHome />} component={<Link to="/AddInstitution"/>}>ADD INSTITUTIONS</MenuItem>
      </Menu>
    </Sidebar>
    <main style={{ padding: 10 }}>  
      <div>
        <button className="sb-button collapseButton" onClick={() => setCollapsed(!collapsed)}>
          <FaBars />
        </button>
      </div>
    </main>
  </div>
  );
};

export default SuperAdminSidebar;