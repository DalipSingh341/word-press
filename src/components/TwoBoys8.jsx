import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TwoBoys1 from "../assets/images/png/TwoBoys.png"
import { Link } from 'react-router-dom';

const TwoBoys8 = () => {
  return (
    <div>
      <Container>
        <Row className="align-items-center">
          <Col
            data-aos="fade-right"
            data-aos-duration="1200"
            lg={6}
            className="py-3"
          >
            <div>
              <img className="w-100" src={TwoBoys1} alt="TwoBoys1" />
            </div>
          </Col>
          <Col
            data-aos="fade-left"
            data-aos-duration="1200"
            lg={6}
            className="py-3"
          >
            <h2 className="ff-secondary fs_48 fw-normal fc_blue TwoBoy_text1 mb-2">
              Agile WordPress{" "}
              <span className="fc_black"> Development Project management</span>
            </h2>
            <p className="ff-primary fs_16 fw-normal fc_black TwoBoy_para1 mt-1 mb-0 opacity_07">
              Suspendisse consequat egestas arcu et et. Viverra quis euismod
              neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
              Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus
              tortor sollicitudin risus eget euismod in bibendum turpis.{" "}
            </p>
            <Link className="ff-primary fs_16 fw-semibold fc_white mt-3 mt-md-5 d-inline-block schedule_btn blue_btn">
              Explore
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TwoBoys8
