import React from 'react';
import {Link} from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import { FaBuilding, FaBars, FaUserPlus, FaUserTag, FaChartLine,FaUserEdit, FaWalking, FaBell, FaWrench} from 'react-icons/fa';
import Logo from '../assets/KJCLogo.png';
import '../Components/SuperAdminSidebar.css' 
const SuperAdminSidebar = () => {
  return (  
    <div style={{ display: 'flex', height: '100%', minHeight: '400px'}}>
    <Sidebar className='custom' backgroundColor="#66615B" collapsedWidth="0px" transitionDuration={1000}>
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
        <MenuItem icon={<FaBuilding />} component={<Link to="/AddInstitution"/>}>Create Institutions</MenuItem>
        <MenuItem icon={<FaUserPlus/>} component={<Link to="/CreateAdmin"/>}>Create Admins</MenuItem>
        {/* <MenuItem icon={<FaUserTag />} component={<Link to="/AssignAdmin"/>}>Assign Admin</MenuItem> */}
        <MenuItem icon={<FaChartLine />} component={<Link to="/SuperAdminDashboard"/>}>Dashboard</MenuItem>
        <MenuItem icon={<FaUserEdit />} component={<Link to="/AdminUserTab"/>}>User Management(Admin)</MenuItem>
        <div className="SuperAdminSidebarEnd">
        <button className='NotificationButton SidebarButtons'>
          <FaBell /> Notifications
        </button>
        <button className='SettingsButton SidebarButtons'>
          <FaWrench /> Settings
        </button>
        <button className='LogoutButton SidebarButtons'>
          <FaWalking /> Log out
        </button>
        </div>
      </Menu>
    </Sidebar>
  </div>
  );
};

export default SuperAdminSidebar;