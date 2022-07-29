import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import "./register.css";
const Register = () =>{


    return (
      <Container>
        <Row>
          <Col >
            <div className="register">
              <div className="RReg">Update Your Account</div>
              <form className="RegForm">
                <label>Username</label>
                <input
                  className="registerinput"
                  type="text"
                  placeholder="Enter your username..."
                />
                <label>Email</label>
                <input
                  className="registerinput"
                  type="text"
                  placeholder="Enter your email..."
                />
                <label>Password</label>
                <input
                  className="registerinput"
                  type="password"
                  placeholder="Enter your password..."
                />{" "}
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

export default Register;