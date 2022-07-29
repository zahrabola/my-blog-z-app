import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSmile } from "react-icons/fa";
import { Link } from "react-router-dom";
//import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaPinterest} from "react-icons/fa";
import "./navbar.css"
function navbar() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          bg="orange"
          expand={expand}
          className="mb-3 bg-colour-nav"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <ul>
                <li className="iconlink">
                  <Nav.Link href="#icon1">
                    <FaInstagram />
                  </Nav.Link>
                </li>
                <li className="iconlink">
                  <Nav.Link href="#icon1">
                    {" "}
                    <FaTwitter />
                  </Nav.Link>
                </li>
                <li className="iconlink">
                  <Nav.Link href="#icon1">
                    {" "}
                    <FaYoutube />
                  </Nav.Link>
                </li>
                <li className="iconlink">
                  <Nav.Link href="#icon1">
                    {" "}
                    <FaTiktok />
                  </Nav.Link>
                </li>
                <li className="iconlink">
                  <Nav.Link href="#icon1">
                    {" "}
                    <FaPinterest />
                  </Nav.Link>
                </li>
              </ul>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="bg-colour-nav">
                <Offcanvas.Title
                  className="title-nav  "
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Zahra Olanrewaju
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="bg-colour-nav">
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link href="#action1">
                    <Link className="link" to="/">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <Link className="link" to="/">
                      About
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#action3">
                    <Link className="link" to="/">
                      Contact
                    </Link>{" "}
                  </Nav.Link>
                  <Nav.Link href="#action4">
                    <Link className="link" to="/write">
                      Write
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#action5">
                    <Link className="link" to="/login">
                      Login
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#action5">
                    <Link className="link" to="/register">
                      Register
                    </Link>
                  </Nav.Link>

                  <Nav.Link href="#action6 ">
                    <Link className="link" to="/setting">
                      <FaSmile className="smile" />
                    </Link>
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button className="search-colour" variant="light">
                    Search
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default navbar;
