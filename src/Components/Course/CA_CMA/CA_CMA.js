import React from "react";
import Footer from "../../DashBoard/Footer/Footer";
import ResponsiveMenu from "../../DashBoard/ResponsiveMenu/ResponsiveMenu";
import Header from "../../DashBoard/Header/Header";
import { Link } from "react-router-dom";
import './CA_CMA.css'
const CA_CMA = () => {
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
              <div className="home_title">CA, CMA</div>
              {/* <div className="breadcrumbs">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>CA, CMA</li>
                </ul>
              </div> */}




















            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div>

          {/* <a> <img src="https://www.shutterstock.com/image-vector/check-mark-valid-seal-icon-260nw-1028473135.jpg" />              </a> */}
          <p>Duration : 24 weeks</p>

        </div>
        <hr />
        <h5>CA Foundation Examination Complete Course Guide</h5>
        <p>CA Foundation is an entry-level exam designed for students who want to pursue the CA Course. CA Foundation is a part of the revised scheme introduced by the ICAI. Exams for the CA Foundation will be conducted twice in a year i.e. in May and November.  A student after passing the 10th examination can register for the CA Foundation course but can appear only after 12th exam. There are overall 4 subjects in CA FOUNDATION exam out of which 2 are subjective and 2 are objective-based. The complete CA Course is of 4.5 years duration and after clearing CA FOUNDATION exam, CA INTERMEDIATE, ARTICLESHIP AND CA FINAL is to be completed.</p>

        <h5>Eligibility for Registration in CA Foundation</h5>
        <p>Exams for the CA Foundation will conduct twice in a year i.e. MAY and November. A student can register in this course after passing 10th examination constituted by the law or recognized by the Central Government and appear in the Foundation examination after passing 12th Examination.

          <br />

          The students are required to undergo through a study period of four months after the registration in the CA Foundation course to appear in the Exams. That means if one wants to appear in the May 2021 examinations then he is required to get himself register on or 31st December 2020 or if one wants to appear in November 2021 examinations then he will be required to get registered in this course before 30th June 2021.

          <br />
          Top of Form
          <br />
          Bottom of Form

        </p>


        <h5>CA Foundation Registration Procedure</h5>

        <p>You can register for the CA Foundation course through the ICAI portal under the Course registration forms under the student’s tab by making the requisite payment. Once the payment is successful it will automatically generate the form which is required to get print.</p>


        <h5>DOCUMENTS REQUIRED:</h5>

        <p>
          <ol>
            <li>Attested Copy of the Marksheet of class 10th examination issued by the respective board.
            </li>
            <li>You need to affix a latest coloured photograph on the hard copy of such registration form.
            </li>
            <li>
              If the student is Resident of another country, then attested copy of proof of Nationality.
            </li>

            <li>Attested copy of proof of special category certificate i.e. ST/SC/OBC, differently-abled</li>


          </ol>

        </p>

        <h5>CA Foundation Registration Fees</h5>

        <p>A student can register for the CA Foundation course with the prescribed fees –

        </p>

        <table >

          <tr>
            <th> S.No.</th>
            <th>Details of Fees</th>
            <th>	Rupees</th>
            <th>For Foreign Students (US $)</th>

          </tr>

          <tr>

            <td>    1.</td>
            <td>Cost of Foundation Prospectus</td>

            <td>200</td>

            <td>20</td>


          </tr>

          <tr>

            <td>    2.</td>
            <td>Foundation Registration Fees</td>

            <td>9000</td>

            <td>700</td>


          </tr>

          <tr>

            <td>    3.</td>
            <td>Subscription for Students Journal (For one Year- Optional)</td>

            <td>200</td>

            <td>20</td>


          </tr>
        </table>

        <p>Once the above registration process is completed the Study Material will be dispatch to the candidates through the Centralised Dispatch System (CDS).</p>

        <h5>Duration of Study Period for CA Foundation.</h5>

        <p>
          Once your registration is done start preparing rigorously for the CA Foundation exams. Don’t just think to crack the exam instead of it prepare to achieve AIR. Work hard with strong determination and passion from the beginning so that you can crack every level of CA exam in the first attempt.

          If you are appearing class 12th on March 21, you can appear CA foundation in May/June 2021 and if you are appearing class 12th in March 2022, you can appear for CA foundation in May 2022. Different batches are planned to keep in mind the student’s preparation efficiently as per their requirement.
        </p>


        <table >
          <tr>
            <th>CLASS</th>
            <th>BATCH</th>

          </tr>
          <tr>
            <td> 11th</td>
            <td>11TH + 12TH + CA FOUNDATION</td>

          </tr>

          <tr>
            <td> 12TH</td>
            <td>12TH + CA FOUNDATION</td>

          </tr>
          <tr>
            <td>  AFTER 12TH</td>
            <td>1CA FOUNDATION</td>

          </tr>
        </table>

        <p>A student can join any of the above batches for preparation of CA foundation exam. It is suggested for a student to start the preparation at the earliest so that a strong foundation can be built up which is much needed for CA course and to crack the CA exams with good marks.</p>


        <h5>CA Foundation Exam Pattern and Papers</h5>

        <p>The first two papers (accounting and law) are subjective, consisting of theory and practical questions while the latter two (mathematics and economics) are objective with MCQs. Negative marking of 0.25 will continue to remain in the objective papers as per the revised scheme.

          ICAI has also given a detailed Revised Exam Pattern with marks and weightage distribution in all four subjects. You must refer to the latest Exam Pattern before starting your preparations for the Foundation Exams.</p>




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

      {/* course start */}
      {/* <!-- Courses --> */}

      {/* <div className="news">
        <div className="container">
          <div className="row">
            {/* <!-- News Posts --> */}
      {/* <div className="col-lg-8">
              <div className="news_posts"> */}
      {/* <!-- News Post --> */}
      {/* <div className="news_post"> */}
      {/* <div className="news_post_image">
                    <img src="images/news_6.jpg" alt="" />
                  </div> */}
      {/* <div className="news_post_body"> */}
      {/* <div className="news_post_date">
                      <a href="#">April 02, 2018</a>
                    </div> */}
      {/* <div className="news_post_title">
                      <a href="#">CA, CMA</a>
                    </div> */}


      {/* <div className="news_post_text">
                      <p>
                        While Choosing a Professional Path Is All About What
                        Your Interests Are and Where Your Aptitude Lies In,
                        However, Aligning Your Passion with Your Career Is a
                        Good Way to Go About It. So If Finance/accounting Is
                        Your Calling, Then Chartered Accountancy, or CA, as It
                        Is Popularly Known, Is a Much Sought-After Profession
                        and an Attractive Option to Consider.
                      </p>

                      <p>
                        Modern Times Have Transformed the Corporate World with
                        More and More Companies Taking the Public Issue Route to
                        Finance Their Project or Expansion Plans. in This
                        Context, the Prospect of CS Can Be Ascertained by the
                        Fact That All Companies Who Seek Listing on Stock
                        Exchange Are Mandated to Appoint a Whole-Time Company
                        Secretary. Not Stopping at That, as a Multidisciplinary
                        Professional, a CS Renders Services in Many More Areas
                        as Well.
                      </p>

                      <p>
                        Every Business Aims to Reach Specific Financial Goals It
                        Has Set for Itself. That’s Where Proper Budgeting Comes
                        into the Picture, Without Which Meeting Its Target Would
                        Be Inconceivable. Therefore, Every Entrepreneur Aims to
                        Increasing Return on Investment (Roi), So That The
                        Business Can Accomplish Its Target (Or Specific Goals)
                        While Expanding Its Reach. It’s Here That Cost
                        Accounting Can Contribute to the Better Management of a
                        Company’s Operations.
                      </p>
                    </div> */}
      {/* <div className="news_post_link">
                      <a href="#">Read More</a>
                    </div> */}
      {/* </div>
                </div>
              </div>
            </div> */}

      {/* <!-- Sidebar --> */}
      {/* <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar_search"> */}
      {/* <form action="#" id="sidebar_search_form" className="sidebar_search_form">
                            <input type="text" className="sidebar_search_input" placeholder="Search" required="required"/>
                            <button className="sidebar_search_button"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form> */}
      {/* </div> */}

      {/* blog start */}
      {/* // <div className="sidebar_latest_posts courseDetail"> */}
      {/* <div className="sidebar_title">Latest Posts</div> */}
      {/* // <div className="latest_posts"> */}
      {/* <h2 className="section-title-underline mb-5">
                      // <span>Course Details</span>
                    // </h2> */}

      {/* <p>
                    //   <strong className="text-black d-block">Teacher:</strong>
                    //   Sandesh Mukhedkar
                    // </p> */}
      {/* <p className="mb-5">
                    //   <strong className="text-black d-block">Hours:</strong>{" "}
                    //   Time - 10 am to 8 PM
                    // </p> */}
      {/* <p>
                    // Both CA and CMA courses are highly prestigious and recognized in the field of accounting and finance, equipping individuals with in-depth knowledge and skills to excel in the accounting profession and related industries.

                    // </p> */}
      {/* <p>
                    // Our facilities are as follows

                    // </p> */}

      {/* <ul className="ul-check primary list-unstyled mb-5">
                    //   <li>
                    //     {" "}
                    //     <i
                    //       className="fa fa-angle-right Arrow"
                    //       aria-hidden="true"
                    //     ></i>{" "}
                    //    Through Course Coverage
                    //   </li>
                    //   <li>
                    //     {" "}
                    //     <i
                    //       className="fa fa-angle-right Arrow"
                    //       aria-hidden="true"
                    //     ></i>{" "}
                    //     Interactive Learning{" "}
                    //   </li>
                    //   <li>
                    //     {" "}
                    //     <i
                    //       className="fa fa-angle-right Arrow"
                    //       aria-hidden="true"
                    //     ></i>{" "}
                    //     Exam-oriented Preparation
                    //   </li>
                    //   <li>
                    //     {" "}
                    //     <i
                    //       className="fa fa-angle-right Arrow"
                    //       aria-hidden="true"
                    //     ></i>{" "}
                    //     Doubt Clearing Sessions
                    //   </li>
                    //   <li>
                    //     {" "}
                    //     <i
                    //       className="fa fa-angle-right Arrow"
                    //       aria-hidden="true"
                    //     ></i>{" "}
                    //     Online Learning Resources{" "}
                    //   </li>
                    // </ul> */}

      {/* <p>
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
      </p> */}
      <Footer />
    </div>
  )
}
//       </div>
//     </div>
//   </div>
// </div>

// {/* <!-- Pagination --> */ }
//   </div>
// </div> 
{/* Course Ends */ }

// </div >


export default CA_CMA;
