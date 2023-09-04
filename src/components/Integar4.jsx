import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Enter1, Enter2, Enter3 } from './Icons';
import { Link } from 'react-router-dom';

const Integar4 = () => {
  return (
    <div>
      <Container className="py-3 py-md-5">
        <h2 className="ff-secondary fs_48 fw-normal fc_black mb-5">
          Integer et nisl non
        </h2>
        <Row className="d-flex  align-items-center justify-content-center">
          <Col data-aos="fade-down"  data-aos-duration="1200"
            md={6}
            lg={4}
            className="my-3 d-flex  align-items-center justify-content-center"
          >
            <div className="Enter_card1 cp">
              <div className="text-center mb-3">
                <Enter1 />
              </div>
              <h2 className="ff-Inter fs_24 fw-semibold fc_black text-center mt-4 mb-3">
                Enterprise WordPress Solutions{" "}
              </h2>
              <p className="ff-primary fs_16 fw-normal fc_black opacity_07 mx-auto text-center inter_para1">
                Pretium, a et sapien non nunc libero. Id dolor sed quis
                convallis turpis purus feugiat nibh eu. Auctor cras hac ac,
                sociis diam montes, turpis commodo elit.
              </p>
              <div className="text-center">
                <Link className="ff-primary fs_16 fw-normal fc_blue mx-auto d-inline-block">
                  Learn More
                </Link>
              </div>
            </div>
          </Col>
          <Col data-aos="fade-down"  data-aos-duration="1200"
            md={6}
            lg={4}
            className="my-3 d-flex  align-items-center justify-content-center"
          >
            <div className="Enter_card1 cp">
              <div className="text-center mb-3">
                <Enter2 />
              </div>
              <h2 className="ff-Inter fs_24 fw-semibold fc_black text-center mt-4 mb-3">
                Small to Mid Size Business Development
              </h2>
              <p className="ff-primary fs_16 fw-normal fc_black opacity_07 mx-auto text-center">
                Et nunc fermentum id amet tempus, elementum. Eget ac ultrices
                tortor, mattis amet blandit aenean amet. Massa diam lacus,
                aliquam neque, cursus.
              </p>
              <div className="text-center">
                <Link className="ff-primary fs_16 fw-normal fc_blue mx-auto d-inline-block">
                  Learn More
                </Link>
              </div>
            </div>
          </Col>
          <Col data-aos="fade-down"  data-aos-duration="1200"
            md={6}
            lg={4}
            className="my-3 d-flex  align-items-center justify-content-center"
          >
            <div className="Enter_card1 cp">
              <div className="text-center mb-3">
                <Enter3 />
              </div>
              <h2 className="ff-Inter fs_24 fw-semibold fc_black text-center mt-4 mb-3">
                Support & Maintenance
              </h2>
              <p className="ff-primary fs_16 fw-normal fc_black opacity_07 mx-auto text-center">
                Ac donec ipsum fringilla tortor, consectetur etiam sociis amet
                quis. Viverra volutpat pretium non in fusce tellus sed urna.
                Pharetra ullamcorper et donec aliquam.
              </p>
              <div className="text-center">
                <Link className="ff-primary fs_16 fw-normal fc_blue mx-auto d-inline-block">
                  Learn More
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Integar4
