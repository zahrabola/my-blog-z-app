import React from "react";
import image from "../../Constant/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlus} from "react-icons/fa";
import "./write.css";
const Writing = () => {

    return (
      <Container>
        <div className="singlepost">
          <img src={image.single1} className="Wimg  img-fluid" />
        </div>

        <Row className="justify-content-md-center">
          {" "}
          <Col sx={4}>
            <form className="writeform">
              <div className="WFGroup">
                <input id="fileInput" type="file" style={{ display: "none" }} />

                <input
                  className="writeinput"
                  placeholder="Title"
                  type="text"
                  autoFocus={true}
                />
              </div>
              <i className="iconlink WriteIcon" href="#icon3">
                <FaPlus />
              </i>
            </form>
          </Col>
          <Col sx={4}>
            <div className="WFGroup">
              <textarea
                className="writeinput writeText"
                placeholder="Tell your story..."
                type="text"
                autoFocus={true}
                maxlength="100"
              />
            </div>
            <button className="WSubmit" type="submit">
              Publish
            </button>
          </Col>
        </Row>
      </Container>
    );
}


export default Writing;