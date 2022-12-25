import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Service = () => {
  const { _id, price, title, description, img } = useLoaderData();
  return (
    <div className="container">
      <h1>Services id: {_id}</h1>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Service;
