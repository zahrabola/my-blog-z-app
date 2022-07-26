import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
                  className="title-nav"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Zahra Olanrewaju
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="#action3">Contact</Nav.Link>
                  <Nav.Link href="#action4">Write</Nav.Link>
                  <Nav.Link href="#action5">Register</Nav.Link>
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
