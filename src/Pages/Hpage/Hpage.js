import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Hpage = () => {
  return (
    <Container>
      <Row>
        <Col >header</Col>

        <Col >
          <section className="slider">
            Posts, side bar
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Hpage;
