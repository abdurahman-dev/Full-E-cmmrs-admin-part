import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavMenu from "../SharedComponents/Navbar/NavMenu";

const LeyOut = (props) => {
  return (
    <>
      <NavMenu />
      {props.sidebar ? (
        <Container fluid style={{marginTop:'55px'}}>
          <Row>auto
            <Col
              md={2}
              className="text-white bg-dark"
              style={{ height: "100%", position: "fixed" }}
            >
              <Nav className="flex-column">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/products">
                  Product
                </Nav.Link>
                <Nav.Link as={Link} to="/orders">
                  Orders
                </Nav.Link>
                <Nav.Link as={Link} to="/category">
                 Category
                </Nav.Link>
              </Nav>
            </Col>
            <Col md={10} className="" style={{ marginLeft: "auto" }}>
              {props.children}
            </Col>
          </Row>
        </Container>
      ) : (
        props.children
      )}
    </>
  );
};

export default LeyOut;
