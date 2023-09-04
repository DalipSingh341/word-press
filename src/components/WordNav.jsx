import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { Earth } from "./Icons";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";

const WordNav = () => {
     const [nav, setNav] = useState(true);

     function shownav() {
       setNav(false);
       document.body.classList.add("overflow-hidden");
     }
     function hidenav() {
       setNav(true);
       document.body.classList.remove("overflow-hidden");
     }
    return (
      <div className="bgc_black py-3 py-md-4 ">
        <Container>
          <div className="d-flex justify-content-between align-items-center ms-xl-5">
            <div></div>
            <ul
              className={`${
                nav
                  ? "d-flex nav_bar mb-0 p-0 align-items-center gap-2"
                  : "ps-0 d-flex nav_bar align-items-center show mb-0 gap-3"
              }`}
            >
              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="ff-primary fs_16 fw-normal fc_white drop_down  d-flex  align-items-center gap-1 nav_text"
                  >
                    WordPress Solution
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      className="ff-primary fs_16 fw-normal fc_black nav_text"
                    >
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="ff-primary fs_16 fw-normal fc_black nav_text"
                    >
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      className="ff-primary fs_16 fw-normal fc_black nav_text"
                    >
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="ff-primary fs_16 fw-normal fc_white drop_down  d-flex  align-items-center gap-1 nav_text"
                  >
                    Services
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      className="ff-primary fs_16 fw-normal fc_black nav_text"
                    >
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="ff-primary fs_16 fw-normal fc_black nav_text"
                    >
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      className="ff-primary fs_16 fw-normal fc_black nav_text"
                    >
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li
                onClick={() => setNav(true)}
                className="ff-primary fs_16 fw-normal fc_white nav_text cp"
              >
                Portfolio
              </li>
              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="ff-primary fs_16 fw-normal fc_white drop_down  d-flex  align-items-center gap-1 nav_text cp"
                  >
                    About
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      className="ff-primary fs_16 fw-normal fc_black nav_text cp"
                    >
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="ff-primary fs_16 fw-normal fc_black nav_text cp"
                    >
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      className="ff-primary fs_16 fw-normal fc_black nav_text cp"
                    >
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li
                onClick={() => setNav(true)}
                className="ff-primary fs_16 fw-normal fc_white nav_text cp"
              >
                Blog
              </li>
              <li
                onClick={() => setNav(true)}
                className="ff-primary fs_16 fw-normal fc_white d-md-none nav_text cp"
              >
                1 888 266-6917 (eu?)
              </li>
              <li>
                <Link
                  onClick={() => setNav(true)}
                  className="ff-primary fs_18 fw-bold fc_white d-md-none d-inline-block Contact_btn mb-0 blue_btn  "
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="d-md-flex gap-1 gap-xl-3 mb-0 ps-0 align-items-center d-none ms-1">
              {" "}
              <li className="ff-primary fs_16 fw-normal fc_white z_index_3 nav_text cp">
                1 888 266-6917 (eu?)
              </li>
              <li className="z_index_4">
                <Link className="ff-primary fs_18 fw-bold fc_white d-inline-block Contact_btn mb-0 text-center z_index_4 blue_btn">
                  Contact Us
                </Link>
              </li>
              <li>
                {" "}
                <Dropdown className="z_index_4">
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="ff-primary fs_16 fw-normal fc_white drop_down  d-flex  align-items-center gap-1 d-flex  align-items-center gap-1 z_index_4  nav_text cp"
                  >
                    <Earth />
                    Eng
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      className="ff-primary fs_16 fw-normal fc_black z_index_4 nav_text cp"
                    >
                      Hindi
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="ff-primary fs_16 fw-normal fc_black z_index_4 nav_text cp"
                    >
                      Urdu
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      className="ff-primary fs_16 fw-normal fc_black z_index_4 nav_text cp"
                    >
                      Russian
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
            <Button
              className="position-relative  d-lg-none cross_btn z_index_100"
              onClick={nav ? shownav : hidenav}
            >
              {" "}
              {nav ? (
                <Icon icon={menu} size={50} />
              ) : (
                <Icon icon={x} size={50} />
              )}
            </Button>
          </div>
        </Container>
      </div>
    );
};

export default WordNav;
