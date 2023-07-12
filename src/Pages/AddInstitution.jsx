import React from 'react';
import '../Pages/AddInstitution.css'
const AddInstitution = () => {
  return (
    <div className='AddInstitution-container'>
       <div className='CreateAdmin-container'>
         <div className="admin-form">
           <div className="col-md-8">
             <div className="card">
                <div className="card-header">
                  <h5 className="title">Enter Institution Details</h5>
                </div>
                  <div className="card-body">
                   <form>
                   <div className="row">
                <div className="col-md-6 pr-1">
                  <div className="form-group">
                    <label>Institution Name*</label>
                    <input type="text" className="form-control" placeholder='Institution Name' />
                  </div>
                </div>
                </div>
                      
                 <div className='col-md-8 pl-1'>
                  <div className="form-group">
                    <label>Address*</label>
                    <input type="text" className="form-control" placeholder='Address' />
                  </div>
                </div>
                 
                      <div className="row">
                <div className="col-md-4 pr-1">
                  <div className="form-group">
                    <label>country*</label>
                    <input type="text" className="form-control" placeholder='country' />
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="form-group">
                    <label>city*</label>
                    <input type="text" className="form-control" placeholder='city' />
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="form-group">
                    <label>Postal Code*</label>
                    <input type="text" className="form-control" placeholder='Postal Code' />
                  </div>
                </div>
              </div>
              
                      <div className="row">
                <div className="col-md-4 pr-1">
                  <div className="form-group">
                    <label>Institution Email*</label>
                    <input type="text" className="form-control" placeholder='Institution Email'/>
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="form-group">
                    <label>Membership Type*</label>
                    <input type="text" className="form-control" placeholder='Membership Type' />
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="form-group">
                    <label>Admine(s)* </label>
                    <input type="text" className="form-control" placeholder='Admine(s)' />
                  </div>
                </div>
              </div>
              <div className="btncontainer">
              <button type="submit" className="btn">Save</button>
              </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

  );
};

export default AddInstitution;