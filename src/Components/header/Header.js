import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../../Constant/image";
import "./Header.css";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Header = () => {
    const scrollRef = React.useRef(null);
    const scroll = (direction) => {
      const { current } = scrollRef;

      if (direction === "left") {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    };


  return (
    <Container>
      <Row>
        <Col md={6}>
       
          <div className="intro">
            <h1 className="name"> Zahra Olanrewaju</h1>

            <h1 className="blogpage"> Blog </h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </Col>

        <Col md={6}>
          <section className="arrow">
            <FaArrowAltCircleLeft
              className="left-arrow"
              onClick={() => scroll("left")}
            />
            <FaArrowCircleRight
              className="right-arrow"
              onClick={() => scroll("right")}
            />
          </section>

          <section className="slider">
            <div className="sliderimg-container" ref={scrollRef}>
              {[
                image.slide1,
                image.slide2,
                image.slide3,
                image.slide4,
                image.slide5,
                image.slide6,
              ].map((slide, index) => {
                return (
                  <div
                    className="sliderimg-card flex__center"
                    key={`sliderimage-${index + 1}`}
                  >
                    <img src={slide} alt="arch-img" className="image" />
                  </div>
                );
              })}
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
