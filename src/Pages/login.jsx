import React from 'react';

const LoginPage = () => {
  return (
    <div className="wrapper wrapper-full-page">
      <div className="full-page section-image" filter-color="black" data-image="./LoginBG.png">
        <div className="content">
          <div style={{
            background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0px 4.75822114944458px 297.3888244628906px 0px rgba(0, 0, 0, 0.80)',
            fontFamily: 'Mulish',
            fontSize: '57.099px',
            fontStyle: 'normal',
            fontWeight: 700,
            marginLeft: '15%',
            float: 'left',
            marginTop: '9%',
            lineHeight: 'normal',
            letterSpacing: '5.71px',
            textTransform: 'uppercase',
            width: '500px',
            height: '158.08px',
            color: 'white',
          }}>
            Conference Web-portal
          </div>
          <div className="container">
            <div className="col-lg-4 col-md-6 ml-auto mr-auto">
              <form className="form" method="" action="">
                <div className="card card-login">
                  <div className="card-header ">
                    <div className="card-header ">
                      <h3 className="header text-center">Login</h3>
                    </div>
                  </div>
                  <div className="card-body ">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="nc-icon nc-single-02"></i>
                        </span>
                      </div>
                      <input type="text" className="form-control" placeholder="First Name..." />
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="nc-icon nc-key-25"></i>
                        </span>
                      </div>
                      <input type="password" placeholder="Password" className="form-control" />
                    </div>
                    <br />
                    <div className="form-group">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" value="" checked="" />
                          <span className="form-check-sign"></span>
                          Subscribe to newsletter
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer ">
                    <a href="javascript:;" className="btn btn-warning btn-round btn-block mb-3" style={{ backgroundColor: '#51BCDA' }}>Get Started</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
