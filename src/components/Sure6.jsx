import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BlueTick2 } from './Icons';
import Sure1 from  "../assets/images/png/sure1.png"
import blue1 from "../assets/images/png/blur_circle.png";

const Sure6 = () => {
  return (
    <div className="bgc_black py-3 py-md-5 position-relative ">
      <img
        className="w-50 blue3 position-absolute d-none d-lg-block"
        src={blue1}
        alt="blue1"
      />
      <img
        className="w-50 blue4 position-absolute d-none d-lg-block"
        src={blue1}
        alt="blue1"
      />
      <Container className="z_index_4">
        <Row className="sure_card align-items-center justify-content-center z_index_4">
          <Col data-aos="fade-down"  data-aos-duration="1200" md={6} lg={4} className="my-3 z_index_4">
            <h2 className="ff-secondary fs_35 fw-normal fc_white sure_text1 mb-4 z_index_4">
              Not Sure which service you need yet?{" "}
            </h2>
            <Link className="ff-primary fs_16 fw-semibold fc_white mt-3 d-inline-block schedule_btn z_index_4 blue_btn">
              Schedule An Appointment
            </Link>
          </Col>
          <Col data-aos="fade-down"  data-aos-duration="1200" md={6} lg={4} className="my-3 z_index_4">
            <h2 className="ff-primary2 fs_24 fw-bold fc_white sure_text2 mb-4">
              20-m free consultation that will help us identifyif you need
            </h2>

            <h2 className="ff-primary2 fs_24 fw-semibold fc_white mb-4">
              By Industry
            </h2>
            <div className="d-flex gap-2 align-items-start mb-2">
              <BlueTick2 />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Technical Description & Discovery
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <BlueTick2 />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Custom WordPress Development
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <BlueTick2 />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Support & Maintenance
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <BlueTick2 />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Other WordPress Service
              </h2>
            </div>
          </Col>
          <Col data-aos="fade-down"  data-aos-duration="1200" md={6} lg={4} className="z_index_4">
            <div>
              <img className="w-100 " src={Sure1} alt="Sure1" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sure6
