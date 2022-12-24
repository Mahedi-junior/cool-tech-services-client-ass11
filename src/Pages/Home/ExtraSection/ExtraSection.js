import React from "react";
import { Button } from "react-bootstrap";
import { FaBookOpen, FaPen } from "react-icons/fa";
import extrablog from "../../../assets/bolgimg/extrablog.png";
const ExtraSection = () => {
  return (
    <div className="container">
      <div className="mt-5"></div>
      <div className="row g-5 mt-5">
        <div className="col-md-6">
          <img
            src={extrablog}
            className="img-fluid rounded-start h-100"
            alt="..."
          />
        </div>
        <div className="col-md-6">
          <div className="card-body mt-2">
            <h1 className="card-title font-monospace">
              Welcome to CoolTech Services
            </h1>
            <p className="card-text fs-3 mt-4">
              Heating and air conditioning repair and installation company
            </p>
            <p className="fs-4 mt-4 text-muted">
              Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip laborum.
            </p>
            <Button
              variant="warning"
              className=" rounded-0 btn-lg py-3 mt-4 px-5 fw-semibold"
            >
              LEARN MORE <FaPen className="mx-3 mb-1" />
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
