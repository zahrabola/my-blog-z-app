import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Post from "../../Components/post/Post";
import Sidebar from "../../Components/sidebar/Sidebar";


const Hpage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={9}>
          Posts
          <Post />
        </Col>

        <Col xs={6} md={3}>
        <Sidebar/>
        </Col>
      </Row>
    </Container>
  );
};

export default Hpage;
