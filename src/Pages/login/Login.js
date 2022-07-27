import React from "react";
import "./login.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Writing = () => {
return (
  <Container>
    <Row>
      <div className="login">
        <div className="loginT">Update Your Account</div>
        <form className="loginform">
          <label>Email</label>
          <inputi
            className="loginnput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="logininput"
            type="password"
            placeholder="Enter your password..."
          />
          <button className="LBtn">Login</button>
        </form>
        <button className="WSubmit BtnR" type="submit">
          Register
        </button>
      </div>
    </Row>
  </Container>
);




}






export default Login;
