import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="/">Wholesome Harvest</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "230px" }}>
            <Nav.Link href="/markets">Markets</Nav.Link>
            <Nav.Link href="/vendors">Vendors</Nav.Link>
            <Nav.Link href="/items">Items</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link>
            <Nav.Link href="/orders/new">Cart</Nav.Link>
            <Nav.Link href="" onClick={handleLogOut}>
              Log Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
