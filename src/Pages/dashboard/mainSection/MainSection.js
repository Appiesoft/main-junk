import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './MainSection.css'
// import mainimage from '../../../assets/pageOne/mainimage.png'
// import mainimages from '../../../assets/pageOne/mainimages.png'
import FoodItems from '../foodItemsSection/FoodItems';
import { Link } from 'react-router-dom';

const MainSection = () => {
    return (
        <div>
            <section className='d-none d-xs-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block bg_image' >
                <Container>
                    <Row className='mx-auto pt-sm-4 pt-xxl-3'>
                        <Col xl={5} md={7} lg={7} xxl={4} className="mx-auto top_content d-lg-flex justify-content-lg-evenly align-items-center">
                            <h6 className='content_one  text-sm-center text-end me-lg-3 pel-g-2'>
                               <Link  to='https://junksunshinecoast.com.au/junk-sippy-downs/'>
                               SIPPY DOWNS
                               </Link> 
                            </h6>
                            <h6 className='content_one text-sm-center  my-sm-3 text-start ms-lg-4'>
                            <Link to='https://junksunshinecoast.com.au/junk-sippy-downs/'>
                            MAROOCHYDORE
                            </Link>
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='d-block d-xs-block d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none bg_image' >
                <Container>
                    <Row className='mx-auto pt-sm-4'>
                        <Col xs={12} className="flex-wrap pt-4 pt-xs-2 mx-auto top_content d-flex justify-content-evenly align-items-center">
                            <h6 className='content_one  pt-2 text-xm-center'>
                                SIPPY DOWNS
                            </h6>
                            <h6 className='content_one text-xm-center text-start pt-2 pt-xs-0 pt-md-0 ms-3'>
                                MAROOCHYDORE
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </section>
            <FoodItems />
        </div>
    )
}

export default MainSection