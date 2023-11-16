import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Blb } from "./Iconsvg";
import { Msg } from "./Iconsvg";

const MyAccordain = () => {
  return (
    <>
      <Container className="mt-200">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={6}>
            <h3 className="fs-48 fw-500 ff-roboto text_blck mb-3 ps-2">FAQ’s</h3>

            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="fs-20 fw-500 ff-helvetica">
                  Do you have a mobile app?
                </Accordion.Header>
                <Accordion.Body className="fs-16 fw-300 ff-helvetica  text_clr">
                  Yes, our mobile app is available to premier and premier plus
                  subscribers, allowing you to manage your business on the go.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="fs-20 fw-500 ff-helvetica">
                  Do you support start-up business?
                </Accordion.Header>
                <Accordion.Body className="fs-16 fw-300 ff-helvetica  text_clr">
                  Yes, our mobile app is available to premier and premier plus
                  subscribers, allowing you to manage your business on the go.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className="fs-20 fw-500 ff-helvetica">
                  I’ve used up all my monthly SMS credits, can I buy more?
                </Accordion.Header>
                <Accordion.Body className="fs-16 fw-300 ff-helvetica  text_clr">
                  Yes, our mobile app is available to premier and premier plus
                  subscribers, allowing you to manage your business on the go.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className="fs-20 fw-500 ff-helvetica">
                  What do I need to access the system?
                </Accordion.Header>
                <Accordion.Body className="fs-16 fw-300 ff-helvetica  text_clr">
                  Yes, our mobile app is available to premier and premier plus
                  subscribers, allowing you to manage your business on the go.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header className="fs-20 fw-500 ff-helvetica">
                  Can you import my data?
                </Accordion.Header>
                <Accordion.Body className="fs-16 fw-300 ff-helvetica  text_clr">
                  Yes, our mobile app is available to premier and premier plus
                  subscribers, allowing you to manage your business on the go.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center mt-4 mt-md-0"
          >
            <div className="need_card  flex-column">
              <h4 className="fs-32 fw-500 ff-roboto text_blck">Need help?</h4>
              <p className="fs-16 fw-300 ff-helvetica pt-2">
                Ask our support team
              </p>
              <div className="idea_btn mt-3 cursr_point">
                <Blb />
                <p className="fs-20 fw-400 ff-roboto text-white">New Idea?</p>
              </div>
              <div className="idea_btn mt-3 cursr_point">
                <Msg />
                <p className="fs-20 fw-400 ff-roboto text-white">Contact Us</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyAccordain;
