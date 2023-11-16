import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import dogimg from "../assets/images/dogimges.png";
import blck_dog from "../assets/images/black_dog.png";
import { Star5 } from "./Iconsvg";
import { Leftarrow } from "./Iconsvg";
import { Rightarrow } from "./Iconsvg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";


const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section>
        <Container>
          <h3 className="fs-48 fw-500 ff-roboto text_blck text-center pt-156 pb-100">
            Testimonial
          </h3>
          <Row className=" align-items-center justify-content-center">
            <Col md={6}>
              <img className="w-100" src={dogimg} alt="#id" />
            </Col>
            <Col md={6} className="pt-5 pt-md-0">
              <Slider {...settings}>
                <div>
                  <img src={blck_dog} alt="#id" />
                  <p className="fs-20 fw-300 ff-helvetica text_clr pt-3 ">
                    “ShakeYourTail is amazing, helping me easily manage my
                    appointments and reduce my business admin with automated
                    confirmations and reminders.”
                  </p>
                  <div className="pt-2 cursr_point">
                    <Star5 />
                  </div>
                  <h3 className="fs-32 fw-700 ff-helvetica text_blue pt-3 ">
                    Mathew Spry
                  </h3>
                  <h4 className="fs-18 fw-600 op_08 ff-nue text_blck pt-2">
                    Director @ BArkingham, UK
                  </h4>

                  <div className="d-flex gap-2 pt-5">
                    {" "}
                    <div>
                      <Leftarrow />
                    </div>
                    <div>
                      <Rightarrow />
                    </div>
                  </div>
                </div>
                <div>
                  <img src={blck_dog} alt="#id" />
                  <p className="fs-20 fw-300 ff-helvetica text_clr pt-3 ">
                    “ShakeYourTail is amazing, helping me easily manage my
                    appointments and reduce my business admin with automated
                    confirmations and reminders.”
                  </p>
                  <div className="pt-2 cursr_point">
                    <Star5 />
                  </div>
                  <h3 className="fs-32 fw-700 ff-helvetica text_blue pt-3 ">
                    Mathew Spry
                  </h3>
                  <h4 className="fs-18 fw-600 op_08 ff-nue text_blck pt-2">
                    Director @ BArkingham, UK
                  </h4>

                  <div className="d-flex gap-2 pt-5">
                    {" "}
                    <div>
                      <Leftarrow />
                    </div>
                    <div>
                      <Rightarrow />
                    </div>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
