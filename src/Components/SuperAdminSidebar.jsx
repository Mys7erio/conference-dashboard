import React from 'react';
import {Link} from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
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