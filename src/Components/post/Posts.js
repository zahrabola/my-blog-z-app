import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../../Constant/image";
import Post from "../colpost/Post"
import "./posts.css";
const Posts = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img src={image.style1} className="styleimg row1 img-fluid" />
          <span className="postCat">Classical Archirecture </span>
          <Post />
        </Col>

        <Col>
          <img src={image.style2} className="styleimg row1 img-fluid" />
          <span className="postCat">Gothic Archirecture </span>
          <Post />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={image.style5} className="styleimg  row2 img-fluid" />
          <span className="postCat">Victorian Archirecture </span>
          <Post />
        </Col>

        <Col>
          <img src={image.style4} className="styleimg row2  img-fluid" />
          <span className="postCat">Baroque Archirecture </span>
          <Post />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={image.style3} className="styleimg row3 img-fluid" />
          <span className="postCat">Neoclassical Archirecture </span>
          <Post />
        </Col>

        <Col>
          <img src={image.style6} className="styleimg row3 img-fluid" />
          <span className="postCat">Modern Archirecture </span>
          <Post />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={image.style7} className="styleimg row4 img-fluid" />
          <span className="postCat">Neofuturist Archirecture </span>
          <Post />
        </Col>

        <Col>
          <img src={image.style8} className="styleimg row4 img-fluid" />
          <span className="postCat">Post-Modern Archirecture </span>
          <Post />
        </Col>
      </Row>
    </Container>
  );
};

export default Posts;
