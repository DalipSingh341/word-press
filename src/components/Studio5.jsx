import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BlueTick } from './Icons';

const Studio5 = () => {
  return (
    <div className="bgc_black">
      <Container className="py-3 py-md-5">
        <Row>
          <Col data-aos="fade-down"  data-aos-duration="1200" md={6} lg={5} className='my-3'>
            <h2 className="ff-secondary fs_40 fw-normal fc_white mb-0 Studio_text1">
              All Vipe Studio WordPress services include:
            </h2>
          </Col>
          <Col data-aos="fade-down"  data-aos-duration="1200" md={6} lg={4} className='my-3'>
            <h2 className="ff-primary2 fs_24 fw-semibold fc_white mb-4">
              By Industry
            </h2>
            <div className="d-flex gap-2 align-items-start mb-2">
              <BlueTick />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Lorem in elementum pellentesque
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <BlueTick />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Molestie cursus praesent mi
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <BlueTick />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Leo sed viverra cras
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <BlueTick />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Laoreet feugiat ut at
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <BlueTick />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Risus aliquam molestie viverra
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <BlueTick />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Diam enim pulvinar velit
              </h2>
            </div>
          </Col>
          <Col data-aos="fade-down"  data-aos-duration="1200" md={6} lg={3} className='my-3'>
            <h2 className="ff-primary2 fs_24 fw-semibold fc_white mb-4">
              By Services
            </h2>
            <div className="d-flex gap-2 align-items-start mb-2">
              <BlueTick />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Accumsan, dui a semper
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <BlueTick />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Interdum malesuada vulputate neque
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <BlueTick />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Nullam non a, morbi
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <BlueTick />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Arcu morbi leo eu
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <BlueTick />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Viverra venenatis, in ornare
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <BlueTick />
              <h2 className="ff-primary fs_16 fw-normal fc_white mb-0 Studio_text1">
                Erat id aliquam habitant
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Studio5
