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
        {/* <Container className="pt-5">
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
        </Container> */}
        <Container>
        <div className='mt-lg-5 py-5'>
          <p className='text_blck ff-roboto fw-500 fs-48 text-center text-lg-start'>How It Work</p>
          <p className='text_clr ff-helvetica  fs-16 fw-300 max_widths text-center text-lg-start'>ShakeYourTail is an online scheduling and CRM service & is super easy to use, you can trial our premier service free for 30 days.</p>
        </div>

        <Row className='position-relative row_after'>
          <Col md={3}
            className=" d-flex justify-content-md-center justify-content-start"
          >
            <div className=" d-flex flex-column align-items-md-start position-relative z-1 padding yello align-itmes-center pl_100 ">
              <div className=" d-flex flex-column align-items-start">
                           <div className="imgrodmp d-md-block mb-4" ><Yellow/></div>
                <span>
                  {<Lock />}
                </span>
                <p className=" fw-500 fs-20 ff-roboto text-black mt-2">
                  Register
                </p>
                <p className=" fs-16 fw-300 ff-helvetica  text_clr">
                  Create a account
                </p>
                <p className=" fs-76 fw-700 ff-helvetica  position-absolute number img_postion z-n1">
                  01
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={3}
            className=" d-flex justify-content-md-center justify-content-start pt-3 pt-md-0"
          >
            <div className=" d-flex flex-column align-items-md-start position-relative padding yello align-itmes-center pl_100">
              <div className=" d-flex flex-column align-items-start">
                                <div className=" imgrodmp d-md-block mb-4"><Skyblue/></div>
                <span>
                  {<Key/>}
                </span>
                <p className=" fw-500 fs-20 ff-roboto text-black mt-2">
                  Login
                </p>
                <p className=" fs-16 fw-300 ff-helvetica  text_clr">
                  Create a account
                </p>
                <p className=" fs-76 fw-700 ff-helvetica  position-absolute number2 img_postion z-n1">
                  02
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} className=" d-flex justify-content-md-center justify-content-start pt-3 pt-md-0">
            <div className=" d-flex flex-column align-items-md-start position-relative padding yello align-itmes-center pl_100">
              <div className=" d-flex flex-column align-items-start">        
                <div className="imgrodmp3 d-md-block mb-4"><Blue/></div>
                <span>
                  {<People />}
                </span>
                <p className=" fw-500 fs-20 ff-roboto text-black mt-2">
                  Customise
                </p>
                <p className=" fs-16 fw-300 ff-helvetica  text_clr mx-widthsms">
                  Customise your emails, SMS & settings.
                </p>
                <p className=" fs-76 fw-700 ff-helvetica  position-absolute number3 img_postion z-n1">
                  03
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={3}
            className=" d-flex justify-content-md-center justify-content-start pt-3 pt-md-0"
          >
            <div className=" d-flex flex-column align-items-md-start position-relative padding yello align-itmes-center pl_100">
              <div className=" d-flex flex-column align-items-start">
                                <div className="imgrodmp4 d-md-block mb-4" ><Pink/></div>
                <span>
                  {<Rightsign />}
                </span>
                <p className=" fw-500 fs-20 ff-roboto text-black mt-2">
                  Done
                </p>
                <p className=" fs-16 fw-300 ff-helvetica  text_clr max_width_done">
                  You're Ready to Rock! Add clients & start booking appointments.
                </p>
                <p className=" fs-76 fw-700 ff-helvetica  position-absolute number4 img_postion z-n1">
                  04
                </p>
              </div>
            </div>
          </Col>
        </Row>



      </Container>

      </section>
    </>
  );
};

export default Work;
