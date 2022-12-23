import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container ">
      <div className="mt-5 text-center">
        <h2 className="text-center">Services Area</h2>
        <p className="fs-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          saepe doloribus suscipit mollitia <br /> repudiandae odio. Quisquam
          eaque autem unde enim?
        </p>
      </div>

      <div className="">
        {/* .slice(0, 3) */}
        <h2>Services: {services.length}</h2>

        <Row xs={1} md={2} lg={3} className="g-4">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
