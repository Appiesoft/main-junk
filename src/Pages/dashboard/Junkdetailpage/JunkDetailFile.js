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
            <Col sm={10} md={10} lg={10} xl={10} xxl={9} className="mx-auto">
              <Row>
                <Col lg={12} className="mx-auto py-5">
                  <h1 className="detail_title text-center">
                    Junk – Asian Fusion Food
                  </h1>
                </Col>
                <Col lg={12}  sm={10} xs={9}  md={12}  xl={12} className="detail_btn  text-center mx-auto">
                  <div className=" my-4 py-3 py-md-2 py-sm-3 ">Book a table</div>
                  <div className=" py-2 py-3 py-sm-3">Order Online</div>
                  <div className="my-4  py-3 py-md-2 py-sm-3">Menu</div>
                  <div className=" py-md-2 py-3 py-sm-3">Gift Vouchers</div>
                  <div className="my-4 py-3 py-md-2 py-sm-3">Sign up For Newsletter</div>
                  <div className="py-md-2 py-3 py-sm-3">View our Website</div>
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
