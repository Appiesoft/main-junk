import { useState,useEffect } from 'react';
import { Card } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import './Signup.css'
const Signup = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://forms.contacta.io/610e3d00bc2c830e37f0a82b.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    
        return () => {
          document.getElementsByTagName('head')[0].removeChild(script);
        };
      }, []);

    return (
        <div>
         <Card id='bg_color1' className='px-md-5 px-2 pt-md-4 pt-4  pb-3 rounded-0' >
                <Card.Body className='text-center mt-lg-0 mt-2'>
                    <Row className='d-md-flex d-lg-flex justify-content-md-center justify-content-lg-center'>
                        <Col lg={10} className='text_size_title mt-2 mt-md-0'><h2>Let’s be friends!</h2></Col>
                        <Col xs={11} md={11} lg={10} className=' mx-auto text_size_para mt-3'>
                            <h3> Sign up to our Junk Mail for our latest news, promotions and so much more!</h3>
                        </Col>
                    </Row>
                    <div class="row p-lg-4 p-md-4 p-3 mt-lg-4 mt-md-4 mt-4 mt-0">
                        {/* <div className="col-md-12 col-xs-12 col-lg-10 col-12 col-xxl-8 col-sm-10 mx-auto d-md-flex d-sm-flex justify-content-sm-between justify-content-lg-between"> */}
                            {/* <div class="col-md-6 col-lg-8 col-sm-7 col-12 text-start">
                                <label class="form-label text-white email_text mb-0 ">E-MAIL ADDRESS*</label>
                                <input type="email" class="form-control p-lg-2 p-md-2 p-2 rounded-0 border-1" />
                            </div>
                            <div class="col-md-4 col-lg-3 col-12 col-xs-5 col-sm-6 d-flex justify-content-start justify-content-sm-center
                             mx-auto align-self-end text-md-center mt-4 mt-sm-0 pt-2 mt-md-0 ms-xxl-3 ">
                                <button type="button" class="btn signup_btn border-0 text-black ms-sm-2"
                                >SIGN UP</button>
                            </div> */}
                        {/* </div> */}
                        
                        <div id="CONTACTA_610e3d00bc2c830e37f0a82b"></div>
                    </div>
                </Card.Body>
            </Card>
         
        
        </div>
    )
}

export default Signup
