import React, { useState } from 'react'
import { Col, Container, Nav, NavDropdown, Row } from 'react-bootstrap'
import Success1 from "./assets/images/png/Success1.png" 
import { Link } from 'react-router-dom';

import vipe1 from "./assets/images/png/vipe1.png"

const Success10 = () => {
   const [tab, setTab] = useState("First");

   const handleTabClick = (tab) => {
     setTab(tab);
   };
  return (
    <div className="py-3 py-md-5">
      <Container className="py-md-5 mb-xl-5">
        <Row>
          <Col data-aos="fade-right"  data-aos-duration="1200" lg={4} className="my-3">
            <div>
              <img className="w-100" src={Success1} alt="Success1" />
            </div>
          </Col>
          <Col data-aos="fade-left"  data-aos-duration="1200" lg={8} className="my-3">
            <h2 className="ff-primary fs_16 fw-normal fc_light_gray">
              HAVE YOU SEEN OUR MASCOT?
            </h2>
            <h2 className="ff-secondary fs_48 fw-normal fc_black mb-3">
              Success Guides{" "}
            </h2>

            <div >
              <div className="pb-6 pb-md-0 scroll">
                <ul className="mb-0 ps-0 d-flex flex-wrap justify-content-center justify-content-md-start py-2 gap-3 ">
                  <li
                    onClick={() => handleTabClick("First")}
                    className="cursor-pointer  mb-0"
                  >
                    <span
                      className={`ff-primary fs_16 fw-semibold fc_blue success_tabs d-inline-block mb-0 tabBtn ${
                        tab === "First"
                          ? "bg_primary color_white "
                          : "color_primary btnTab"
                      }`}
                    >
                      Category-1
                    </span>
                  </li>
                  <li
                    onClick={() => handleTabClick("Second")}
                    className="cursor-pointer"
                  >
                    <span
                      className={`ff-primary fs_16 fw-semibold fc_blue success_tabs d-inline-block mb-0 tabBtn ${
                        tab === "Second"
                          ? "bg_primary color_white "
                          : "color_primary btnTab"
                      }`}
                    >
                      Category-2
                    </span>
                  </li>
                  <li
                    onClick={() => handleTabClick("Third")}
                    className="cursor-pointer"
                  >
                    <span
                      className={`ff-primary fs_16 fw-semibold fc_blue success_tabs d-inline-block mb-0 tabBtn ${
                        tab === "Thrid"
                          ? "bg_primary color_white "
                          : "color_primary btnTab"
                      }`}
                    >
                      Category-3
                    </span>
                  </li>
                  <li
                    onClick={() => handleTabClick("Fourth")}
                    className="cursor-pointer"
                  >
                    <span
                      className={`ff-primary fs_16 fw-semibold fc_blue success_tabs d-inline-block mb-0 tabBtn ${
                        tab === "Fourth"
                          ? "bg_primary color_white "
                          : "color_primary btnTab"
                      }`}
                    >
                      Category-4
                    </span>
                  </li>
                </ul>
              </div>
              {tab === "First" && (
                <Row className="justify-content-center">
                  <Col
                    sm={6}
                    xl={4}
                    className="my-3 d-flex align-items-center justify-content-center"
                  >
                    <div className="vipe_card1">
                      <img className="w-100" src={vipe1} alt="vipe1" />
                      <h2 className="ff-primary fs_24 fw-semibold fc_black mt-3 mb-2">
                        Sit diam metus
                      </h2>
                      <p className="ff-primary fs_16 fw-normal fc_black  mb-2 vipe_para1">
                        Arcu amet, consectetur vel pellentesque mattis ipsum sed
                        mattis sed.
                      </p>
                      <Link className="f-primary fs_16 fw-semibold fc_blue d-inline-block mb-0">
                        Read More....
                      </Link>
                    </div>
                  </Col>
                  <Col
                    sm={6}
                    xl={4}
                    className="my-3 d-flex align-items-center justify-content-center"
                  >
                    <div className="vipe_card1">
                      <img className="w-100" src={vipe1} alt="vipe1" />
                      <h2 className="ff-primary fs_24 fw-semibold fc_black mt-3 mb-2">
                        Sit diam metus
                      </h2>
                      <p className="ff-primary fs_16 fw-normal fc_black  mb-2 vipe_para1">
                        Arcu amet, consectetur vel pellentesque mattis ipsum sed
                        mattis sed.
                      </p>
                      <Link className="f-primary fs_16 fw-semibold fc_blue d-inline-block mb-0">
                        Read More....
                      </Link>
                    </div>
                  </Col>
                  <Col
                    sm={6}
                    xl={4}
                    className="my-3 d-flex align-items-center justify-content-center"
                  >
                    <div className="vipe_card1">
                      <img className="w-100" src={vipe1} alt="vipe1" />
                      <h2 className="ff-primary fs_24 fw-semibold fc_black mt-3 mb-2">
                        Sit diam metus
                      </h2>
                      <p className="ff-primary fs_16 fw-normal fc_black  mb-2 vipe_para1">
                        Arcu amet, consectetur vel pellentesque mattis ipsum sed
                        mattis sed.
                      </p>
                      <Link className="f-primary fs_16 fw-semibold fc_blue d-inline-block mb-0">
                        Read More....
                      </Link>
                    </div>
                  </Col>
                </Row>
              )}
              {tab === "Second" && (
                <Row className="justify-content-center">
                  <Col
                    sm={6}
                    xl={4}
                    className="my-3 d-flex align-items-center justify-content-center"
                  >
                    <div className="vipe_card1">
                      <img className="w-100" src={vipe1} alt="vipe1" />
                      <h2 className="ff-primary fs_24 fw-semibold fc_black mt-3 mb-2">
                        diam sit visa
                      </h2>
                      <p className="ff-primary fs_16 fw-normal fc_black  mb-2 vipe_para1">
                        Arcu amet, consectetur vel pellentesque mattis ipsum sed
                        mattis sed.
                      </p>
                      <Link className="f-primary fs_16 fw-semibold fc_blue d-inline-block mb-0">
                        Read More....
                      </Link>
                    </div>
                  </Col>
                  <Col
                    sm={6}
                    xl={4}
                    className="my-3 d-flex align-items-center justify-content-center"
                  >
                    <div className="vipe_card1">
                      <img className="w-100" src={vipe1} alt="vipe1" />
                      <h2 className="ff-primary fs_24 fw-semibold fc_black mt-3 mb-2">
                        Sit diam metus
                      </h2>
                      <p className="ff-primary fs_16 fw-normal fc_black  mb-2 vipe_para1">
                        Arcu amet, consectetur vel pellentesque mattis ipsum sed
                        mattis sed.
                      </p>
                      <Link className="f-primary fs_16 fw-semibold fc_blue d-inline-block mb-0">
                        Read More....
                      </Link>
                    </div>
                  </Col>
                  <Col
                    sm={6}
                    xl={4}
                    className="my-3 d-flex align-items-center justify-content-center"
                  >
                    <div className="vipe_card1">
                      <img className="w-100" src={vipe1} alt="vipe1" />
                      <h2 className="ff-primary fs_24 fw-semibold fc_black mt-3 mb-2">
                        Sit diam metus
                      </h2>
                      <p className="ff-primary fs_16 fw-normal fc_black  mb-2 vipe_para1">
                        Arcu amet, consectetur vel pellentesque mattis ipsum sed
                        mattis sed.
                      </p>
                      <Link className="f-primary fs_16 fw-semibold fc_blue d-inline-block mb-0">
                        Read More....
                      </Link>
                    </div>
                  </Col>
                </Row>
              )}
              {tab === "Third" && (
                <Row className="justify-content-center">
                  <Col
                    sm={6}
                    xl={4}
                    className="my-3 d-flex align-items-center justify-content-center"
                  >
                    <div className="vipe_card1">
                      <img className="w-100" src={vipe1} alt="vipe1" />
                      <h2 className="ff-primary fs_24 fw-semibold fc_black mt-3 mb-2">
                        diam sit visa
                      </h2>
                      <p className="ff-primary fs_16 fw-normal fc_black  mb-2 vipe_para1">
                        Arcu amet, consectetur vel pellentesque mattis ipsum sed
                        mattis sed.
                      </p>
                      <Link className="f-primary fs_16 fw-semibold fc_blue d-inline-block mb-0">
                        Read More....
                      </Link>
                    </div>
                  </Col>
                  <Col
                    sm={6}
                    xl={4}
                    className="my-3 d-flex align-items-center justify-content-center"
                  >
                    <div className="vipe_card1">
                      <img className="w-100" src={vipe1} alt="vipe1" />
                      <h2 className="ff-primary fs_24 fw-semibold fc_black mt-3 mb-2">
                        Vipe
                      </h2>
                      <p className="ff-primary fs_16 fw-normal fc_black  mb-2 vipe_para1">
                        Arcu amet, consectetur vel pellentesque mattis ipsum sed
                        mattis sed.
                      </p>
                      <Link className="f-primary fs_16 fw-semibold fc_blue d-inline-block mb-0">
                        Read More....
                      </Link>
                    </div>
                  </Col>
                  <Col
                    sm={6}
                    xl={4}
                    className="my-3 d-flex align-items-center justify-content-center"
                  >
                    <div className="vipe_card1">
                      <img className="w-100" src={vipe1} alt="vipe1" />
                      <h2 className="ff-primary fs_24 fw-semibold fc_black mt-3 mb-2">
                        metus
                      </h2>
                      <p className="ff-primary fs_16 fw-normal fc_black  mb-2 vipe_para1">
                        Arcu amet, consectetur vel pellentesque mattis ipsum sed
                        mattis sed.
                      </p>
                      <Link className="f-primary fs_16 fw-semibold fc_blue d-inline-block mb-0">
                        Read More....
                      </Link>
                    </div>
                  </Col>
                </Row>
              )}
              {tab === "Fourth" && (
                <Row className="justify-content-center">
                  <Col
                    sm={6}
                    xl={4}
                    className="my-3 d-flex align-items-center justify-content-center"
                  >
                    <div className="vipe_card1">
                      <img className="w-100" src={vipe1} alt="vipe1" />
                      <h2 className="ff-primary fs_24 fw-semibold fc_black mt-3 mb-2">
                        visa
                      </h2>
                      <p className="ff-primary fs_16 fw-normal fc_black  mb-2 vipe_para1">
                        Arcu amet, consectetur vel pellentesque mattis ipsum sed
                        m.Arcu amet,
                      </p>
                      <Link className="f-primary fs_16 fw-semibold fc_blue d-inline-block mb-0">
                        Read More....
                      </Link>
                    </div>
                  </Col>
                  <Col
                    sm={6}
                    xl={4}
                    className="my-3 d-flex align-items-center justify-content-center"
                  >
                    <div className="vipe_card1">
                      <img className="w-100" src={vipe1} alt="vipe1" />
                      <h2 className="ff-primary fs_24 fw-semibold fc_black mt-3 mb-2">
                        Sit diam metus
                      </h2>
                      <p className="ff-primary fs_16 fw-normal fc_black  mb-2 vipe_para1">
                        Arcu amet, consectetur vel pellentesque mattis ipsum sed
                        mattis sed.
                      </p>
                      <Link className="f-primary fs_16 fw-semibold fc_blue d-inline-block mb-0">
                        Read More....
                      </Link>
                    </div>
                  </Col>
                  <Col
                    sm={6}
                    xl={4}
                    className="my-3 d-flex align-items-center justify-content-center"
                  >
                    <div className="vipe_card1">
                      <img className="w-100" src={vipe1} alt="vipe1" />
                      <h2 className="ff-primary fs_24 fw-semibold fc_black mt-3 mb-2">
                        Sit diam metus
                      </h2>
                      <p className="ff-primary fs_16 fw-normal fc_black  mb-2 vipe_para1">
                        Arcu amet, consectetur vel pellentesque mattis ipsum sed
                        mattis sed.
                      </p>
                      <Link className="f-primary fs_16 fw-semibold fc_blue d-inline-block mb-0">
                        Read More....
                      </Link>
                    </div>
                  </Col>
                </Row>
              )}
            </div>

            {/* <Nav
              variant="pills"
              defaultActiveKey="/home"
              className="d-flex gap-3"
            >
              <Nav.Item>
                <Link
                  className="ff-primary fs_16 fw-semibold fc_blue success_tabs d-inline-block mb-0"
                  href="/home"
                >
                  Category-1
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  eventKey="link-1"
                  className="ff-primary fs_16 fw-semibold fc_blue success_tabs d-inline-block mb-0"
                >
                  Category-2
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  eventKey="link-2"
                  className="ff-primary fs_16 fw-semibold fc_blue success_tabs d-inline-block mb-0"
                >
                  Category-3
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  eventKey="link-3"
                  className="ff-primary fs_16 fw-semibold fc_blue success_tabs d-inline-block mb-0"
                >
                  Category-4
                </Link>
              </Nav.Item>
            </Nav> */}

            {/* <Row className='justify-content-center'>
              <Col
                sm={6}
                xl={4}
                className="my-3 d-flex align-items-center justify-content-center"
              >
                <div className="vipe_card1">
                  <img className="w-100" src={vipe1} alt="vipe1" />
                  <h2 className="ff-primary fs_24 fw-semibold fc_black mt-3 mb-2">
                    Sit diam metus
                  </h2>
                  <p className="ff-primary fs_16 fw-normal fc_black  mb-2 vipe_para1">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <Link className="f-primary fs_16 fw-semibold fc_blue d-inline-block mb-0">
                    Read More....
                  </Link>
                </div>
              </Col>
              <Col
                sm={6}
                xl={4}
                className="my-3 d-flex align-items-center justify-content-center"
              >
                <div className="vipe_card1">
                  <img className="w-100" src={vipe1} alt="vipe1" />
                  <h2 className="ff-primary fs_24 fw-semibold fc_black mt-3 mb-2">
                    Sit diam metus
                  </h2>
                  <p className="ff-primary fs_16 fw-normal fc_black  mb-2 vipe_para1">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <Link className="f-primary fs_16 fw-semibold fc_blue d-inline-block mb-0">
                    Read More....
                  </Link>
                </div>
              </Col>
              <Col
                sm={6}
                xl={4}
                className="my-3 d-flex align-items-center justify-content-center"
              >
                <div className="vipe_card1">
                  <img className="w-100" src={vipe1} alt="vipe1" />
                  <h2 className="ff-primary fs_24 fw-semibold fc_black mt-3 mb-2">
                    Sit diam metus
                  </h2>
                  <p className="ff-primary fs_16 fw-normal fc_black  mb-2 vipe_para1">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <Link className="f-primary fs_16 fw-semibold fc_blue d-inline-block mb-0">
                    Read More....
                  </Link>
                </div>
              </Col>
            </Row> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Success10
