import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../../Constant/image";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Header = ({ }) => {
 // const [currentImg, setCurrentImg] = useState(0);
  //const length = slides.length;

  //const nextSlide = () => {
   //setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  //};

  //const prevSlide = () => {
    //setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
 // };

  //if (!Array.isArray(slides) || slides.length <= 0) {
    //return null;
 // }
  return (
    <Container>
      <Row>
        <Col md={6}>1 of 3</Col>

        <Col md={6}>
          <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow"  />
            <FaArrowCircleRight className="right-arrow" />
            {[
              image.slide1,
              image.slide2,
              image.slide3,
              image.slide4,
              image.slide5,
              image.slide6,
            ].map((slide, index) => {
           
            return <img src={slide} alt="travel image" className="image" />
                 
              
            })}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
