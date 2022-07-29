import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
const Register = () =>{


    return (
      <Container>
        <Row>
          <Col md={8}>
            <div className="register">
              <div className="SetReg">Update Your Account</div>
              <form className="RegrForm">
                <label>Username</label>
                <input
                  className="registerInput"
                  type="text"
                  placeholder="Enter your username..."
                />
                <label>Email</label>
                <input
                  className="registerInput"
                  type="text"
                  placeholder="Enter your email..."
                />
                <label>Password</label>
                <input
                  className="registerInput"
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