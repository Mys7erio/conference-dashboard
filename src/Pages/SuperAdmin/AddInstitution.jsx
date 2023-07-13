import React from 'react';
import '../SuperAdmin/AddInstitution.css'
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
                <div className="col-md-4 pr-1">
                  <div className="form-group">
                    <label>Institution Name*</label>
                    <input type="text" className="form-control" placeholder='Institution Name'  />
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="form-group">
                    <label>Contact No*</label>
                    <input type="text" className="form-control" placeholder='Contact No' required maxLength={10} minLength={10}  />
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="form-group">
                    <label>Institution Email*</label>
                    <input type="text" className="form-control" placeholder='Institution Email' required/>
                  </div>
                </div>
                </div>
                   
                      <div className="row">
                <div className="col-md-4 pr-1">
                  <div className="form-group">
                    <label>country*</label>
                    <input type="text" className="form-control" placeholder='country' required/>
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="form-group">
                    <label>city*</label>
                    <input type="text" className="form-control" placeholder='city' required/>
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="form-group">
                    <label>Postal Code*</label>
                    <input type="text" className="form-control" placeholder='Postal Code'required maxLength={6} minLength={6}/>
                  </div>
                </div>
              </div>
              <div className='col-md-10 pl-1'>
                  <div className="form-group">
                    <label>Address*</label>
                    <input type="text" className="form-control" placeholder='Address' required />
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