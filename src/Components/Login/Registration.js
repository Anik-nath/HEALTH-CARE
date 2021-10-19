import React from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Registration = () => {
  const {handleEmail,handlePassword,handleRegistration} = useAuth();
    return (
        <div className="registration">
      <div style={{width:"400px"}}>
      <Form onSubmit={handleRegistration}  className="bg-white p-4 shadow rounded">
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
        <Button className="btn btn-info text-white OurBtn" variant="primary" type="submit">
          Register/Sign up
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