import React from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

const Login = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="border p-4 rounded shadow-sm text-center" style={{ width: "350px" }}>
        <h3 className="mb-3">Log in to Upwork</h3>

        {/* Username Input */}
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FaUser />
          </InputGroup.Text>
          <Form.Control type="text" placeholder="Username or Email" />
        </InputGroup>

        {/* Continue Button */}
        <Button variant="success" className="w-100 mb-3">
          Continue
        </Button>

        <hr className="my-3" />
        <p className="text-muted">or</p>

        {/* Google Login */}
        <Button variant="outline-primary" className="w-100 mb-2">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google Logo"
            className="me-2"
          />
          Continue with Google
        </Button>

        {/* Apple Login */}
        <Button variant="outline-dark" className="w-100 mb-3">
          <img
            src="https://img.icons8.com/ios-filled/16/000000/mac-os.png"
            alt="Apple Logo"
            className="me-2"
          />
          Continue with Apple
        </Button>

        {/* Sign Up Section */}
        <hr className="my-3" />
        <p className="text-muted">Don't have an Upwork account?</p>
        <Button variant="outline-success" className="w-100">
          Sign Up
        </Button>
      </div>
    </Container>
  );
};

export default Login;
