import React from 'react';
import '../Pages/CreateAdmin.css'
const CreateAdmin = () => {
  return (
    <div className='CreateAdmin-container'>
         <div className="admin-form">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h5 className="title">Enter Admin Details</h5>
          </div>
          <div className="card-body">
            <form>
            <div className="row">
                <div className="col-md-4 pr-1">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="Sara" defaultValue="Sara" />
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="form-group">
                    <label>Middle Name</label>
                    <input type="text" className="form-control" placeholder="Alan" defaultValue="Alan" />
                  </div>
                </div>
                <div className="col-md-4 pl-1">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Walker" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pr-1">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="sara@gmail.com" defaultValue="sara@gmail.com" />
                  </div>
                </div>
                <div className="col-md-6 pl-1">
                  <div className="form-group">
                    <label>Phone number</label>
                    <input type="number" className="form-control" placeholder="9100000002" defaultValue="8210000000" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Home Address" defaultValue="Melbourne, Australia" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 pr-1">
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="City" defaultValue="Melbourne" />
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="form-group">
                    <label>Country</label>
                    <input type="text" className="form-control" placeholder="Country" defaultValue="Australia" />
                  </div>
                </div>
                <div className="col-md-4 pl-1">
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input type="number" className="form-control" placeholder="ZIP Code" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 pr-1">
                  <div className="form-group ">
                    <label >Choose Role</label>
                    <div className="dropdown">
                      <button className="dropdown-toggle form-control btn-primary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Institution
                      </button>
                      { <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Institution 1</a>
                        <a className="dropdown-item" href="#">Institution 2</a>
                        <a className="dropdown-item" href="#">Institution 3</a>
                        <a className="dropdown-item" href="#">Institution 4</a>
                      </div> }
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 pr-1">
                  <div className="form-group">
                    <label>Department</label>
                    <input type="text" className="form-control" placeholder="Department" defaultValue="Computer Science" />
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
  );
};

export default CreateAdmin;