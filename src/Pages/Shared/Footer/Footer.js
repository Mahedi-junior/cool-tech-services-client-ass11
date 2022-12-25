import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center mt-5 mx-auto bg-warning ">
      <div className="row container d-flex justify-content-between align-items-center py-4">
        <div className="col col-md-4 com-sm-4 m-0">
          <p className="fw-semibold">Terms & Conditions</p>
          <p>Legal</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
        </div>

        <div className="col col-md-4 com-sm-4">
          <p className="fw-semibold">Quick Links</p>
          <p>Contact Us</p>
          <p>Request Appointment</p>
          <p>About Us</p>
          <small className="text-danger">copyright &copy; {year}</small>
        </div>
        <div className="col col-md-4 com-sm-4">
          <span className="d-xs-none fs-3 text-secondary">Newsletter..</span>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your Comments"
              />
            </Form.Group>
            <Button className="" variant="outline-primary py-2 w-100">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
