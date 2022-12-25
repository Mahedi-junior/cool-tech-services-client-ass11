import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container ">
      <div className="mt-5 text-center bg-warning rounded py-5 text-dark">
        <h1 className="text-center">Our Services Area</h1>
        <p className="fs-4 mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          saepe doloribus suscipit mollitia <br /> repudiandae odio. Quisquam
          eaque autem unde enim?
        </p>
      </div>

      <div className="mt-5">
        {/* .slice(0, 3) */}
        {/* <h2>Services: {services.length}</h2> */}
        <Row xs={1} md={2} lg={3} className="g-4">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </Row>
        <Link to="/allServices">
          <Button
            variant="warning"
            className="rounded-0 btn-lg py-3 px-5 mt-4 fw-semibold "
          >
            All Services <FaArrowRight className="ms-3" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
