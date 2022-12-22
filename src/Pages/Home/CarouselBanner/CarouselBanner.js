import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../assets/carousel/slide1.jpg";
import banner2 from "../../../assets/carousel/slide2.jpg";
import banner3 from "../../../assets/carousel/slide3.jpg";
import "./CarouselBanner.css";
const CarouselBanner = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <div className="carouselBanner-img">
          <img className="d-block w-100 " src={banner1} alt="First slide" />
        </div>
        <div class="carousel-caption m-0 text-xl-start d-flex flex-column  justify-content-center  h-100">
          <h1>
            We're AC or Heating <br />
            Maintenance & Repaire...
          </h1>
          <p className="fs-3 m-0">
            Some representative placeholder content for the first slide...
          </p>
          <div className="btn btn-outline-warning py-3 fw-semibold w-50 mt-4 ">
            Book Now
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="carouselBanner-img">
          <img className="d-block w-100 " src={banner2} alt="Second slide" />
        </div>
        <div class="carousel-caption m-0 text-xl-start d-flex flex-column  justify-content-center  h-100">
          <h1>
            We're AC or Heating <br />
            Maintenance & Repaire...
          </h1>
          <p className="fs-3 m-0">
            Some representative placeholder content for the first slide...
          </p>
          <div className="btn btn-outline-warning py-3 fw-semibold w-50 mt-4 ">
            Book Now
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="carouselBanner-img">
          <img className="d-block w-100 " src={banner3} alt="Third slide" />
        </div>
        <div class="carousel-caption m-0 text-xl-start d-flex flex-column  justify-content-center  h-100">
          <h1>
            We're AC or Heating <br />
            Maintenance & Repaire...
          </h1>
          <p className="fs-3 m-0">
            Some representative placeholder content for the first slide...
          </p>
          <div className="btn btn-outline-warning py-3 fw-semibold w-50 mt-4 ">
            Book Now
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBanner;
