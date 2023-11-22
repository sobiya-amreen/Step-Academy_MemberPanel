import React from 'react'
import Footer from '../../DashBoard/Footer/Footer'
import ResponsiveMenu from '../../DashBoard/ResponsiveMenu/ResponsiveMenu'
import Header from '../../DashBoard/Header/Header'
import { Link } from 'react-router-dom'
import "./Spoken.css"
const SpokenEnglish = () => {
  return (
    <div>
    <Header/>
 {/* <!-- Responsive Menu --> */}

<ResponsiveMenu/>
{/* <!-- Responsive menu --> */}
   <div className='carouseelBox'>
     {/* <img classNameName='aboutCarouselImage' src='https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/> */}
     <div className="row">
                 <div className="col">
                     <div className="home_content text-center">
                         {/* <div className="home_title">Spoken English</div> */}
                         {/* <div className="breadcrumbs">
                             <ul>
                                 <li><a href="index.html">Home</a></li>
                                 <li>Spoken English</li>
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
                        <div className="news_post_image"><img className='CourseImage' src="https://as1.ftcdn.net/v2/jpg/02/20/21/40/1000_F_220214030_D3P5eFfXvY8pz8SEhPeQh27xvbJ1jX1n.jpg" alt=""/></div>
                        <div className="news_post_body">
                            {/* <div className="news_post_date"><a href="#">April 02, 2018</a></div> */}
                            {/* <div className="news_post_title"><a href="#">100% Guarantee to Speak in English Fluently</a></div> */}
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
                             <p>
                             Whether you want to accelerate your career, prepare for study or improve your social interactions, our online and face-to-face courses will help you achieve your goals. The ability to speak English will be a great blessing in your life. English skills can improve your daily life, help you pursue educational opportunities, lead to better employment, and expand your circles of friends and acquaintances.
                             The course covers all aspects of improving everyday spoken English and include listening comprehension, fluency and speaking as well as essential grammar skills, pronunciation and widening the vocabulary range.
                             This course specifically caters for those who need to improve their English for specific professional or academic purposes. Our qualified and experienced Business English teachers will adjust the courses to suit both group and individual requirements. Closed group classes for specific purposes may also be pre-arranged. Students will focus on how English language structures are formed thereby promoting accuracy in speaking and writing. Students will also improve their listening skills enabling them to understand from a variety of formal and informal situations.

                             </p>
								                            </div>
                            {/* <div className="news_post_link"><a href="#">Read More</a></div> */}
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
                        
                        <p><strong className="text-black d-block">Teacher:</strong>Sandesh Mukhedkar</p>
                        <p className="mb-5"><strong className="text-black d-block">Hours:</strong>Time - 10 am to 8 PM</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque dolore libero corrupti! Itaque, delectus?Spoken English courses are designed to improve one's oral communication skills in the English language.</p>
                        <p>They focus on enhancing vocabulary, pronunciation, fluency, and overall confidence when speaking English.</p>
    
                        <ul className="ul-check primary list-unstyled mb-5">
                            <li> <i className="fa fa-angle-right Arrow" aria-hidden="true"></i>  Experienced Instructors</li>
                            <li> <i className="fa fa-angle-right Arrow" aria-hidden="true"></i>  Conversational Practice  </li>
                            <li> <i className="fa fa-angle-right Arrow" aria-hidden="true"></i> Pronunciation Training</li>
                            <li> <i className="fa fa-angle-right Arrow" aria-hidden="true"></i> Vocabulary Building</li>
                            <li> <i className="fa fa-angle-right Arrow" aria-hidden="true"></i> Interactive Learning </li>
                        </ul>

                        <p>
                       <Link to="/admission_form"> <button className="contact_button"><span>Enroll</span><span className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></span></button></Link>
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


   <Footer/>


 </div>
  )
}

export default SpokenEnglish
