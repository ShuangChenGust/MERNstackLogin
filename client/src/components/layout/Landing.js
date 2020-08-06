import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from "../../../src/login.png";
// import css from "../../../src/App.css";

var sectionStyle = {
  width: "70%",
  height: "550px",
// makesure here is String确保这里是一个字符串，以下是es6写法
  backgroundImage: `url(${Background})` 
};

class Landing extends Component {
  render() {
    return (
  
      <div style={{ height: "90vh" }} className="container valign-wrapper">
        <div className="row" style = {sectionStyle}>
          <div className="col s12 center-align">
            <h4>
              <b>MERN</b> Stack {" "}
              <span style={{ fontFamily: "monospace" }}>Login</span> App
            </h4>
            <p className="flow-text grey-text text-darken-1">
              a <b> MERN</b> stack app with user authentication via
              passport and JWTs
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable orange accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect green black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;