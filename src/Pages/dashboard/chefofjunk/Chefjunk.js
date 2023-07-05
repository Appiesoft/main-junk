import React from "react";
import cheflogojunk from "../../../assets/pageOne/cheflogojunk.png";
import curatedplate from "../../../assets/pageOne/curatedplate.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavSection from "../../navSection/NavSection";
import NavLinks from "../../navLinks/NavLinks";
import FoodItems from "../foodItemsSection/FoodItems";
import Footer from "../../footer/Footer";
import "./Chefjunk.css";
import Bodyimage from '../../../assets/pageOne/Bodyimage.jpg'
import { Link } from "react-router-dom";
const Chefjunk = () => {
  return (
    <div className="bg-black">
      <NavSection />
      <NavLinks />
      <section className="bg_image_chef">
        <Container> 
          <Row className="mx-auto py-5">
            <Col
              lg={4} md={4}
              className="mx-auto  d-flex justify-content-evenly align-items-center my-2 flex-wrap"
            >
              <h6 className="  text-center ">
                <img src={cheflogojunk} />
              </h6>
              <h6 className=" text--center my-md-4">
                <img src={curatedplate} />
              </h6>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col lg={12} className="mx-auto align-items-center">
              <Row>
                <Col lg={12} className="mx-auto">
                  <h6 className="text-center cheft_title">
                    Chefs of Junk <br /> An Asian Adventure
                  </h6>
                </Col>
                <Col lg={6} className="mx-auto">
                  <h6 className=" text-center  cheft_para py-5">
                    Junk is taking your tastebuds on an Asian Adventure! <br />{" "}
                    In conjunction with The Curated Plate, we present the Chef’s
                    of Junk: An Asian Adventure celebrating our fabulous chefs.
                  </h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-black py-5">
      <Container> 
         <Row className="mx-auto">
          <Col lg={12} xl={12} xxl={12} className="mt-4">
             <Row className="d-flex justify-content-evenly mx-auto">
              <Col md={8} lg={9} xl={6} xxl={6} sm={9} className="d-flex flex-wrap flex-lg-nowrap justify-content-center">
              <Col lg={6} xl={6} xxl={6} className=" ms-1">
                <img src={Bodyimage} />
                </Col>
                <Col lg={6} xl={6} xxl={6} className="align-self-center ms-lg-5 my-md-4 my-4 my-sm-4 my-lg-0 my-xxl-0 my-xl-0">
                <div className="course_para text-center text-lg-start">$79 for 4 courses
                <br/>
                Sunday 6th August    <br/>
                11:30 AM – 2:30 PM</div> 
                <h6 className="course_title mt-md-2 mt-sm-2 mt-2">JUNK MAROOCHYDORE</h6>

                </Col>
              </Col>
             </Row>
             <Row className="my-5 mx-auto">
              <Col md={12} lg={12} xl={12} xxl={12} sm={6} xs={6} className="d-flex justify-content-md-center  justify-content-center flex-xs-wrap flex-wrap flex-md-nowrap mx-auto">
              <Col lg={6} xl={6} xxl={6} className="text-md-end text-sm-center">
              <Link to="https://xzkc27.p3cdn1.secureserver.net/wp-content/uploads/2023/05/Curated-Plate-Menu-.pdf">
             <Button className="chef_btn_menu border-0 rounded-0">SEE MENU</Button>
             </Link>
                </Col>
                <Col lg={6} xl={6} xxl={6} className="ms-md-5 text-sm-center text-md-start">
                <Link to="https://thecuratedplate.com.au/event/17827837-a/chefs-of-junk-an-asian-adventure">
                <Button className="chef_btn_menu border-0 rounded-0">BOOK MENU</Button>
                </Link>
                </Col>
              </Col>
             </Row>
          </Col>
         </Row>
        </Container>
      </section>
      <FoodItems />
      <Footer />
    </div>
  );
};

export default Chefjunk;
