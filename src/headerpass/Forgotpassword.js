import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Forgotpassword = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <Card style={{ width: "18rem", margin:'auto',marginTop:10 }}>
              <Card.Body>
                <Card.Title>Reset Your Password</Card.Title>
                <Card.Text>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control type="email" placeholder="Enter user name" />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                      Send reset email
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

export default Forgotpassword;
