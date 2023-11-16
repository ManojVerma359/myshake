import React, { useState } from "react";
import navlogo from "../assets/images/navlogo.png";
import { Container, Row,Col } from "react-bootstrap";
import phnimg from "../assets/images/phnimge.png"
import { Navicons } from "./Iconsvg";
import { useEffect } from "react"; 
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hearder = () => {
    const [show, setShow] = useState(false);

    if (show === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    useEffect(() => {
      AOS.init({
        once:true,
        duration:1000,
      }
        
      );
      }, [])
  return (
    <>
      <section id="header" className="header_bgimg min-vh-100">
      <Container>
      <nav className="py-3">
          <div className="d-flex align-items-center justify-content-between">
            <img className="cursr_point z_index" src={navlogo} alt="#id" />
            <ul className={show ? "open" : ""}>
                <li>
                <a className="fs-16 fw-700 ff-helvetica text-white hover-line" href="#header">Home</a>
                </li>
                <li>
                <a className="fs-16 fw-700 ff-helvetica text-white hover-line" href="#features">Features</a>
                </li>
                <li>
                <a className="fs-16 fw-700 ff-helvetica text-white hover-line " href="#pricing">Pricing</a>
                </li>
                <li>
                <a className="fs-16 fw-700 ff-helvetica text-white hover-line" href="#freet">Free Trial</a>
                </li>
                <button className="signbtn fs-20 fw-400 ff-roboto text-white">Sign In</button>
            </ul>
            <button
                      className="open d-block d-lg-none navicon z_index navi "
                      onClick={() => {
                        setShow(!show);
                      }}
                    >
                      <Navicons />
                    </button>
          </div>
        </nav>

       <Row className="d-flex justify-content-between">
        <Col lg={6} data-aos="fade-right" >
        <div className="d-flex pt-170 flex-column">
            <h2 className="fs-80 fw-700 ff-roboto text-white">Smart, Simple Software</h2>
            <p className="fs-20 fw-500 text-white ff-helvetica max-w">Dog Grooming Software, helping to reduce 'no shows' with appointment confirmations, reminders & more.</p>
            <div className="gap-3 d-flex mt-3">
            <button className="signbtn text-white fs-20 ff-roboto fw-400">Free Trial</button>
            <button className="explorebtn text-white fs-20 ff-roboto fw-400">Explore More</button>
            </div>
        </div>

        </Col>
        <Col lg={5} className="pt-3 pt-md-0 " data-aos="fade-up-left">
            <div className="phnimg"><img className="w-100" src={phnimg} alt="#id" /></div>
        </Col>
       </Row>

      </Container>
      </section>
    </>
  );
};

export default Hearder;
