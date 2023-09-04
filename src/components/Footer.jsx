import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {  Cat, DoubleArrow, Facebook, Home, Instagram, Linkdin, Mail, Phone, Search2, Twitter, W } from './Icons';

const Footer = () => {
  return (
    <div className="bgc_black py-md-5">
      <Container className="py-3 py-md-5">
        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          className="d-flex justify-content-center justify-content-md-end py-3"
        >
          <div className="input_box input_box2 d-flex">
            <input
              className="w-100 ff-primary fs_16 fw-normal fc_black opacity_07 mb-0 agency_para1 input_text  me-5"
              type="text"
              name="text"
              placeholder="Search here...."
              id="#"
            />
            <Search2 />
          </div>
        </div>
        <Row className="justify-content-between ">
          <Col data-aos="fade-down"  data-aos-duration="1200" md={6} lg={4} xl={3} className="my-3">
            <h2 className="ff-primary fs_16 fw-normal fc_white mb-3">
              Services
            </h2>
            <div className="d-flex gap-2 align-items-start mb-2">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Studio_text1">
                WordPress Development
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Studio_text1">
                WooCommerce Development
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Studio_text1">
                WordPress Maintenance
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Studio_text1">
                Speed Optimization
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Studio_text1">
                Dedicated WordPress Developer
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Studio_text1">
                Headless WordPress Development
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Studio_text1">
                White Label Development
              </h2>
            </div>
          </Col>
          <Col data-aos="fade-down"  data-aos-duration="1200" md={6} lg={4} xl={3} className="my-3">
            <h2 className="ff-primary fs_16 fw-normal fc_white mb-3">
              Services
            </h2>
            <div className="d-flex gap-2 align-items-start mb-2">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Studio_text1">
                WordPress Hosting
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Studio_text1">
                PSD, XD, Figma to WordPress Conversion
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Studio_text1">
                Custom WordPress Theme
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Studio_text1">
                Custom WordPress Plugins
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Studio_text1">
                CMS to WordPress
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-2 mt-1">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Studio_text1">
                WordPress Malware Removal
              </h2>
            </div>
          </Col>
          <Col data-aos="fade-down"  data-aos-duration="1200" md={6} lg={4} xl={4} className="my-3">
            <h2 className="ff-primary fs_16 fw-normal fc_white mb-3">
              Latest Articles
            </h2>
            <div className="d-flex gap-2 align-items-start mb-3">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Footer_text1">
                7 WordPress Plugins to Create an Effective Newsletter 03.01.2022
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-3 mt-1">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Footer_text1">
                What’s the Perfect Blog Post Length for Your WordPress Site’s
                SEO? 02.01.2022
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-3 mt-1">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Footer_text1">
                5 Reasons the Future of WordPress Is Headless 01.01.2022
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-3 mt-1">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Footer_text1">
                Custom WordPress Plugins
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-3 mt-1">
              <DoubleArrow />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Footer_text1">
                Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the
                Amazingly Successful 2021 30.12.2021
              </h2>
            </div>
          </Col>
          <Col data-aos="fade-down"  data-aos-duration="1200" md={6} lg={4} xl={2} className="my-3">
            <h2 className="ff-primary fs_16 fw-normal fc_white mb-3">
              Contact
            </h2>
            <div className="d-flex gap-2 align-items-start mb-3">
              <Phone />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Footer_text1">
                EU: +359 988 993 128
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-3 mt-1">
              <Phone />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Footer_text1">
                US: +1 (1 888) 266-6917
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-3 mt-1">
              <Mail />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Footer_text1">
                office@vipestudio.com
              </h2>
            </div>
            <div className="d-flex gap-2 align-items-start mb-3 mt-1">
              <Home />
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 Footer_text1">
                14 Srebarna, Sofia 1407, Bulgaria
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="mt-2 footer_border py-4 py-md-0">
        <Container>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end py-md-4">
            <div data-aos="fade-right"  data-aos-duration="1200" className="pt-3">
              <h2 className="ff-primary fs_14 fw-normal fc_white mb-3 Footer_text1">
                © Vipe Studio 2016-2022
              </h2>
              <div className="d-flex flex-wrap gap-3">
                <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 ">
                  Privacy
                </h2>
                <div className="white_line"></div>
                <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 ">
                  Careers
                </h2>
                <div className="white_line"></div>

                <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 ">
                  Media
                </h2>
                <div className="white_line"></div>

                <h2 className="ff-primary fs_14 fw-normal fc_white mb-0 ">
                  Client Area
                </h2>
              </div>
            </div>
            <div data-aos="fade-left"  data-aos-duration="1200" className="d-flex flex-wrap gap-3 pt-3">
              <div className="Cat_circle d-flex justify-content-center align-items-center">
                <Cat />
              </div>
              <div className="Cat_circle d-flex justify-content-center align-items-center">
                <Linkdin />
              </div>
              <div className="Cat_circle d-flex justify-content-center align-items-center">
                <Twitter />
              </div>
              <div className="Cat_circle d-flex justify-content-center align-items-center">
                <Facebook />
              </div>
              <div className="Cat_circle d-flex justify-content-center align-items-center">
                <Instagram />
              </div>
              <div className="Cat_circle d-flex justify-content-center align-items-center">
                <W />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer
