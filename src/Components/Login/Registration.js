import React from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Registration = () => {
  const {handleSignin,handleEmail,handlePassword,handleRegistration} = useAuth();

    return (
      <div className="registration w-50 mx-auto">
      <div className="my-5">
      <Form onSubmit={handleRegistration}  className="bg-white p-4 shadow rounded w-100">
          <h3>Create an account</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePassword}  type="password" placeholder="Password" required/>
        </Form.Group>
        <Button onClick={handleSignin} className="btn btn-info text-white OurBtn" variant="primary" type="submit">
          Sign up
        </Button>
        <br /><hr />
        Already have an account?
        <Link to="/login"> Just Login</Link>
      </Form>
      </div>
    </div>
    );
};

export default Registration;