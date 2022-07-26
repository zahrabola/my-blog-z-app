import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Posts from "../../Components/post/Posts";
import Sidebar from "../../Components/sidebar/Sidebar";
import Header from "../../Components/header/Header";



const Hpage = () => {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col md={8}>
          <Posts />
        </Col>

        <Col md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Hpage;
