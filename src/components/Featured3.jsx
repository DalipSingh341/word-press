import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import yahoo1 from "../assets/images/webp/yahoo1.webp";
import yahoo2 from "../assets/images/webp/yahoo2.webp";
import yahoo3 from "../assets/images/webp/yahoo3.webp";
import yahoo4 from "../assets/images/webp/yahoo4.webp";
import yahoo5 from "../assets/images/webp/yahoo5.webp";
import yahoo6 from "../assets/images/webp/yahoo6.webp";

const Featured3 = () => {
  var settings = {
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
    <div className="bgc_gray">
      <Container className="py-3 py-md-5">
        <h2 data-aos="fade-down"  data-aos-duration="1200" className="ff-secondary fs_48 fw-normal fc_black mb-3">
          Featured on
        </h2>

        {/* <div className="d-flex flex-wrap flex-xl-nowrap justify-content-center gap-5 align-items-center py-3 pt-md-5">
          <div>
            <img className="w-75 " src={yahoo1} alt="yahoo1" />
          </div>
          <div>
            <img className="w-75 " src={yahoo2} alt="yahoo2" />
          </div>
          <div>
            <img className="w-75 " src={yahoo3} alt="yahoo3" />
          </div>
          <div>
            <img className="w-75 " src={yahoo4} alt="yahoo4" />
          </div>
          <div>
            <img className="w-75 " src={yahoo5} alt="yahoo5" />
          </div>
          <div>
            <img className="w-75 " src={yahoo6} alt="yahoo6" />
          </div>
        </div> */}
        <Slider data-aos="fade-down"  data-aos-duration="1200" {...settings} className=" py-3 pt-md-5">
          <div>
            <img className="w-75 mt-3" src={yahoo1} alt="yahoo1" />
          </div>
          <div>
            <img className="w-75 " src={yahoo2} alt="yahoo2" />
          </div>
          <div>
            <img className="w-75 mt-3 " src={yahoo3} alt="yahoo3" />
          </div>
          <div>
            <img className="w-75 mt-2 " src={yahoo4} alt="yahoo4" />
          </div>
          <div>
            <img className="w-75  mt-2" src={yahoo5} alt="yahoo5" />
          </div>
          <div>
            <img className="w-75 mt-2 " src={yahoo6} alt="yahoo6" />
          </div>
          <div>
            <img className="w-75  " src={yahoo3} alt="yahoo3" />
          </div>
          <div>
            <img className="w-75  " src={yahoo4} alt="yahoo4" />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Featured3;
