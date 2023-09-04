import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Have11 = () => {
  return (
    <div className="position-relative">
      <Container
        data-aos="fade-down"
        data-aos-duration="1200"
        className="py-3 py-md-5 blue_card_pos"
      >
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between have_bg">
          <div>
            <h2 className="ff-secondary fs_48 fw-normal fc_white mb-2 ">
              Have you
            </h2>
            <p className="ff-primary fs_24 fw-semibold fc_white Have_para1 mb-0">
              read our study about Speed and Performance in WordPress?
            </p>
          </div>
          <Link className="ff-Inter fs_16 fw-semibold fc_blue  d-inline-block Check_btn mb-0 mt-4 mt-md-none">
            Check It Out
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Have11
