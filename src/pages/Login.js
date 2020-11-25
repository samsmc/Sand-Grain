import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (

    <div className="box-content-login">
    <br></br>
      <div className="box-login" style={{ backgroundImage:"./images/background.png"}}>
        <div className="tab-form js-tab-form active" id="tab-login-form">
          <div className="form">
            <div className="box-section">
              <div className="header">
                <div className="box-left">
                  <h3><strong>Sign in to continue</strong></h3>
                </div>
                <div className="box-right">
                  <h3>Not a member yet? <a href="/signup"><strong className="text-green cursor-pointer js-tab js-register" data-tab="tab-register">Register now</strong></a></h3>
                </div>
              </div>


              <form onSubmit={this.handleFormSubmit}>
                <div className="box-form-fields">
                  <ul>
                    <li>
                      <div className="row right">
                        <div className="form-group">
                          <label className="tip-form">
                            <input className="text-input" placeholder="Email" type="text"
                              name="email"
                              value={email}
                              onChange={this.handleChange} /></label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row right">
                        <div className="form-group">
                          <label className="tip-form">
                            <input className="text-input" placeholder="Password"
                              type="password"
                              name="password"
                              value={password}
                              onChange={this.handleChange} /></label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="check">
                        <div className="form-group">
                          <div className="input-check">
                            <input id="remember_me" name="_remember_me" type="checkbox" /> <label htmlFor="remember_me">Keep me logged in</label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <p>
                <input type="hidden" name="_csrf_token" defaultValue="TpWnqZ0pSFJVfGyyQ-jsX3vGykB8CDn2-onSS3-p15g" />
                  <button className="button width-full js-bt-loading text-uppercase"
                    type="submit"
                    value='Login' >
                    <span className="bt-content">Login now</span></button>
                </p>
                <p align="center">
                  <strong><a className="link-underlined green js-forgot-password" href="/forgot-password">Forgot your password</a></strong>
                </p>
                <input type="hidden" name="_target_path" defaultValue="https://www.awwwards.com/" />
              </form>


            </div>
            <div className="box-section">
              <div className="header">
                <h3><strong>Or sign in with</strong></h3>
              </div>
              <div className="bts">
                <a href="/login/google" className="bt-connect google">
                  <svg viewBox="0 0 400 400" className="ico-svg">
                    <path d="M142.9 24.2C97.6 39.7 59 73.6 37.5 116.5 30 131.3 24.6 147 21.3 163.3c-8.2 40.4-2.5 83.5 16.1 120.3 12.1 24 29.5 45.4 50.5 62.1 19.9 15.8 43 27.6 67.6 34.1 31 8.3 64 8.1 95.2 1 28.2-6.5 54.9-20 76.2-39.6 22.5-20.7 38.6-47.9 47.1-77.2 9.3-31.9 10.5-66 4.7-98.8h-175v72.6h101.4c-3.9 23.2-17.7 44.4-37.2 57.5-12.3 8.3-26.4 13.6-41 16.2-14.6 2.5-29.8 2.8-44.4-.1-14.9-3-29-9.2-41.4-17.9-19.8-13.9-34.9-34.2-42.6-57.1-7.9-23.3-8-49.2 0-72.4 5.6-16.4 14.8-31.5 27-43.9 15-15.4 34.5-26.4 55.6-30.9 18-3.8 37-3.1 54.6 2.2 15 4.5 28.8 12.8 40.1 23.6L310 80.8c6-6.1 12.3-12 18.1-18.3-17.3-16-37.7-28.9-59.9-37.1-40-14.8-85-15.1-125.3-1.2z" fill="#FFF" /><path d="M142.9 24.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z" fill="#EA4335" /><path d="M21.4 163.2c3.3-16.2 8.7-32 16.2-46.8 20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3-18.8-36.7-24.5-79.8-16.3-120.2z" fill="#FBBC05" /><path d="M203.7 165.1h175c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H203.6c.1-24.2.1-48.4.1-72.6z" fill="#4285F4" /><path d="M37.5 283.5c20.3-15.7 40.6-31.5 60.9-47.3 7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62z" fill="#34A853" />
                  </svg>
                  <span>Google</span>
                </a>
                <a href="/login/twitter" className="bt-connect twitter">
                  <svg className="ico-svg" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg"><use xlinkHref="/assets/images/sprite-icons.svg#twitter" xmlnsXlink="http://www.w3.org/1999/xlink" /></svg>
                  <span>Twitter</span>
                </a>
                <a href="/login/facebook" className="bt-connect facebook">
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="box-msg hidden">
          <div className="box-loading style3 open"><div className="spinner" /></div>
        </div>
      </div>
    </div>
    )
  }
}

export default withAuth(Login);
