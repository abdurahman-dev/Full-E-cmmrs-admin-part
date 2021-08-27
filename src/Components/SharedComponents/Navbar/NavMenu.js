import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { singout } from "../../../Redux/Actions/auth.action";

const NavMenu = () => {
  const auth = useSelector((state) => state.authReducer);
  const dispatch=useDispatch()

  const logout = () =>{
    dispatch(singout())
  }

  const loggedUser = () => {
    return (
      <Nav>
        <Nav.Link as={Link} to="" onClick={logout}>
          Log Out
        </Nav.Link>
      </Nav>
    );
  };
  const nonLoggedUser = () => {
    return (
      <Nav>
        <Nav.Link as={Link} to="/signUp">
          Sign Up
        </Nav.Link>
        <Nav.Link as={Link} to="/signIn">
          Sign In
        </Nav.Link>
      </Nav>
    );
  };

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            BD BAZAR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
        {
          auth.authenticated ?  loggedUser(): nonLoggedUser()
        }
      </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavMenu;
