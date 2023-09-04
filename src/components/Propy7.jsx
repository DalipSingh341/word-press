import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick';
import propy1 from "../assets/images/svg/propy1.svg";
import propy2 from "../assets/images/svg/propy2.svg";
import propy3 from "../assets/images/svg/propy3.svg";
import propy4 from "../assets/images/svg/propy4.svg";
import propy5 from "../assets/images/svg/propy5.svg";
import propy6 from "../assets/images/svg/propy6.svg";

const Propy7 = () => {
      var settings2 = {
        dots: false,
        speed: 3000,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 0,
        slidesToShow: 6,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className="py-3 py-md-5">
      <Container>
        <h2 data-aos="fade-right"  data-aos-duration="1200" className="ff-secondary fs_48 fw-normal fc_black mb-3 Propy_text1">
          Long Term WordPress Partner
        </h2>
        <p data-aos="fade-left"  data-aos-duration="1200" className="ff-primary fs_16 fw-normal fc_black mt-1 Propy_para1 mb-4">
          Our motto is the long-term partnership – we will not only develop your
          perfect website, but will be behind you through the whole process.
          They already trusted us:
        </p>

        {/* <div className="d-flex flex-wrap flex-xl-nowrap justify-content-center gap-5 align-items-center py-3 pt-md-5">
          <div>
            <img className="w-75 " src={propy1} alt="propy1" />
          </div>
          <div>
            <img className="w-75 " src={propy2} alt="propy2" />
          </div>
          <div>
            <img className="w-75 " src={propy3} alt="propy3" />
          </div>
          <div>
            <img className="w-75 " src={propy4} alt="propy4" />
          </div>
          <div>
            <img className="w-75 " src={propy5} alt="propy5" />
          </div>
          <div>
            <img className="w-75 " src={propy6} alt="propy6" />
          </div>
        </div> */}
        <Slider
          data-aos="fade-down"
          data-aos-duration="1200"
          {...settings2}
          className=" gap-5  py-3 py-md-5 "
        >
          <div className="d-flex align-items-center justify-content-center">
            <img className="w-75 mt-4" src={propy1} alt="propy1" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img className="w-75 mt-2" src={propy2} alt="propy2" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img className="w-75 mt-3" src={propy3} alt="propy3" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img className="w-75 mt-1" src={propy4} alt="propy4" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img className="w-75 " src={propy5} alt="propy5" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img className="w-75 mt-1" src={propy6} alt="propy6" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img className="w-75 mt-3" src={propy3} alt="propy3" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img className="w-75 mt-1" src={propy4} alt="propy4" />
          </div>
        </Slider>
      </Container>
    </div>
  );
}

export default Propy7
