import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footerlogo from "../assets/images/footerlogo.png";
import { Facebook, Inlink, Instgram, Telegram, Twitter } from "./Iconsvg";

const Footer = () => {
  return (
    <>
      <section className="footer_bgimg mt-110 ">
        <Container>
          <div className="d-flex flex-column  justify-content-center  pt-5">
            <Row className="d-flex justify-content-between pt-200 pb-90">
              <Col lg={4}>
                <img className="cursr_point" src={footerlogo} alt="#id" />
                <p className=" pt-4 pb-5 ff-helvetica fw-300 fs-16 op_08 text-white ">
                  Rutrum mauris vitae at vitae augue placerat arcu in. Vel in
                  elementum tempor enim accumsan enim a magna at. Dolor lorem
                  nisi dignissim nulla.
                </p>
                <div className="d-flex gap-3 ">
                  <a className="link" href="https://www.facebook.com/home.php">
                    <Facebook /> 
                  </a>
                  <a className="link" href="https://twitter.com/home">
                    <Twitter />
                  </a>
                  <a className="link" href="https://www.instagram.com/home.php">
                    <Instgram />
                  </a>
                  <a className="link" href="https://www.in.com/home.php">
                    <Inlink />
                  </a>
                  <a className="link" href="https://www.telegram.com/home.php">
                    <Telegram />
                  </a>
                </div>
              </Col>
              <Col lg={3} className="pt-lg-0 pt-5">
                <div className="d-flex gap-5">
                  <div className="d-flex flex-column">
                    <p className="fs-16 fw-500 ff-helvetica text-white ">
                      Important Links
                    </p>
                    <a
                      className="fs-16 fw-300 ff-helvetica text-white op_08 pt-2"
                      href="#id"
                    >
                      About Us
                    </a>
                    <a
                      className="fs-16 fw-300 ff-helvetica text-white op_08 pt-2"
                      href="#id"
                    >
                      Features
                    </a>
                    <a
                      className="fs-16 fw-300 ff-helvetica text-white op_08 pt-2"
                      href="#id"
                    >
                      Pricing
                    </a>
                    <a
                      className="fs-16 fw-300 ff-helvetica text-white op_08 pt-2"
                      href="#id"
                    >
                      How It Work
                    </a>
                    <a
                      className="fs-16 fw-300 ff-helvetica text-white op_08 pt-2"
                      href="#id"
                    >
                      New Features
                    </a>
                  </div>
                  <div className="d-flex flex-column">
                    <p className="fs-16 fw-500 ff-helvetica text-white ">
                      Other Links
                    </p>
                    <a
                      className="fs-16 fw-300 ff-helvetica text-white op_08 pt-2"
                      href="#id"
                    >
                      Testimonials
                    </a>
                    <a
                      className="fs-16 fw-300 ff-helvetica text-white op_08 pt-2"
                      href="#id"
                    >
                      FAQs
                    </a>
                    <a
                      className="fs-16 fw-300 ff-helvetica text-white op_08 pt-2"
                      href="#id"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <h4 className="fs-16 fw-300 ff-helvetica  text-white text-center hrline py-3">
          Made with Powered by Petstar - DOG GROOMING BUSINESSES & PET SERVICES
        </h4>
      </section>
    </>
  );
};

export default Footer;
