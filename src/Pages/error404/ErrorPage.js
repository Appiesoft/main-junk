import React from 'react'
import {Col,Row, Button } from 'react-bootstrap'
import './ErrorPage.css'
import NavSection from '../navSection/NavSection'
import NavLinks from '../navLinks/NavLinks'
import FoodItems from '../dashboard/foodItemsSection/FoodItems'
import Footer from '../footer/Footer'
import Signup from '../dashboard/signupPage/Signup'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
       <NavSection />
      <NavLinks />
      
      <section className='error_bg_height'>
        <Row className='d-flex justify-content-center'>
            <Col lg={12} className='text-center p-5'>
              <h1 className='error_title'>404 NOT FOUND</h1>
              <Link to='/'>
              <Button className='error_button mt-5 rounded-1'>GO TO HOMEPAGE</Button>
              </Link>
            </Col>
        </Row>
      </section>
      <FoodItems />
      <Footer />
    </>
  )
}

export default ErrorPage
