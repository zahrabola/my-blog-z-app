import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import image from "../../Constant/image";
import "./sidebar.css";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
///import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Container>
      <Row>
        <div className="Sidebar">
          <div className="SBItem">
            <div className="SBTitle">About Me:</div>
            <p className="name2"> Zahra Olanrewaju</p>
            <img
              src={image.woman}
              className="womanimg img-fluid"
              alt="woman"
            />
            <div className="SBText">
              <p>
                Laboris sunt aute cupidatat velit magna <br /> velit ullamco
                dolore mollit amet ex esse.Sunt eu ut nostrud id quis proident.
              </p>
            </div>
          </div>
          <div className="SBItem">
            <div className="SBTitle">Categories </div>
            <p className="name2"> Architecture Styles</p>
            <ul className="SBlist">
              <li className="SBListItem">Classical</li>
              <li className="SBListItem">Gothic</li>
              <li className="SBListItem">Victorian </li>
              <li className="SBListItem">Baroque </li>
              <li className="SBListItem">Neoclassical </li>
              <li className="SBListItem">Modern</li>
              <li className="SBListItem">Neofuturist</li>
              <li className="SBListItem">Post-Modern </li>
            </ul>
          </div>

          <div className="SBItem">
            <div className="SBTitle">Follow Us</div>
            <div className="SBsicon">
              <i className="iconlink" href="#icon1">
                <FaInstagram />
              </i>
              <i className="iconlink" href="#icon1">
                <FaTwitter />
              </i>
              <i className="iconlink" href="#icon1">
                <FaYoutube />
              </i>
              <i className="iconlink" href="#icon1">
                <FaTiktok />
              </i>
              <i className="iconlink" href="#icon1">
                <FaPinterest />
              </i>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Sidebar;
