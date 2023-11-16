import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switchs } from "./Iconsvg";
import { Arrowr } from "./Iconsvg";

const Pricing = () => {
  return (
    <>
      <section id="pricing" className="pt-5">
        <Container className="pt-5">
          <div className="d-flex align-items-center flex-column">
            <h3 className="fs-48 fw-500 ff-roboto text_blck">Pricing Plan</h3>
            <p className="fs-16 fw-300 ff-helvetica text_blck ">
              Our Subscriptions, simple, flexible and designed for your business
              needs.
            </p>
            <div className="d-flex align-items-center gap-3 justify-content-center pt-3 ">
              <p className="fs-24 fw-700 ff-roboto text_blue">£ GBP</p>
              <span className="cursr_point">
                <Switchs />
              </span>
              <p className="fs-24 fw-400 ff-roboto text_clr">$ USD</p>
            </div>
          </div>
          <Row className="mt-5 justify-content-center algin-items-center">
            <Col lg={3} sm={6}>
              <div className="pricing_card  position-relative overflow-hidden">
                <div className="smsline">
                  <h4 className="fs-10 fw-500 ff-helvetica included">
                    SMS Included
                  </h4>
                </div>

                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <h4 className="fs-20 fw-500 ff-roboto text_blck">Free</h4>
                    <p className="fs-16 fw-300 ff-helvetica text_clr ">
                      Great To Get You Started
                    </p>
                    <p className="fs-32 fw-700 ff-roboto text_blck pt-3">
                      £0
                      <span className="fs-16 fw-500 text_blck">/per month</span>
                    </p>

                    <div className="d-flex align-items-center gap-2 pt-3">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Single User
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-3">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Single Resource
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-3">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        150 Clients
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-3">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Unlimited Appointments
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="getbtn fs-20 fw-500 ff-roboto ">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} className="mt-4 mt-sm-0">
              <div className="pricing_card  position-relative overflow-hidden mx-12">
                <div className="smsline">
                  <h4 className="fs-10 fw-500 ff-helvetica included">
                    SMS Included
                  </h4>
                </div>

                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <h4 className="fs-20 fw-500 ff-roboto text_blck">
                      Starter Plus
                    </h4>
                    <p className="fs-16 fw-300 ff-helvetica text_clr ">
                      Business Essentials
                    </p>
                    <p className="fs-32 fw-700 ff-roboto text_blck pt-3">
                      £15
                      <span className="fs-16 fw-500 text_blck">/per month</span>
                    </p>

                    <div className="d-flex align-items-center gap-2 pt-3">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Single User
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-3">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Single Resource
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-3">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Single User
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-3">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Unlimited Appointments
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-3">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Custom Pet Breeds
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-3">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        SMS Reminders
                      </p>
                    </div>
                    <h3 className="fs-13 fw-700 ff-helvetica text-black pt-3">
                      100 SMS Credits
                    </h3>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="getbtn fs-20 fw-500 ff-roboto ">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} className="mt-4 mt-lg-0">
              <div className="pricing_card  position-relative overflow-hidden mx-12">
                <div className="smsline">
                  <h4 className="fs-10 fw-500 ff-helvetica included">
                    SMS Included
                  </h4>
                </div>

                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <h4 className="fs-20 fw-500 ff-roboto text_blck">
                      Premier
                    </h4>
                    <p className="fs-16 fw-300 ff-helvetica text_clr ">
                      Ideal For Busy Businesses
                    </p>
                    <p className="fs-32 fw-700 ff-roboto text_blck pt-2">
                      £25
                      <span className="fs-16 fw-500 text_blck">/per month</span>
                    </p>

                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Multi User
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Multi Resource
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Unlimited Clients
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Unlimited Appointments
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Custom Pet Breeds
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Email Confirmations & Reminders
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Email Marketing
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Online Booking
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Electronic Contracts
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Mobile App
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Reporting
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Support
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="getbtn fs-20 fw-500 ff-roboto ">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} className="mt-4 mt-lg-0">
              <div className="pricing_card  position-relative overflow-hidden mx-12">
                <div className="smsline">
                  <h4 className="fs-10 fw-500 ff-helvetica included">
                    SMS Included
                  </h4>
                </div>

                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <h4 className="fs-20 fw-500 ff-roboto text_blck">
                      Premier Plus
                    </h4>
                    <p className="fs-16 fw-300 ff-helvetica text_clr ">
                      Unlimited Possibilities
                    </p>
                    <p className="fs-32 fw-700 ff-roboto text_blck pt-2">
                      £37
                      <span className="fs-16 fw-500 text_blck">/per month</span>
                    </p>

                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Multi User
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Multi Resource
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Unlimited Clients
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Unlimited Appointments
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Custom Pet Breeds
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Email Confirmations & Reminders
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Email Marketing
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Online Booking
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Electronic Contracts
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Mobile App
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Reporting
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2">
                      <Arrowr />
                      <p className="fs-13 fw-300 ff-helvetica text_clr">
                        Support
                      </p>
                    </div>
                    <h3 className="fs-13 fw-700 ff-helvetica text-black pt-2">
                      200 SMS Credits
                    </h3>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="getbtn fs-20 fw-500 ff-roboto ">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Pricing;
