import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Blue, Yellow, Pink } from "./Iconsvg";
import { Skyblue } from "./Iconsvg";
import { Lock } from "./Iconsvg";
import { Key } from "./Iconsvg";
import { People } from "./Iconsvg";
import { Rightsign } from "./Iconsvg";

const Work = () => {
  return (
    <>
      <section>
        <Container className="pt-5">
          <div className="pt-5">
            <h4 className="fs-48 fw-500 ff-roboto text-black">How It Work</h4>
            <p className="fs-16 fw-300 ff-helvetica text-black ">
              ShakeYourTail is an online scheduling and CRM service & is super
              easy to use,
              <span className="fs-16 fw-300 ff-helvetica text-black d-block">
                you can trial our premier service free for 30 days.
              </span>{" "}
            </p>
          </div>
          <Row>
            <div className="lines mt-5"></div>
          <Col
                xsm={3}
                className="d-flex flex-column  align-items-center   position-relative"
              >
                <div className="flex-column d-flex">
                  <p className="number fs-76 fw-700 ff-helvetica ">01</p>
                  <Yellow />
                  <span className="pt-3">
                    <Lock />
                  </span>
                  <h3 className="fs-20 fw-500 ff-roboto text_blck pt-2">
                    Register
                  </h3>
                  <p className="fs-16 fw-300 text_clr ff-helvetica ">
                    Create a account
                  </p>
                </div>
              </Col>
              <Col
                xsm={3}
                className="d-flex flex-column  align-items-center   position-relative"
              >
                <div className="flex-column d-flex">
                  <p className="number2 fs-76 fw-700 ff-helvetica">02</p>
                  <Skyblue />
                  <span className="pt-3">
                    <Key />
                  </span>
                  <h3 className="fs-20 fw-500 ff-roboto text_blck pt-2">
                    Login
                  </h3>
                  <p className="fs-16 fw-300 text_clr ff-helvetica ">
                    Create a account
                  </p>
                </div>
              </Col>
              <Col
                xsm={3}
                className="d-flex flex-column  align-items-center   position-relative"
              >
                <div className="flex-column d-flex">
                  <p className="number3 fs-76 fw-700 ff-helvetica">03</p>
                  <Blue />
                  <span className="pt-3">
                    <People />
                  </span>
                  <h3 className="fs-20 fw-500 ff-roboto text_blck pt-2">
                    Customise
                  </h3>
                  <p className="fs-16 fw-300 text_clr ff-helvetica ">
                    Customise your emails,{" "}
                    <span className="d-block fs-16 fw-300 text_clr ff-helvetica">
                      SMS & settings.{" "}
                    </span>{" "}
                  </p>
                </div>
              </Col>
              <Col
                xsm={3}
                className="d-flex flex-column  align-items-center   position-relative"
              >
                <div className="flex-column d-flex">
                  <p className="number4 fs-76 fw-700 ff-helvetica">04</p>
                  <Pink />
                  <span className="pt-3">
                    <Rightsign />
                  </span>
                  <h3 className="fs-20 fw-500 ff-roboto text_blck pt-2">
                    Done
                  </h3>
                  <p className="fs-16 fw-300 text_clr ff-helvetica ">
                    You're Ready to Rock! Add{" "}
                    <span className="fs-20 fw-500 d-block ff-roboto text_blck pt-2">
                      clients & start booking appointments.
                    </span>{" "}
                  </p>
                </div>
              </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Work;
