import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
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
          onSubmit={handleLogin}
          className="col col-md-5 col-sm-12 mx-auto px-3 mt-5 rounded border pb-3"
        >
          <h2 className="text-center fw-semibold text-warning mt-3 fs-1">
            Please Login
          </h2>
          <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
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
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Text className="text-danger"></Form.Text>
          <Form.Text className="text-danger ">
            New to learn cool-tech ? Please <Link to="/register">register</Link>{" "}
          </Form.Text>
          <Button
            variant="warning"
            type="submit"
            className="w-75 mx-auto d-flex justify-content-center fs-4 fw-semibold mt-3"
          >
            Login
          </Button>

          <SocialLogin></SocialLogin>
        </Form>
      </div>
    </div>
  );
};

export default Login;
