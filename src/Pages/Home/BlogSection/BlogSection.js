import React from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import { FaNewspaper, FaRegCommentDots } from "react-icons/fa";
import blog1 from "../../../assets/bolgimg/blog1.png";
import blog2 from "../../../assets/bolgimg/blog2.png";
import blog3 from "../../../assets/bolgimg/blog3.png";
import blog4 from "../../../assets/bolgimg/blog4.png";
import blog5 from "../../../assets/bolgimg/blog5.png";

const BlogSection = () => {
  return (
    <div className="container ">
      <div className="text-center mt-5">
        <h1>Tips & Tricks From Blog</h1>
        <p className="fs-4 ">
          We Provide Fast, Reliable Heating and Air Conditioning Services in
          Newyork <br />
          City and It’s Sourrounding Areas.
        </p>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        <Col className="shadow-sm">
          <Card>
            <Card.Img variant="top" src={blog1} />
            <Card.Body>
              <Card.Text>
                <div className="d-flex justify-content-between">
                  <span>
                    <FaNewspaper className="mx-2 text-warning" />
                    News & Updates
                  </span>
                  <span>
                    <FaRegCommentDots className="text-warning" /> 9 Comments
                  </span>
                </div>
              </Card.Text>
              <Card.Title className="">
                <a href=""> Why the Size of Your HVAC System is So Important</a>
              </Card.Title>
              <div className="d-flex justify-content-end">
                <small className="text-muted ">Last updated 3 mins ago</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="shadow-sm">
          <Card>
            <Card.Img variant="top" src={blog2} />
            <Card.Body>
              <Card.Text>
                <div className="d-flex justify-content-between">
                  <span>
                    <FaNewspaper className="mx-2 text-warning" />
                    News & Updates
                  </span>
                  <span>
                    <FaRegCommentDots className="text-warning" /> 6 Comments
                  </span>
                </div>
              </Card.Text>
              <Card.Title className="">
                <a href=""> Should I Turn My Furnace Off Over the Summer?</a>
              </Card.Title>
              <div className="d-flex justify-content-end">
                <small className="text-muted ">Last updated 14 mins ago</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="shadow-sm ">
          <Card>
            <Card.Img variant="top" src={blog3} />
            <Card.Body>
              <Card.Text>
                <div className="d-flex justify-content-between">
                  <span>
                    <FaNewspaper className="mx-2 text-warning" />
                    News & Updates
                  </span>
                  <span>
                    <FaRegCommentDots className="text-warning" /> 12 Comments
                  </span>
                </div>
              </Card.Text>
              <Card.Title className="">
                <a href="">
                  Preventive Care Tips to Maintain Your House in Winter
                </a>
              </Card.Title>
              <div className="d-flex justify-content-end">
                <small className="text-muted ">Last updated 37 mins ago</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BlogSection;
