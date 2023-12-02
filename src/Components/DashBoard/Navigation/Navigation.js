import { React, useState } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import DMIT_Career_Counseling from '../../Course/DMIT&Career_Counseling/DMIT_Career_Counseling'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Navigation = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)


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
                                                <Link to="/">   <img className='logoImage' src="images/steplogo.png" alt="" /> </Link>
                                            </div>
                                            {/* <div className="logo_text">learn</div> */}
                                        </div>
                                    </a>
                                </div>
                                <nav className="navigation display">

                                    <div className={
                                        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                                    }>
                                        <ul className="main_nav">
                                            <li ><Link onClick={scrollToTop} to="/">Home</Link></li>

                                            <li className='drop'>
                                                <DropdownButton id="dropdown-item-button" title=" ADMISSION">
                                                    <Link onClick={scrollToTop} to="/enquiry_form">ENQUIRY FORM</Link>
                                                    <Link onClick={scrollToTop} to="/admission_form">ADMISSION FORM</Link>
                                                </DropdownButton>
                                            </li>




                                            {/* <li>
                                    <div className="dropdown">
                                   <a className='dropdown-toggle' type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    About Us
                                   </a>
                                   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                   <Link className="dropdown-item" to="/about_us">About Us</Link>
                                   <Link className="dropdown-item" to="/why_choose_us">Why Choose Us</Link>
                                  
                                   </div>
                                  </div>
                            </li> */}





                                            <li className='drop'>
                                                <DropdownButton id="dropdown-item-button" title=" ABOUT US">
                                                    <Link onClick={scrollToTop} to="/about_us">   About Us</Link>
                                                    <Link onClick={scrollToTop} to="/why_choose_us">  Why Choose Us</Link>
                                                </DropdownButton>
                                            </li>



                                            <li><Link onClick={scrollToTop} to="/Gallary">Gallary</Link></li>




                                            <li className='drop'>
                                                <DropdownButton id="dropdown-item-button" title="OUR COURSES ">
                                                    <Link onClick={scrollToTop} to="/eleven_twelve_commerce">11th & 12th Commerce</Link>
                                                    <Link onClick={scrollToTop} to="/eleven_twelve_science">11th & 12th Science CET, JEE</Link>
                                                    <Link onClick={scrollToTop} to="/bcom_bba_bca">BCOM, BBA, BCA</Link>
                                                    <Link onClick={scrollToTop} to="/mba_mcom">MBA, MCOM</Link>
                                                    <Link onClick={scrollToTop} to='/ca_cma'>CA, CMA</Link>
                                                    <Link onClick={scrollToTop} to="/dmit_career_counseling">DMIT & Career Counseling</Link>
                                                    <Link onClick={scrollToTop} to="/spoken_english">Spoken English</Link>
                                                    <Link onClick={scrollToTop} to="/costing_taxes">Costing & Taxes</Link>

                                                </DropdownButton>
                                            </li>





                                            <li><Link onClick={scrollToTop} to="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                    {/* <div className="search_button"><i className="fa fa-search" aria-hidden="true"></i></div> */}

                                    {/* <!-- Hamburger --> */}

                                    <button
                                        className="hamburger"
                                        onClick={() => {
                                            setIsNavExpanded(!isNavExpanded)
                                        }}
                                    ><i class="fa fa-bars" aria-hidden="true"></i>
                                        {/* hamburger svg code... */}
                                    </button>


                                    

                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header Content end */}
            {/* <!-- Header Search Panel --> */}
            {/* <div className="header_search_container">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header_search_content d-flex flex-row align-items-center justify-content-end">
                            <form action="#" className="header_search_form">
                                <input type="search" className="search_input" placeholder="Search" required="required"/>
                                <button className="header_search_button d-flex flex-column align-items-center justify-content-center">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>			
        </div> */}
            {/* <!-- Header Search Panel end --> */}
        </div>
    )
}

export default Navigation
