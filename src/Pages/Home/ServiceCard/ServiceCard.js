import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import {
  FaArrowAltCircleRight,
  FaArrowRight,
  FaStar,
  FaStarHalf,
  FaStarHalfAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, price, title, description } = service;
  return (
    <div>
      <Row>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={img} />
            <Card.Body className="service">
              <Card.Title>{title}</Card.Title>
              <Card.Text className="m-0">{description.slice(0, 100)}</Card.Text>
              <p className="fs-5 d-flex justify-content-between">
                <span>
                  Price:
                  <span className="text-primary fw-semibold"> ${price}</span>
                </span>
                <span className="text-warning">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </span>
              </p>
              <div className="text-">
                <Link to="/">
                  <button className="btn btn-outline-warning btn-lg w-75 ">
                    View Details.. <FaArrowRight className="ms-2" />{" "}
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceCard;
