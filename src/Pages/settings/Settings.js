import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import image from "../../Constant/image";
import Col from "react-bootstrap/Col";
import { FaSmile } from "react-icons/fa";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./setting.css"

const Setting = () => {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <div className="setting">
              <div className="settingitem">
                <div className="SetTitle">Update Your Account</div>
                <div className="SetTitleD">Delete Account</div>
              </div>

              <form className="SetForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                  <img src={image.woman} className="womanimg img-fluid" />
                </div>
                <label htmlFor="file-nput">
                  <i className="iconlink" href="#icon1">
                    <FaSmile className="smile" />
                  </i>
                </label>

                <input
                  id="fileInput"
                  type="file"
                  style={{ display: "none" }}
                  className="settingsPPInput"
                />
                <label>Username</label>
                <input type="text" placeholder="Zahra123" name="name" />
                <label>Email</label>
                <input
                  type="email"
                  placeholder="zahra@gmail.com"
                  name="email"
                />
                <label>Password</label>
                <input type="password" placeholder="Password" name="password" />
                <button className="WSubmit" type="submit">
                  Update
                </button>
              </form>
            </div>
          </Col>
          <Col md={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    );
}



export default Setting;
