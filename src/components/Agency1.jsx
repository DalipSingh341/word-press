import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { PlayBtn } from './Icons';
import agency1 from "../assets/images/png/agency1.png"
import blue1 from "../assets/images/png/blur_circle.png";
import small_blur from "../assets/images/png/small_blur_box.png";


const Agency1 = () => {
  return (
    <div className="bgc_black position-relative ">
      <img
        className="w-50 blue1 position-absolute d-none d-lg-block"
        src={blue1}
        alt="blue1"
      />
      <img
        className="w-50 blue2 position-absolute d-none d-lg-block"
        src={blue1}
        alt="blue1"
      />
      <Container>
        <Row>
          <Col data-aos="fade-right"  data-aos-delay="300" data-aos-duration="4000" lg={6} className=" py-3 py-md-5">
            <h2 className="ff-secondary fs_72 fw-normal fc_white  mb-4 agency_text1 position-relative">
              WordPress Development Agency
            </h2>
            <h2 className="ff-primary2 fs_24 fw-bold fc_white  mb-4 ">
              for Enterprise + Friendly Team{" "}
            </h2>
            <p className="ff-primary fs_16 fw-normal fc_white  mb-4 agency_para1 opacity_07">
              Vipe Studio is a WordPress Agency for development - a long-term
              partner for any WordPress service. Websites and,online shops
              development, maintenance and customization is what we do best.
            </p>
            <div className="d-flex flex-column flex-sm-row align-items-center gap-4">
              <Link className="ff-primary fs_18 fw-bold fc_white d-inline-block Contact_btn mb-0 blue_btn">
                Get Started
              </Link>
              <div className="d-flex align-items-center gap-3">
                <PlayBtn />
                <h2 className="ff-primary fs_16 fw-normal fc_white  mb-0  opacity_07">
                  What is Vipe? (1min)
                </h2>
              </div>
            </div>
          </Col>
          <Col data-aos="fade-left"  data-aos-delay="300" data-aos-duration="4000" lg={6} className="position-relative py-3 py-md-5 z_index_3">
            <div>
              <img className='w-50 z_index_5 small_blur1' src={small_blur} alt="small_blur" />
              <img
                className="w-100 agency_1 z_index_3"
                src={agency1}
                alt="agency1"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Agency1
