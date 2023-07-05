import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import junk from '../../assets/pageOne/junk.png'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className='bg-black pb-5 '>
                <Container className='bg-black pt-2 pt-md-0' >
                    <Row className='mx-auto flex justify-content-center pt-4'>
                        <Col lg={12} className='w-44'>
                        <Link to='/'>
                        <img src={junk} alt="" />
                        </Link>
                            
                        </Col>
                        <Col lg={12} className='text-center py-md-3 pt-5 pb-2  footer_icon_color'>
                            <Link to='https://www.instagram.com/junksunshinecoast/'>
                            <span><i class="fa-brands fa-instagram mx-4"></i></span>
                            </Link>
                            <Link to='https://www.tiktok.com/@junksunshinecoast'>
                            <span><i class="fa-brands fa-tiktok"></i></span>
                            </Link>
                            <Link to='https://www.facebook.com/junksunshinecoast'>
                            <span><i class="fa fa-facebook mx-4" aria-hidden="true"></i></span>
                            </Link>
                           
                        </Col>
                        <Col lg={12} className='text-center py-2'>
                            <h6 className='bottom_para'>COPYRIGHT 2023 JUNK SUNSHINE COAST</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer