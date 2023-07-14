import React from 'react';

const RegisterPage = () => {
  return (
    <div className="wrapper wrapper-full-page">
      <div className="full-page register-page section-image" filter-color="black" data-image="../../assets/img/bg/jan-sendereks.jpg">
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
            <div className="row">
              <div className="col-lg-4 col-md-6 mr-auto">
                <div style={{
                  width: '350px',
                }} className="card card-signup text-center">
                  <div className="card-header ">
                    <h4 className="card-title">Register</h4>
                    <div className="social">
                      <button className="btn btn-icon btn-round btn-twitter">
                        <i className="fa fa-twitter"></i>
                      </button>
                      <button className="btn btn-icon btn-round btn-dribbble">
                        <i className="fa fa-dribbble"></i>
                      </button>
                      <button className="btn btn-icon btn-round btn-facebook">
                        <i className="fa fa-facebook-f"></i>
                      </button>
                      <p className="card-description"> or be classical </p>
                    </div>
                  </div>
                  <div className="card-body ">
                    <form className="form" method="" action="">
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
                            <i className="nc-icon nc-circle-10"></i>
                          </span>
                        </div>
                        <input type="text" placeholder="Last Name..." className="form-control" />
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="nc-icon nc-email-85"></i>
                          </span>
                        </div>
                        <input type="email" className="form-control" placeholder="Email..." />
                      </div>
                      <div className="form-check text-left">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" checked />
                          <span className="form-check-sign"></span>
                          I agree to the <a href="#something">terms and conditions</a>.
                        </label>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer ">
                    <a href="javascript:;" className="btn btn-info btn-round">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
