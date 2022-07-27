import React from "react";
import "./login.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = () => {
return (
  <Container>
    <Row>
      <Col >
        <div className="login">
          <div className="loginT">Update Your Account</div>
          <form className="loginform">
            <label>Email:</label>
            <input
              className="logininput"
              type="text"
              placeholder="Enter your email..."
            />
            <label>Password:</label>
            <input
              className="logininput"
              type="password"
              placeholder="Enter your password..."
            />
            <button className="LBtn WSubmit">Login</button>
          </form>
          <button className="WSubmit RBtn" type="submit">
            Register
          </button>
        </div>
      </Col>
    </Row>
  </Container>
);




}






export default Login;
