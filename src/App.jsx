import { useState } from 'react'
import './App.css'
import React from 'react';
import SuperAdminLanding from './Pages/SuperAdminLanding';
import AuthorLanding from './Pages/AuthorLanding';

function App() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleChange2 = () => {
    setChecked2(!checked2);
  };
  return (
    <div className="home">
      <div className="UserSelections">
      <input type="checkbox" checked={checked} onChange={handleChange} /> <span style={{color:'black'}}>Super Admin</span>
      {checked ? <SuperAdminLanding /> : ""}
      <input type="checkbox" checked={checked2} onChange={handleChange2} /> <span style={{color:'black'}}>Author</span>
      {checked2 ? <AuthorLanding /> : ""}
      </div>
      
    </div>
    
  )
}
export default App
