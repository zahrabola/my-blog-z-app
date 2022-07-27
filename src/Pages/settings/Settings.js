import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./setting.css"

const Setting = () => {
    return (
      <Container>
        <Row>
          <Col md={8}>
         
          </Col>
          <Col md={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    );
}



export default Setting;
