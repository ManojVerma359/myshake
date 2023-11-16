import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Message, Pets } from "./Iconsvg";
import { Notification } from "./Iconsvg";
import { useEffect } from "react"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    AOS.init({
      once:true,
      duration:1000,
    }
      
    );
    }, [])
  return (
    <>
      <section id="features" className="mt-100">
        <Container>
          <Row className="d-flex justify-content-between align-items-center">
            <Col lg={6} data-aos="fade-right">
              <Row className="d-flex align-items-center ">
                <Col md={6}>
                  <div>
                    <div className="card1 position-relative">
                      <div className="yellips"></div>
                      <Pets />
                      <h3 className="fs-20 ff-roboto fw-500 text-black pt-2">
                        Clients & Pets
                      </h3>
                      <p className="fw-300 fs-16 ff-helvetica text_clr">
                        Managing your Clients and their Pets is effortless;
                        Record their details, add emergency contacts, Medical
                        Notes, Grooming notes, view their appointment history,
                        set alerts and much more…
                      </p>
                    </div>
                    <div className="card1 mt-4 position-relative">
                    <div className="yellips"></div>
                      <Notification />
                      <h3 className="fs-20 ff-roboto fw-500 text-black pt-2">
                        Notifications & Reminders
                      </h3>
                      <p className="fw-300 fs-16 ff-helvetica text_clr">
                        We’ll take the strain by automatically sending your
                        Clients, their appointment reminders, confirmations,
                        ‘Miss You’s and No Shows, by text or email.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="pt-4 pt-md-0" data-aos="fade-up-left">
                  <div className="card2 position-relative">
                  <div className="yellips"></div>
                    <Message />
                    <h3 className="fs-20 ff-roboto fw-500 text-black pt-2">
                    Schedule
                    </h3>
                    <p className="fw-300 fs-16 ff-helvetica text_clr">
                    Powerful and easy to use, book appointments to your team members and view your colour coded schedule, ‘at a glance’.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={5} className="pt-4 pt-lg-0" data-aos="fade-up-left">
            <h2 className="fs-48 fw-500 ff-roboto text_clr">Main Features</h2>
            <p className="fs-16 fw-300 ff-helvetica text_clr ">ShakeYourTail is an trusted dog grooming software based in the cloud; Client, appointment, scheduling and document management service.</p>
            <p className="fs-16 fw-300 ff-helvetica text_clr ">Great for Salons & Groomers on the move; Run it on your PC, laptop, Ipad, Tablet or Mobile with a standard internet connection.</p>
            <p className="fs-16 fw-300 ff-helvetica text_clr ">Store everything in one place and leave the tech stuff to us.</p>
            <p className="fs-16 fw-300 ff-helvetica text_clr ">We provide a complete service solution, giving you peace of mind, we support, secure, update and keep your data, all safely backed up.</p>
            
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;
