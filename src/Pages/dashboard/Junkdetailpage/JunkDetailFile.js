import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./JunkDetailFile.css";
import NavSection from "../../navSection/NavSection";
import NavLinks from "../../navLinks/NavLinks";
import FoodItems from "../foodItemsSection/FoodItems";
import Footer from "../../footer/Footer";
const JunkDetailFile = () => {
  return (
    <>
    <NavSection/>
    <NavLinks/>
      <section className="bg_details">
        <Container>
          <Row >
            <Col lg={8} className="mx-auto">
              <Row>
                <Col lg={12} className="mx-auto py-5">
                  <h1 className="detail_title text-center">
                    Junk – Asian Fusion Food
                  </h1>
                </Col>
                <Col lg={12} className="detail_btn  text-center mx-auto">
                  <div className=" my-4 py-2 ">Book a table</div>
                  <div className=" py-2">Order Online</div>
                  <div className="my-4 py-2">Menu</div>
                  <div className=" py-2">Gift Vouchers</div>
                  <div className="my-4 py-2">Sign up page For Newsletter</div>
                  <div className="py-2">View our Website</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <FoodItems/>
      <Footer/>
    </>
  );
};

export default JunkDetailFile;
