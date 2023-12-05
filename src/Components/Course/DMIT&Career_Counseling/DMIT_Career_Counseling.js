import React from "react";
import Footer from "../../DashBoard/Footer/Footer";
import Header from "../../DashBoard/Header/Header";
import ResponsiveMenu from "../../DashBoard/ResponsiveMenu/ResponsiveMenu";
import { Link } from "react-router-dom";
import "./DMIT.css"

const DMIT_Career_Counseling = () => {
  return (
    <div>
      <Header />
      {/* <!-- Responsive Menu --> */}

      <ResponsiveMenu />
      {/* <!-- Responsive menu --> */}
      <div className="ccarouselBox">
        {/* <img classNameName='aboutCarouselImage' src='https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/> */}
        <div className="row">
          <div className="col">
            <div className="home_content text-center">
              {/* <div className="home_title">DMIT Career Counseling</div> */}
              {/* <div className="breadcrumbs">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>DMIT Career Counseling</li>
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
                    <img className="CourseImage" src="https://as2.ftcdn.net/v2/jpg/02/26/92/09/1000_F_226920923_TAxAE39gyrQ2lFjtJB8g2YVjEvjxCriW.jpg" alt="" />
                  </div>
                  <div className="news_post_body">
                    {/* <div className="news_post_date">
                      <a href="#">April 02, 2018</a>
                    </div> */}
                    {/* <div className="news_post_title">
                      <a href="#">DMIT & Career Counseling</a>
                    </div> */}
                    <div className="news_post_meta d-flex flex-row align-items-start justify-content-start">
                      {/* <div className="news_post_author">
                        By <a href="#">William Smith</a>
                      </div> */}
                      {/* <div className="news_post_comments"><a href="#">3 Comments</a></div> */}
                      <div className="news_post_tags">
                        {/* <span>in </span> */}
                        {/* <ul>
                                        <li><a href="#">Social Media</a></li>
                                    </ul> */}
                      </div>
                    </div>
                    <div className="news_post_text">
                      <p>
                        {" "}
                        Steps Academy in Career Counseling in Pimpri- Chinchwad
                        has the best Career Counselors who offer the Best
                        Educational Career Counseling after the 10th, 12th,
                        Graduation, Post Graduation. The world of work is
                        evolving every day. Where AI is posing threat to
                        entry-level jobs, many conventional career options have
                        come up, which never existed before. You should consult
                        a Career Counsellor before things move out of your
                        hands. Statistics show that number of dropouts from
                        Colleges and Universities is ever increasing. And you
                        need to take this step to choose a career counselor at
                        the right time. If the first button of the shirt is put
                        in the right hole, all other buttons also fall in place.
                        Remember, there is no reverse gear in life.
                      </p>
                    </div>
                    {/* <div className="news_post_link">
                      <a href="#">Read More</a>
                    </div> */}
                  </div>
                </div>
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
                  
                    <p className="mb-5">
                      <strong className="text-black d-block">Hours:</strong>{" "}
                      Time - 10 am to 8 PM
                    </p>
                    <p>
                      DMIT (Dermatoglyphics Multiple Intelligence Test) counseling is a service that assesses an individual's unique fingerprints and brain development to determine their multiple intelligences.
                    </p>
                    <p>
                    It helps individuals understand their strengths, weaknesses, and potential areas of development, enabling them to make informed decisions about education and career choices.
                    </p>

                    <ul className="ul-check primary list-unstyled mb-5">
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Certified Counselors
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Detailed Analysis{" "}
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Career Guidance:
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Parental Involvement
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                       Customized Strategies{" "}
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
          {/* <div className="row">
            <div className="col">
              <div className="news_pagination">
                <ul>
                  <li>
                    <a href="#">01</a>
                  </li>
                  <li className="active">
                    <a href="#">02</a>
                  </li>
                  <li>
                    <a href="#">03</a>
                  </li>
                  <li>
                    <a href="#">04</a>
                  </li>
                  <li>
                    <a href="#">05</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* Course Ends */}

      <Footer />
    </div>
  );
};

export default DMIT_Career_Counseling;
