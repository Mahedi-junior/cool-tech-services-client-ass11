import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ServiceCard = ({ service }) => {
  const { img, price, title, description } = service;
  return (
    <div>
      <Row>
        <Col>
          <Card className="h-100">
            <Card.Img fluid variant="top" src={img} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceCard;
