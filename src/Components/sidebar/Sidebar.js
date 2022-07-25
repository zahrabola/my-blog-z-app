import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import image from "../../Constant/image";

const Sidebar = () => {
  return (
    <Container>
      <Row>
        <div className="Sidebar">
          <div className="SBItem">
            <span className="SBTitle">
              About Me: <br /> Zahra Olanrewaju
            </span>
            <img src={image.woman} alt="chefimg" />
          </div>
        </div>
        bola
      </Row>
      <Row>zahra</Row>
    </Container>
  );
};

export default Sidebar;
