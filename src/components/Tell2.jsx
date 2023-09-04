import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowCircle, Search } from "./Icons";

const Tell2 = () => {
  return (
    <div className="bgc_black py-3 py-md-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col data-aos="fade-right"  data-aos-duration="1200" lg={6}>
            <h2 className="ff-secondary fs_36 fw-normal fc_white mb-3">
              Tell us more....
            </h2>
            <p className="ff-primary fs_16 fw-normal fc_white mb-3 agency_para1">
              Lectus vitae est ultrices sed. Sit aliquam commodo hac donec augue
              in quis. Magna vel orci sem neque fringilla et lectus laoreet.
            </p>
          </Col>
          <Col data-aos="fade-left"  data-aos-duration="1200" lg={5}>
            <div className="input_box d-flex z_index_3">
              <input
                className="w-100 ff-primary fs_16 fw-normal fc_white mb-0 agency_para1 input_text me-5 z_index_3"
                type="text"
                name="text"
                placeholder="What do you need assistance with?"
                id="#"
              />
              <Search />
            </div>
            <div className="d-flex flex-column flex-sm-row  align-items-center justify-content-between ">
              <div className="d-flex align-items-center gap-2  mt-3">
                <ArrowCircle />
                <h2 className="ff-primary fs_16 fw-normal fc_white  mb-0">
                  or send us an inquire?{" "}
                </h2>
              </div>
              <div>
                <h2 className="ff-primary fs_16 fw-normal fc_white  mb-0 mt-3">
                  or send us an inquire?{" "}
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tell2;
