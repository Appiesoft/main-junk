import React from "react";
import { Col, Row } from "react-bootstrap";
import junktwomain from "../../../assets/pageOne/junkfooter.png";
import './Sippy_down.css'
import NavSection from "../../navSection/NavSection";
import NavLinks from "../../navLinks/NavLinks";
import FoodItems from "../foodItemsSection/FoodItems";
import Footer from "../../footer/Footer"
const SippyDown = () => {
  return (
    <>
    <NavSection/>
    <NavLinks/>
    <section className="bg-black sippy_border " >
      <Row>
        <Col lg={12} className="d-flex">
          <Col lg={6}  className="bg_sippy_image">
            {/* <img src={junktwomain} /> */}
          </Col>
          <Col lg={6} className="pt-4 mt-3">
            <h2 className="sippy_title pt-5">SIPPY DOWNS</h2>
            <h1 className="sippy_menu pt-4 mt-2">MENU</h1>
            <h4 className="pt-4 mt-2">
              <strong className="sippy_address">1 Courage Street, Sippy Downs QLD</strong>
            </h4>
            <div className="sippy_timig pt-5">
              SUNDAY TO THURSDAY | 11AM – 9PM
              <br />
              FRIDAY TO SATURDAY | 11AM – 10PM
            </div>
            <h4 className="mt-3 pt-2">
              <strong className="sippy_booking">BOOKINGS ESSENTIAL</strong>
            </h4>
            <div className="mt-2">
              <em className="sippy_licensed">Licensed Venue</em>
            </div>
            <Row className="mx-auto py-3 mt-1">
                <Col lg={5} className="enquiry_border ">

                </Col>
            </Row>
            <h4 className="mt-2">
              <span>
                <strong className="sippy_enquery">ENQUIRIES</strong>
              </span>
            </h4>
            <div className="sippy_details mt-2">
              0409 619 513
              <br />
              sippy@junksunshinecoast.com.au
              <br />
              <em>OR</em>&nbsp;via our
              <span>
                <strong>contact form</strong>
              </span>
            </div>
          </Col>
        </Col>
      </Row>
    </section>
    <FoodItems/>
      <Footer/>
      </>
  );
};

export default SippyDown;
