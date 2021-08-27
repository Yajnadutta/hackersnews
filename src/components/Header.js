import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <div>
      <Container>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#f37e20" }}>
        <LinkContainer to="/">
          <Navbar.Brand>Hacker News</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/new">
              <Nav.Link>new</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/past">
              <Nav.Link>past</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/comments">
              <Nav.Link>comments</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/ask">
              <Nav.Link>ask</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/show">
              <Nav.Link>show</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/jobs">
              <Nav.Link>jobs</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/submit">
              <Nav.Link>submit</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/login" style={{marginRight:150}}>
              <Nav.Link>login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    </div>
      
  );
};

export default Header;
