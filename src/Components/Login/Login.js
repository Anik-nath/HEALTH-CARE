import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Login = () => {
  const {signInUsingGoogle} = useAuth();
  return (
    <div className="registration">
      <div style={{width:"400px"}}>
      <Form  className="bg-white p-4 shadow rounded">
          <h3>Please Log in</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control  type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="btn btn-info text-white OurBtn" variant="primary" type="submit">
          Login
        </Button>
        <span> or </span>
        <Button onClick={signInUsingGoogle} className="btn btn-info text-white OurBtn" variant="primary">
          Google Sign in
        </Button>
        <br /><br /><hr />
        New To Here?
        <Link to="/registration"> Register Please</Link>
      </Form>
      </div>
    </div>
  );
};

export default Login;
