import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../../Components/sidebar/Sidebar";

const Single = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
       single post
        </Col>

        <Col md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Single;
