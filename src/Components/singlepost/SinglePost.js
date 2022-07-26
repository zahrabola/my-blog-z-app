import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const singlePost = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="singlepost">img</div>
        </Col>
      </Row>
    </Container>
  );
};

export default singlePost;
