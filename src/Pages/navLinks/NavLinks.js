import { Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import MainSection from '../dashboard/mainSection/MainSection';
import junk from '../../assets/pageOne/junk.png'
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import './NavLinks.css'
const NavLinks = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpentwo, setIsOpentwo] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleToggletwo = () => {
        setIsOpentwo(!isOpentwo);
    };

    return (
        <>
            {/* desktop view  */}
            <Nav className='navlinks_bg_color py-md-3 py-lg-4 ' id='bg_color'>
                <Container className='py-2 d-none d-md-block'>
                    <ul className='text-center'>
                        <Link to='https://xzkc27.p3cdn1.secureserver.net/wp-content/uploads/2023/05/FINAL-JUNK-Main-Menu-May-2023_compressed.pdf' id='links_text_color' className='pe-3'>MENU</Link>
                        {/* <Link >
                            <div class="dropdown pe-3">
                                <Link > <span id='links_text_color'><i class="fa fa-angle-down ps-2" style={{ fontSize: "18px" }}></i></span>  </Link>
                                <div class="dropdown-content">
                                  <Link to=''>
                                  <p className='my-2 py-2 px-4 text-start'></p> 
                                  </Link> 
                                    <p className='py-2 px-4 mb-2 text-start'>BOOK SIPPY</p>  
                                </div>
                            </div>
                        </Link> */}
                        <div class="dropdown pe-3">
                            <Link> <span id='links_text_color'>BOOK A TABLE<i class="fa fa-angle-down ps-2" style={{ fontSize: "18px" }}></i></span></Link>
                            <div class="dropdown-content">
                                <Link to='https://bookings.nowbookit.com/?accountid=bba36415-c7ae-477e-b528-aef9e8cade75&venueid=1752&theme=dark&colors=hex,dd2c00,ffd600&font=Oxygen'> <p className='my-2 py-2 px-3 text-start' >BOOK MAROOCHY</p></Link>
                                <Link to='https://bookings.nowbookit.com/?accountid=bba36415-c7ae-477e-b528-aef9e8cade75&venueid=8580&theme=dark&colors=hex,dd2c00,ffd600&font=Oxygen'> <p className='py-2 px-3 text-start mb-2'>BOOK SIPPY</p> </Link>
                            </div>
                        </div>
                        <div class="dropdown pe-3">
                            <Link> <span id='links_text_color'>ORDER TAKEAWAY<i class="fa fa-angle-down ps-2" style={{ fontSize: "18px" }}></i></span></Link>
                            <div class="dropdown-content">
                                <Link to='https://junk.bitebusiness.com/'> <p className='my-2 py-2 px-3 text-start' >MAROOCHYDORE</p></Link>
                                <Link to='https://junk.bitebusiness.com/'> <p className='py-2 px-3 text-start mb-2'>SIPPY DOWN</p> </Link>
                            </div>
                        </div>
                        <Link to='https://app.gift-it.com.au/buy/junk-sunshine-coast?' id='links_text_color' className='pe-3'>GIFT CARDS</Link>
                        {/* <Link to='/details' id='links_text_color' className='pe-3'>JUNK OF DETAIL ITEMS</Link> */}
                        {/* <Link to='/chefs-of-junk' id='links_text_color' className='pe-3'>CHEF OF JUNK</Link> */}
                        <Link to='contact' id='links_text_color' className='pe-3'>CONTACT</Link>
                    </ul>
                </Container>
            </Nav>
            {/* desktop view end  */}

            <Nav className='bg_mobile_color'>
                <div className="container navlinks_bg_color d-block d-md-none">
                    <div className="row  navlinks_bg_color">
                        <div className="col-11 mx-auto d-flex justify-content-sm-between justify-content-between">
                            <div className="col-sm-4 col-4 text-sm-center">
                                <img src={junk} alt="" className='img-fluid' />
                            </div>
                            <div className="col-sm-4 text-sm-end align-self-center align-self-sm-center me-5" onClick={handleShow}>
                                <i class="fa fa-bars bar_size1"></i>
                            </div>
                        </div>

                    </div>
                </div>
                <Offcanvas show={show} onHide={handleClose} placement="top" className='navlinks_bg_color bg_height'>
                    <Offcanvas.Body>
                        <Container  >
                            <div className="col-12 text-end bar_size" onClick={handleClose}>
                            </div>
                            <ul className='text-center py-2 position-relative nav_links_center'>
                                <div className='pb-3'>
                                    <Link to='https://xzkc27.p3cdn1.secureserver.net/wp-content/uploads/2023/05/FINAL-JUNK-Main-Menu-May-2023_compressed.pdf' id='links_text_color' className='pe-3'>MENU</Link>
                                </div>
                                <div className='pb-2'>
                                    <button id='links_text_color' className='pb-3' onClick={handleToggle}>BOOK A TABLE <i class={` ${!isOpen ? "fa-solid fa-caret-down ms-2" : "fa-solid fa-caret-up ms-2"}`}></i>
                                    </button>
                                    {isOpen && (
                                        <div className="offcanvasS position-relative inner_links">
                                        <Link to='https://bookings.nowbookit.com/?accountid=bba36415-c7ae-477e-b528-aef9e8cade75&venueid=1752&theme=dark&colors=hex,dd2c00,ffd600&font=Oxygen'> <p className='px-3 text-center' >BOOK MAROOCHY</p></Link>
                                        <Link to='https://bookings.nowbookit.com/?accountid=bba36415-c7ae-477e-b528-aef9e8cade75&venueid=8580&theme=dark&colors=hex,dd2c00,ffd600&font=Oxygen'>    <p className=' px-3 text-center'  >BOOK SIPPY</p></Link>
                                        </div>
                                    )}
                                </div>
                                <div className='pb-2'>
                                    <button id='links_text_color' className='pb-3' onClick={handleToggletwo}>ORDER TAKEAWAY <i class={` ${!isOpentwo ? "fa-solid fa-caret-down ms-2" : "fa-solid fa-caret-up ms-2"}`}></i></button>
                                    {isOpentwo && (
                                        <div className="offcanvasS position-relative inner_links">
                                        <Link to='https://junk.bitebusiness.com/'> <p className='px-3 text-center'  >MAROOCHYDORE</p> </Link>
                                        <Link to='https://junk.bitebusiness.com/'>    <p className=' px-3 text-center' >SIPPY DOWN</p></Link>
                                        </div>
                                    )}
                                </div>
                                <div className='pb-3'>
                                <Link to='https://app.gift-it.com.au/buy/junk-sunshine-coast?' id='links_text_color' className='pe-3'>GIFT CARDS</Link>
                                </div>
                                {/* <div className='pb-3'>
                                <Link to='/details' id='links_text_color' className='pe-3'>JUNK OF DETAIL ITEMS</Link>
                                </div> */}
                                <div>
                                    <Link to='/contact' id='links_text_color' className='pe-3'>CONTACT</Link>
                                </div>
                            </ul>
                        </Container>
                    </Offcanvas.Body>
                </Offcanvas>
            </Nav>

            {/* <MainSection /> */}
        </>
    )
}

export default NavLinks

