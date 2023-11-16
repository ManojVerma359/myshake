import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import googelplay from "../assets/images/googleimg.png";
import playstore from "../assets/images/playstoreimg.png";
import { Peoples1 } from "./Iconsvg";
import { Airplan } from "./Iconsvg";
import { Pinkcat } from "./Iconsvg";
import { Heart } from "./Iconsvg";

const Downlodapp = () => {
  return (
    <>
      <section id="downlodapp" className="app_bgimg min-vh-100 mt-180">
        <Container>
          <div className="pt-240">
            <h2 className="fs-48 fw-500 ff-roboto text-white d-flex h-100 ">
              Download App
            </h2>
            <p className="fs-16 fw-300 ff-helvetica op_08 text-white w-30">
              Are you a mobile groomer or just want to access your appointments
              and client on the go?
            </p>
            <p className="fs-16 fw-300 ff-helvetica op_08 text-white w-30">
              Try our app, available to Premier or Premier Plus subscribers.
            </p>
            <div className="pt-4 d-flex gap-4">
              <img className="cursr_point links" src={googelplay} alt="#id" />
              <img className="cursr_point links" src={playstore} alt="#id" />
            </div>
          </div>
          <div className="pt-245 d-flex flex-column align-items-center">
            <h3 className="fs-48 fw-500 ff-roboto text-white">About Us</h3>
            <p className="fs-16 fw-300 ff-helvetica text-white text-center pt-1 ">
              Software developed by groomers for groomers{" "}
              <span className="fs-16 fw-300 ff-helvetica text-white d-block">
                Our team has a wealth of experience, over 30 years combined
                working in dog grooming salons and over 45
              </span>{" "}
              years combined in working in software development.
            </p>
          </div>
          <Row className="mt-5">
            <Col lg={3} sm={6} className="d-flex justify-content-center">
              <div className="aap_card position-relative">
                <div className="bellips"></div>
                <Peoples1 />
                <h3 className="fs-20 fw-500 ff-roboto text_blck pt-1">
                  Founded
                </h3>
                <p className="fs-16 fw-500 ff-helvetica dec2009 ">Dec 2009</p>
                <p className="fs-16 fw-500 ff-helvetica text_blck ">
                  Founded in 2009 to support pet grooming industry to reduce the
                  the administration burden of running a business.
                </p>
              </div>
            </Col>
            <Col lg={3} sm={6} className="d-flex justify-content-center mt-4 mt-sm-0">
              <div className="airplan_card position-relative">
              <div className="bellips"></div>
                <Airplan />
                <h3 className="fs-20 fw-500 ff-roboto text_blck pt-1">
                Product Launch
                </h3>
                <p className="fs-16 fw-500 ff-helvetica clr_bgni ">July 2010</p>
                <p className="fs-16 fw-500 ff-helvetica text_blck ">
                We released our first product 'Border' and made our first sales into 3 different countries.
                </p>
              </div>
            </Col>
            <Col lg={3} sm={6} className="d-flex justify-content-center mt-4 mt-lg-0">
              <div className="pinkcat_card position-relative">
              <div className="bellips"></div>
                <Pinkcat />
                <h3 className="fs-20 fw-500 ff-roboto text_blck pt-1">
                Pet Schedule Released
                </h3>
                <p className="fs-16 fw-500 ff-helvetica clr_orange ">Dec 2012</p>
                <p className="fs-16 fw-500 ff-helvetica text_blck ">
                Our new Web based platform was created and released.
                </p>
              </div>
            </Col>
            <Col lg={3} sm={6} className="d-flex justify-content-center mt-4 mt-lg-0">
              <div className="pinkcat_card position-relative">
              <div className="bellips"></div>
                <Heart />
                <h3 className="fs-20 fw-500 ff-roboto text_blck pt-1">
                Subscription Service
                </h3>
                <p className="fs-16 fw-500 ff-helvetica skyblue_clr ">Aug 2013</p>
                <p className="fs-16 fw-500 ff-helvetica text_blck ">
                We released our first premier subscription to the market
                </p>
              </div>
            </Col>
          </Row>
          <div className="py-5 d-flex justify-content-center">
          <button className="fs-24 fw-400 ff-roboto text-white vallbtn">View All</button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Downlodapp;
