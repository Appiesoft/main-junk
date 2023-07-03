import React from 'react'
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import './Contact.css'
import NavSection from "../../navSection/NavSection";
import NavLinks from "../NavLinks";
import FoodItems from '../../dashboard/foodItemsSection/FoodItems';
import Footer from '../../footer/Footer';
const Contact = () => {
  return (
    <div>
        <NavSection/>
<NavLinks/>
      <div className="container-fluid bg-black py-5 py-xxl-5 pt-sm-3 pb-sm-5" id="bg_color1">
        <Container className='bg-black pt-4 pb-lg-5 pb-xxl-3 pb-md-3 px-xxl-5 px-md-0 px-md-5 pb-sm-5' >
        <Row className='mx-auto pt-lg-2'>
          <Col xxl={7} xl={10} lg={12} md={11}  sm={11} className="mx-auto border_bg px-xxl-0 py-xl-3  mb-xxl-5">
            <Row className="mx-auto px-xxl-0 px-md-4 py-xxl-3 px-xl-5 px-xxl-0 py-xl-3 px-lg-5 py-lg-4 py-md-4 px-sm-4 py-sm-4 ">
              <Col xxl={9} xl={8} lg={10} md={8}  className="mx-auto mb-xl-3 mb-md-2  mb-lg-3   mb-sm-3 mb-xxl-3">
                <h1 className="text-center gift_title">GET IN TOUCH</h1>
                <h6 className="text-center gift_para my-xxl-2 my-xl-2 my-md-3  my-lg-0  my-sm-2" >
                  Got a big event, fancy a large booking, or just got something
                  exciting you want to chat about? Don’t be shy, we’re all ears!
                </h6>
              </Col>
              <Col xxl={10} className='mx-auto'>
                <Form>
                  <Row className="mb-3 mb-xl-3">
                    <Form.Group className="my-2 mb-xl-4  mb-lg-3  mb-md-3 mb-sm-3">
                      <Form.Label  className='mb-1'>Name *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label  className='mb-1'>Email *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                      />
                    </Form.Group>
                    <Form.Group className="my-2 my-xl-4  my-lg-3 my-md-3 my-sm-3">
                      <Form.Label  className='mb-1'>Phone *</Form.Label>
                      <Form.Control
                        required
                        type="number"
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label  className='mb-1'>Venue *</Form.Label>
                <Form.Select>
                    <option value="" hidden >Please select an option</option>
                    <option value="Maroochydore">Maroochydore</option>
                    <option value="Sippy">Sippy Downs</option>
                </Form.Select>
                    </Form.Group>
                    <Form.Group className="my-2 my-xl-4 my-lg-3 my-md-3  my-sm-3">
                      <Form.Label  className='mb-1'>Subject *</Form.Label>
                      <Form.Select>
                      <option value="" hidden >Please select an option</option>
                    <option value="1">Catering</option>
                    <option value="2">Function</option>
                    <option value="3">Careers</option>
                    <option value="4">Media</option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className='mb-1'>Message</Form.Label>
                      <Form.Control as="textarea"  required />
                    </Form.Group>
                    <Form.Group  className="my-2 mt-xl-4 my-lg-3 my-md-3  my-sm-3">
                      <Form.Label className='mb-1'>Get the scoop!</Form.Label>
                      <Form.Select>
                      <option value="" hidden >Please select an option</option>
                    <option value="1">Yes! i want to be the first to know about Junk News and Updates!</option>
                    <option value="2">Count me Out</option>
                    </Form.Select>
                    </Form.Group>
                  </Row>
          
                  <Button type="submit" className="btn_gift mt-xxl-2 mt-xl-2 mb-4">Send</Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        </Container>
      </div>
   <FoodItems/>
   <Footer/>
    </div>
  )
}

export default Contact
