import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="container">
      <div className="row">
        <Form
          onSubmit={handleSubmit}
          className="col col-sm-12 mx-auto col-md-5 px-3 my-5 rounded border"
        >
          <h2 className="text-center fw-semibold text-success mt-3 fs-1">
            Please Register
          </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter password"
              required
            />
          </Form.Group>
          <Form.Text className="text-danger px-2 mt-2">
            <>
              Already have an account ? Please <Link to="/login">Login</Link>{" "}
            </>
          </Form.Text>
          <Form.Text className="text-danger"></Form.Text>

          <Button
            variant="outline-success"
            type="submit"
            className="w-75 mx-auto d-flex justify-content-center fs-4 mt-3 mb-5 fw-semibold"
          >
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
