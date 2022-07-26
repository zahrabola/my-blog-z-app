import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../../Constant/image";
import SinglePost from "../singlepost/SinglePost"

const Posts = () => {
  return (
    <Container>
      <Row>
        <Col>
          <SinglePost img={image.style1} className="styleimg img-fluid" />
        </Col>

        <Col>
          {" "}
          <SinglePost img={image.style2} className="styleimg img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <SinglePost img={image.style3} className="styleimg img-fluid" />
        </Col>

        <Col>
          {" "}
          <SinglePost img={image.style4} className="styleimg img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <SinglePost img={image.style5} className="styleimg img-fluid" />
        </Col>

        <Col>
          {" "}
          <SinglePost img={image.style6} className="styleimg img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <SinglePost img={image.style7} className="styleimg img-fluid" />
        </Col>

        <Col>
          {" "}
          <SinglePost img={image.style8} className="styleimg img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Posts;
