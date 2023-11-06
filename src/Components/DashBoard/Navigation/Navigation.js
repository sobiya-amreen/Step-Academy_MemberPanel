import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton';


const Navigation = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
  return (
    <div>
       {/* <!-- Header Content --> */}
       <div className="header_container">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header_content d-flex flex-row align-items-center justify-content-start">
                            <div className="logo_container">
                                <a href="#">
                                    <div className="logo_content d-flex flex-row align-items-end justify-content-start">
                                        <div className="logo_img">
                                         <Link to="/">   <img className='logoImage' src="images/steplogo.png" alt=""/> </Link>
                                            </div>
                                        {/* <div className="logo_text">learn</div> */}
                                    </div>
                                </a>
                            </div>
                            <nav className="main_nav_contaner ml-auto">
                                <ul className="main_nav">
                                    <li ><Link  onClick={scrollToTop}to="/">Home</Link></li>

                                    <li className='drop'>
                            <DropdownButton id="dropdown-item-button" title=" ADMISSION">
                             <Link onClick={scrollToTop} to="/enquiry_form">ENQUIRY FORM</Link>
                             <Link onClick={scrollToTop} to="/admission_form">ADMISSION FORM</Link>
                             </DropdownButton>
                            </li>



                            <li className='drop'>
                            <DropdownButton id="dropdown-item-button" title=" ABOUT US">
                             <Link onClick={scrollToTop}  to="/about_us">   About Us</Link>
                             <Link onClick={scrollToTop} to="/why_choose_us">  Why Choose Us</Link>
                             </DropdownButton>
                            </li>


                                    
                             <li><Link onClick={scrollToTop} to="/our_result">Our Result</Link></li>




                           <li className='drop'>
                            <DropdownButton id="dropdown-item-button" title="OUR COURSES ">
                            <Link onClick={scrollToTop} to="/eleven_twelve_commerce">11th & 12th Commerce</Link>
                                   <Link onClick={scrollToTop} to="/eleven_twelve_science">11th & 12th Science CET, JEE</Link>
                                   <Link onClick={scrollToTop} to="/bcom_bba_bca">BCOM, BBA, BCA</Link>
                                   <Link onClick={scrollToTop} to="/mba_mcom">MBA, MCOM</Link>
                                   <Link onClick={scrollToTop} to='/ca_cma'>CA, CMA</Link>
                                   <Link onClick={scrollToTop} to="/dmit_career_counseling">DMIT & Career Counseling</Link>
                                   <Link onClick={scrollToTop}  to="/spoken_english">Spoken English</Link>
                                   <Link onClick={scrollToTop} to="/costing_taxes">Costing & Taxes</Link>
                                
                             </DropdownButton>
                            </li>





                                    <li><Link onClick={scrollToTop} to="/contact">Contact Us</Link></li>
                                </ul>
                               
    
                                {/* <!-- Hamburger --> */}
    
                                <div className="hamburger menu_mm">
                                    <i className="fa fa-bars menu_mm" aria-hidden="true"></i>
                                </div>
                            </nav>
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
      	
    </div>
  )
}

export default Navigation
