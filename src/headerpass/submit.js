import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
const submit = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <Card style={{ width: "18rem", marginTop: 10 }}>
              <Card.Body>
                <Card.Title>Login</Card.Title>
                <Card.Text>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Link to="/forgot">
                    Forgot your Password? <br />
                    </Link>
                    <Button variant="primary" type="submit" className="mt-3">
                      Login
                    </Button>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm-6">
            <Card style={{ width: "18rem", marginTop: 10, height: 310 }}>
              <Card.Body>
                <Card.Title>Create Account</Card.Title>
                <Card.Text>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Create Account
                    </Button>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default submit;
