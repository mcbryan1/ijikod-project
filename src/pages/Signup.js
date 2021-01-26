import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Pages.css";
import "../components/Styles.css";
import { useAuth } from "../contexts/AuthContext";

function Signup() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();


  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/")
    } catch (error) {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="container-fluid main reg">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mt-5">
          <Card>
            <Card.Body>
              <h2 className="mb-4"> Create Account</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group type="text" className="mb-2">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" ref={firstNameRef} required />
                </Form.Group>
                <Form.Group type="text" className="mb-2">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" ref={lastNameRef} required />
                </Form.Group>
                <Form.Group type="email" className="mb-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group type="password" className="mb-2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group type="password-confirm" className="mb-2">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Button className="w-100 btn" type="submit" disabled={loading}>
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have account? <Link to="/login">Log in</Link>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Signup;
