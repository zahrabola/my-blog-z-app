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
        <Col  md={8}>
          Posts
          <Post />
        </Col>

        <Col  md={4}>
        <Sidebar/>
        </Col>
      </Row>
    </Container>
  );
};

export default Hpage;
