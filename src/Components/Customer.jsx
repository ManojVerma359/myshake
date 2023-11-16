import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import coustm_img from '../assets/images/custm_img.png'
import {Message} from "./Iconsvg"
import {Pets} from "./Iconsvg"
import {Report} from './Iconsvg'
import {Service} from './Iconsvg'
import { useEffect } from "react"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Customer = () => {
    useEffect(() => {
        AOS.init({
          once:true,
          duration:1000,
        }
          
        );
        }, [])
  return (
    <>
    <section id='freet' className='custmer_bgimg min-vh-100 mt-5 pb-5'>
    <Container className='pt-3 pt-sm-5 pb-5'>
<div className='pt-3 pt-sm-5  pb-5'>
<Row className='d-flex align-items-center pt-5'>
<Col lg={5} data-aos="fade-right">
<h4 className='fs-48 fw-500 text-capitalize ff-roboto text-black'>Let your customer experience shine</h4>
<p className='fs-16 fw-300 ff-helvetica text-black max-w435 '>
Automated client rating, provides instant feedback on client booking history, partner this with your own Loyalty program.
</p>
<button className='freebtn fs-20 fw-400 ff-roboto mt-4'>Free Trial</button>
</Col>
<Col lg={7} className='pt-4 pt-lg-0 phnimg'data-aos="fade-up-left">
    <img className='img_shadow w-100' src={coustm_img} alt="#id" />
</Col>

</Row>
</div>
<div className='pt-200 text-center'>
    <h3 className='fs-48 fw-500 ff-roboto text-white'>Features</h3>
    <p className='fs-16 fw-300 ff-helvetica text-white  '>ShakeYourTail provides your business with the following key features to run an <span className='fs-16 fw-300 ff-helvetica text-white d-block'>successful dog grooming business.</span> </p>
</div>
<Row className='mt-5 justify-content-center 'data-aos="fade-right"> 
    <Col xl={3} sm={6}>
        <div className='schdul_card w-267 position-relative'>
        <div className="bellips"></div>
<Message/>
<h3 className='fw-500 fs-20 ff-roboto text-black pt-2'>Schedule</h3>
<p className='fs-16 fw-300 ff-helvetica text_clr'>Powerful and easy to use, book appointments for your team members and view a colour coded schedule, at a glance.</p>
        </div>
    </Col>
    <Col xl={3} sm={6} className='mt-4 mt-sm-0'>
        <div className='pet_card w-267 position-relative'>
        <div className="bellips"></div>
<Pets/>
<h3 className='fw-500 fs-20 ff-roboto text-black pt-2'>Clients & Pets</h3>
<p className='fs-16 fw-300 ff-helvetica text_clr'>Managing your Clients is effortless; Record Client details, view appointment history, breed, photos, medical notes, vet contact, groom note Client loyalty and more.</p>
        </div>
    </Col>
    <Col xl={3} sm={6} className='mt-4 mt-xl-0 '>
        <div className='report_card w-267 position-relative'>
        <div className="bellips"></div>
<Report/>
<h3 className='fw-500 fs-20 ff-roboto text-black pt-2'>Reports</h3>
<p className='fs-16 fw-300 ff-helvetica text_clr'>Report and export client details, appointments, marketing, no shows and more..</p>
        </div>
    </Col>
    <Col xl={3} sm={6} className='mt-4 mt-xl-0'>
        <div className='service_card w-267 position-relative'>
        <div className="bellips"></div>
<Service/>
<h3 className='fw-500 fs-20 ff-roboto text-black pt-2'>Services</h3>
<p className='fs-16 fw-300 ff-helvetica text_clr'>Add custom services to appointments, supplementary treatments, collection and drop offs, promotion packages and more.</p>
        </div>
    </Col>
</Row >
<div className='mt-5 d-flex align-itmes-center justify-content-center pb-110'>
<button className='viewbtn fs-20 fw-400 ff-roboto'>View All Features</button>
</div>

    </Container>
    </section>
    </>
  )
}

export default Customer