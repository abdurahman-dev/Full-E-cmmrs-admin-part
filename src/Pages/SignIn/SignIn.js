import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import NavMenu from "../../Components/SharedComponents/Navbar/NavMenu";
import Layout from "../../Components/Layout/index";
import Input from "../../Components/UI/Input/index";
import { logIn } from "../../Redux/Actions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error,setError]=useState('')
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(logIn(user));
  };
  if (auth.authenticated) {
    return <Redirect to={"/"} />;
  }
 
  return (
    <Layout>
      <Container>
        <h1 className="text-center py-5">This is sign In page</h1>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit}>
              <Input
                Label="Email address"
                type="email"
                value={email}
                placeholder="Enter email"
                errorMessage=" We'll never share your email with anyone else."
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              <Input
                Label="Password"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SignIn;
