import React from "react";
import ResponsiveMenu from "../../DashBoard/ResponsiveMenu/ResponsiveMenu";
import Header from "../../DashBoard/Header/Header";
import "./ElevenTwelveCommerce.css";
import Footer from "../../DashBoard/Footer/Footer";
import { Link } from "react-router-dom";

const ElevenTwelveCommerce = () => {
  return (
    <div>
      <Header />
      {/* <!-- Responsive Menu --> */}

      <ResponsiveMenu />
      {/* <!-- Responsive menu --> */}
      <div className="carouselBox">
        {/* <img classNameName='aboutCarouselImage' src='https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/> */}
        <div className="row">
          <div className="col">
            <div className="home_content text-center">
              {/* <div className="home_title">11th & 12th Commerce</div> */}
              {/* <div className="breadcrumbs">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Eleven Twelve Commerce</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* course start */}
      {/* <!-- Courses --> */}

      <div className="news">
        <div className="container">
          <div className="row">
            {/* <!-- News Posts --> */}
            <div className="col-lg-8">
              <div className="news_posts">
               

                {/* <!-- News Post --> */}
                <div className="news_post">
                  <div className="news_post_image">
                    <img className="CourseImage" src="images/commerce.jpg" alt="" />
                  </div>
                  <div className="news_post_body">
                    {/* <div className="news_post_date"><a href="#">April 02, 2018</a></div> */}
                    {/* <div className="news_post_title">
                      <a href="#">Commerce</a>
                    </div> */}
                    <div className="news_post_meta d-flex flex-row align-items-start justify-content-start">
                      {/* <div className="news_post_author">By <a href="#">William Smith</a></div> */}
                      {/* <div className="news_post_comments"><a href="#">3 Comments</a></div> */}
                      <div className="news_post_tags">
                        {/* <span>in </span> */}
                        {/* <ul>
                                        <li><a href="#">Social Media</a></li>
                                    </ul> */}
                      </div>
                    </div>
                    <div className="news_post_text">
                      {/* <p>
                        {" "}
                        Steps Academy Coaching Classes has Been the Best
                        Commerce Class in Pimpri- Chinchwad Over the Last 10
                        Years and Has Been Guiding and Nurturing Its Students in
                        Every Subject Which Pushes Them to Flourish in Their
                        Professional Careers. With Trained Teachers, Who Are
                        Highly Experienced and Competent in Their Respective
                        Subjects, We Make Sure Every Student Is Imparted with
                        Thorough and Quality Content to Thrive in Their
                        Respective Standards.
                      </p>
                      <p>
                        Steps Academy Is the Best Coaching Classes Center for
                        Mathematics, English, and Accounting: We Provide
                        Coaching Classes for 11th to 12th Class Commerce
                        Students in Maths, Economics, and Accounting. It Laid
                        the Foundation of Their Career, Which Must Be Strong. We
                        Train the Students and Guide Them to Choose Their
                        Careers in the Upcoming Years According to the Skills
                        They Are Good At.
                      </p> */}



<ul className="ul-check primary list-unstyled mb-5">
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        11th abd 12th Regular Batch
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Accounts{" "}
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Economics
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Organization Of Commerce Management
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Study Materials{" "}
                      </li>
                    </ul>



                    </div>
                    {/* <div className="news_post_link">
                      <a href="#">Read More</a>
                    </div> */}
                  </div>
                </div>

                {/* <!-- News Post --> */}
              </div>
            </div>

            {/* <!-- Sidebar --> */}
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar_search">
                  {/* <form action="#" id="sidebar_search_form" className="sidebar_search_form">
                            <input type="text" className="sidebar_search_input" placeholder="Search" required="required"/>
                            <button className="sidebar_search_button"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form> */}
                </div>
                {/* <div className="sidebar_categories">
                        <div className="sidebar_title">Categories</div>
                        <div className="sidebar_links">
                            <ul>
                                <li><a href="#">Education</a></li>
                                <li><a href="#">Social Media</a></li>
                                <li><a href="#">Lifestyle & Events</a></li>
                                <li><a href="#">Online Learning</a></li>
                                <li><a href="#">Uncategorized</a></li>
                            </ul>
                        </div>
                    </div> */}
                {/* blog start */}
                <div className="sidebar_latest_posts courseDetail">
                  {/* <div className="sidebar_title">Latest Posts</div> */}
                  <div className="latest_posts">
                    <h2 className="section-title-underline mb-5">
                      <span>Course Details</span>
                    </h2>

                    <p>
                      <strong className="text-black d-block">Teacher:</strong>
                      CA Anmol Shinde
                    </p>
                    <p>
                     
                      CMA Amit Nikam
                    </p>
                    <p>
                     
                      CA Sandesh Jain
                    </p>
                    <p>
                      
                      professor Ashwind Gudsurkar
                    </p>
                    <p>
                      
                      professor Bhakti Joshi
                    </p>
                    <p>
                      
                      professor Savita Jadhav
                    </p>
                    <p>
                      
                      professor Pradeep Bhawar
                    </p>
                    <p className="mb-5">
                      <strong className="text-black d-block">Hours:</strong>{" "}
                      Time - 10 am to 8 PM
                    </p>
                    {/* <p>
                    11th and 12th grades are crucial for students pursuing commerce as these lay the foundation for future studies and careers in business, finance, and economics.
                    </p>
                    <p>
                    Students in the commerce stream develop skills in financial management, accounting, business principles, and economic analysis.
                    </p> */}

                    <ul className="ul-check primary list-unstyled mb-5">
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        11th abd 12th Regular Batch
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Accounts{" "}
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Economics
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Organization Of Commerce Management
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Study Materials{" "}
                      </li>
                    </ul>

                    <p>
                      <Link to="/admission_form">
                        {" "}
                        <button className="contact_button">
                          <span>Enroll</span>
                          <span className="button_arrow">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Pagination --> */}
        </div>
      </div>
      {/* Course Ends */}

      <Footer />
    </div>
  );
};

export default ElevenTwelveCommerce;
