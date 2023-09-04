import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Team1 from "../assets/images/png/Team1.png"

const Time9 = () => {
  return (
    <div className=" bgc_gray py-md-5">
      <Container>
        <Row className="align-items-center py-md-5">
          <Col data-aos="fade-down"  data-aos-duration="1200" lg={6} className="py-3 order-last order-md-first">
            <h2 className="ff-secondary fs_48 fw-normal fc_black TwoBoy_text1 mb-2">
              Team Full of Stars
            </h2>
            <p className="ff-primary fs_16 fw-normal fc_black TwoBoy_para1 mt-1 mb-4 opacity_07">
              Suspendisse consequat egestas arcu et et. Viverra quis euismod
              neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
              Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus
              tortor sollicitudin risus eget euismod in bibendum turpis.
            </p>
            <Link className="ff-primary fs_16 fw-semibold fc_white mt-md-2 d-inline-block schedule_btn blue_btn">
              Explore
            </Link>
          </Col>
          <Col data-aos="fade-up"  data-aos-duration="1200" lg={6} className="position-relative py-3 order-first order-md-last ">
            <div>
              <img className="w-100 Team_pos" src={Team1} alt="Team1" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Time9;
