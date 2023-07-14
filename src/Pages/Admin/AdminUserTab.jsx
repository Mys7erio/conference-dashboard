import React from 'react';
import '../Admin/AdminUser.css';
const AdminUser = () => {
  return (
    <div >
       <div className="content">
      <div className="row">
        <div className="col-md-11">
          <div className="card">
            <div className="card-header">
              <div className="card-title-container">
                <h5 className="card-title">Users</h5>
                <span className="right-btn">
                  <button className="btn-add">+ New</button>
                </span>
              </div>
            </div>
            
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead className="text-primary">
                    <th className="text-center">
                      #
                    </th>
                   
                    <th>
                      User Id
                    </th>
                    <th className="text-center">
                      Name
                    </th>
                    <th className="text-center">
                      Assign Role
                    </th>
                    <th className="text-center">
                      Assign Status
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        1
                      </td>
                      
                      <td className="text-center">
                        12100
                      </td>
                      <td className="text-center">
                        Mike
                      </td>
                      <td className="text-center">
                        <div className="dropdown">
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Editor</a>
                            <a className="dropdown-item" href="#">Coordinator</a>
                            <a className="dropdown-item" href="#">Associated Coordinator</a>
                            <a className="dropdown-item" href="#">Reviewer</a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <button className="btn btn-success">Yes</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        2
                      </td>
                     
                      <td className="text-center">
                        12100
                      </td>
                      <td className="text-center">
                        Mike
                      </td>
                      <td className="text-center">
                        <div className="dropdown">
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Editor</a>
                            <a className="dropdown-item" href="#">Coordinator</a>
                            <a className="dropdown-item" href="#">Associated Coordinator</a>
                            <a className="dropdown-item" href="#">Reviewer</a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <button className="btn btn-success">Yes</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        3
                      </td>
                       
                      <td className="text-center">
                        12100
                      </td>
                      <td className="text-center">
                        Mike
                      </td>
                      <td className="text-center">
                        <div className="dropdown">
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Editor</a>
                            <a className="dropdown-item" href="#">Coordinator</a>
                            <a className="dropdown-item" href="#">Associated Coordinator</a>
                            <a className="dropdown-item" href="#">Reviewer</a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <button className="btn btn-danger">Yes</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        4
                      </td>
                       
                      <td className="text-center">
                        12100
                      </td>
                      <td className="text-center">
                        Mike
                      </td>
                      <td className="text-center">
                        <div className="dropdown">
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Editor</a>
                            <a className="dropdown-item" href="#">Coordinator</a>
                            <a className="dropdown-item" href="#">Associated Coordinator</a>
                            <a className="dropdown-item" href="#">Reviewer</a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <button className="btn btn-success">Yes</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        5
                      </td>
                       
                      <td className="text-center">
                        12100
                      </td>
                      <td className="text-center">
                        Mike
                      </td>
                      <td className="text-center">
                        <div className="dropdown">
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Editor</a>
                            <a className="dropdown-item" href="#">Coordinator</a>
                            <a className="dropdown-item" href="#">Associated Coordinator</a>
                            <a className="dropdown-item" href="#">Reviewer</a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <button className="btn btn-danger">Yes</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        6
                      </td>
                       
                      <td className="text-center">
                        12100
                      </td>
                      <td className="text-center">
                        Mike
                      </td>
                      <td className="text-center">
                        <div className="dropdown">
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Editor</a>
                            <a className="dropdown-item" href="#">Coordinator</a>
                            <a className="dropdown-item" href="#">Associated Coordinator</a>
                            <a className="dropdown-item" href="#">Reviewer</a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <button className="btn btn-success">Yes</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        7
                      </td>
                       
                      <td className="text-center">
                        12100
                      </td>
                      <td className="text-center">
                        Mike
                      </td>
                      <td className="text-center">
                        <div className="dropdown">
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Editor</a>
                            <a className="dropdown-item" href="#">Coordinator</a>
                            <a className="dropdown-item" href="#">Associated Coordinator</a>
                            <a className="dropdown-item" href="#">Reviewer</a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <button className="btn btn-danger">Yes</button>
                      </td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
        <nav>
            <ul className="pagination ">
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#link">2</a></li>
              <li className="page-item"><a className="page-link" href="#link">3</a></li>
              <li className="page-item"><a className="page-link" href="#link">4</a></li>
              <li className="page-item"><a className="page-link" href="#link">5</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminUser;