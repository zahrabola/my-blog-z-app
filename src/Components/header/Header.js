import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
 FaArrowAltCircleLeft, FaArrowCircleRight
} from "react-icons/fa";

const Header = ({}) => {
    return (
      <Container>
        <Row>
          <Col md={6}>1 of 3</Col>

          <Col md={6}>
            <section className="slider">
              <FaArrowAltCircleLeft className="left-arrow" />
              <FaArrowCircleRight className="right-arrow" />
            </section>
          </Col>
        </Row>
      </Container>
    );
}

export default Header;
