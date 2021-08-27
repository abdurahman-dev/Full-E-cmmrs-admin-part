import React from "react";
import { useState } from "react";
import { Col, Button, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import NavMenu from "../../Components/SharedComponents/Navbar/NavMenu";
import Layout from "../../Components/Layout/index";
import Input from "../../Components/UI/Input/index";
import { signup } from "../../Redux/Actions";

const SignUP = () => {
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const dispatch=useDispatch()
  const user=useSelector(state=>state.userReducer)
  const auth=useSelector((state)=> state.authReducer)

const handleSubmit=(e)=>{
e.preventDefault();
const userInfo={
  firstName,lastName,email,password
}
 dispatch(signup(userInfo))
}


if(user.loading){
  return <p>loading</p>
}
  if (auth.authenticated) {
    return <Redirect to={"/"} />;
  }
  return (
    <>
      <Layout>
        <Container>
          <h1 className="text-center py-5">This is Sign Up pages</h1>
          {
            user.message
          }
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Input
                      Label="First Name"
                      type="text"
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    ></Input>
                  </Col>
                  <Col md={6}>
                    <Input
                      Label="Last Name"
                      type="text"
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    ></Input>
                  </Col>
                </Row>
                <Input
                  Label="Email address"
                  type="email"
                  placeholder="Enter email"
                  onChange={(e)=> setEmail(e.target.value)}
                  errorMessage=" We'll never share your email with anyone else."
                ></Input>
                <Input
                  Label="Password"
                  type="password"
                  placeholder="Password"
                  onChange={(e)=> setPassword(e.target.value)}
                ></Input>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default SignUP;
