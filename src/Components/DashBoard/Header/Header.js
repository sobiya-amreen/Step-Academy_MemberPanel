import React from 'react'
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div >
            {/* <!-- Header --> */}

            <header className="header ">

                {/* <!-- Top Bar --> */}
                <div className="top_bar hed">
                    <div className="top_bar_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                                        <ul className="top_bar_contact_list mr">
                                            {/* <Link to="/enquiry_form" style={{cursor:"pointer"}}>  <li><div className="question">Have any questions?</div></li></Link> */}



                                            <div className='phones'>

                                                <li>
                                                    <i className="fa fa-phone phoneIcon" aria-hidden="true"></i>
                                                </li>


                                                <li>
                                                    <div> +91 84466 00051 <br />+91 83293 87441</div>


                                                </li>
                                            </div>

                                            <div className='emails'>
                                                <li>
                                                    <i class="fa fa-envelope emailIcon" aria-hidden="true"></i>
                                                </li>
                                                <li>
                                                    <div className='emailId'>stepsacademy2129@gmail.com</div>
                                                </li>
                                            </div>

                                            {/* <div className='reg mr'         >
                                                <Link to="/registration"> <div className="button join_button bor"><a href="#">register now<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div></a></div></Link>
    
                                            </div> */}
                                             <Link to="/registration"> <div className="button join_button headerregistration"><a href="#">register now<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div></a></div></Link>

                                           

                                            {/*  */}

                                        </ul>

                                     

                                        <div className='whatsUpDiv'>
                                        <li className='icons'>


                                        <a className='whatsupheader blink' href="https://wa.me/918329387441" target="_blank"> <span className='whatsupheading '>Join Whatsup group</span>
                                                 <i className="fa fa-whatsapp headerWhatsupIcon" aria-hidden="true"></i>
                                          </a>

                                                <a href="https://www.facebook.com/stepsacademypune?mibextid=b06tZ0" target="_blank" >
                                                    <i className="fa fa-facebook socialicons" aria-hidden="true"></i>
                                                </a>

                                                <a href="https://youtube.com/@stepsacademy610?si=AY9AKD6s-9gkMJJS" target="_blank">
                                                    <i className="fa fa-youtube socialicons" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                        </div>

                                        {/* </div> */}





                                        <div className="top_bar_login ml-auto">


                                            <ul>
                                                {/* <Link to='/registration'> <li className='formLinks'>Register</li></Link> <span className='slash'>/</span>
                                                <Link to='/login'> <li className='formLinks'>Login</li></Link> */}
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Navigation />
            </header>

            {/* <!-- header end --> */}

        </div>
    )
}

export default Header
