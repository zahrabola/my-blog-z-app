import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../../Constant/image";
import Post from "../colpost/Post"
import "./posts.css";
const Posts = () => {
  return (
    <div className="Posts">
      <Container>
        <Row>
          <Col>
            <img
              src={image.style1}
              className="styleimg row1 img-fluid"
              alt="style1"
            />
            <span className="postCat">Classical Archirecture </span>
            <Post />
          </Col>

          <Col>
            <img
              src={image.style2}
              className="styleimg row1 img-fluid"
              alt="style2"
            />
            <span className="postCat">Gothic Archirecture </span>
            <Post />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={image.style5}
              className="styleimg  row2 img-fluid"
              alt="style3"
            />
            <span className="postCat">Victorian Archirecture </span>
            <Post />
          </Col>

          <Col>
            <img
              src={image.style4}
              className="styleimg row2  img-fluid"
              alt="style4"
            />
            <span className="postCat">Baroque Archirecture </span>
            <Post />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={image.style3}
              className="styleimg row3 img-fluid"
              alt="style5"
            />
            <span className="postCat">Neoclassical Archirecture </span>
            <Post />
          </Col>

          <Col>
            <img
              src={image.style6}
              className="styleimg row3 img-fluid"
              alt="style6"
            />
            <span className="postCat">Modern Archirecture </span>
            <Post />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={image.style7}
              className="styleimg row4 img-fluid"
              alt="style7"
            />
            <span className="postCat">Neofuturist Archirecture </span>
            <Post />
          </Col>

          <Col>
            <img
              src={image.style8}
              className="styleimg row4 img-fluid"
              alt="style8"
            />
            <span className="postCat">Post-Modern Archirecture </span>
            <Post />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Posts;
