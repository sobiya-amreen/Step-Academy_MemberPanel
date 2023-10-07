import React from 'react'
import Header from '../../DashBoard/Header/Header'
import Footer from '../../DashBoard/Footer/Footer'
import Milestone from '../../DashBoard/Milestone/Milestone'
import './About.css'
import ResponsiveMenu from '../../DashBoard/ResponsiveMenu/ResponsiveMenu'

const AboutUs = () => {
  return (
   <div>
    <Header/>
    {/* <!-- Responsive Menu --> */}

<ResponsiveMenu/>
{/* <!-- Responsive menu --> */}
      <div className='carouselBox'>
        {/* <img classNameName='aboutCarouselImage' src='https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/> */}
        <div className="row">
					<div className="col">
						<div className="home_content text-center">
							<div className="home_title">About us</div>
							{/* <div className="breadcrumbs">
								<ul>
									<li><a href="index.html">Home</a></li>
									<li>About us</li>
								</ul>
							</div> */}
						</div>
					</div>
				</div>
      </div>




{/* our platForm start */}
<div className="about">
		<div className="container">
			<div className="row about_row row-lg-eq-height">
				<div className="col-lg-6">
					<div className="about_content">
						<div className="about_title">Your Solution for
                           A Bright Future</div>
						<div className="about_text">
							<p>Based in Sambhaji nagar Chinchwad PCMC Pune we are well-known for our quality education and highly
                               professional and remarkable faculties, which assure the success of our students.
                               Steps Academy was established in 2012 by Mr. Sandesh Mukhedkar (CMA INTERMEDIATE, CS EXECUTIVE, MBA FINANCE, MCOM) teaching for nearly                                10 years now.
                               Steps Academy is a leading coaching institution EXCLUSIVELY catering to the needs of
                               COMMERCE and SCIENCE STUDENTS. It has churned out thousands of students who are today
                               having successful careers.
                               Our objective is not only to provide conceptual exam oriented coaching but also to develop
                               skills among our student fraternity to enhance their employability/ entrepreneurial traits.
                               The Core team of our institution is intact, in spite of changing times, thereby ensuring stability,
                               consistency and maintaining our quality in teaching. Students have demonstrated confidence
                               on the “STEPS” brand value and it continues till date.
                               .</p>
							   <p>WE DO NOT TEACH MECHANICALLY, WE TEACH LOGICALLY…

                               S-STEPS

                               T-TOWARDS

                               E-EXCELLENT

                               P-PROFESSIONAL

                               S-STUDENTS</p>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="about_image"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/Director.jpeg" alt="https://unsplash.com/@jtylernix"/></div>
				</div>
			</div>


			
			<div className="row about_row row-lg-eq-height">
				<div className="col-lg-6 order-lg-1 order-2">
					<div className="about_image"><img src="images/about_1.jpg" alt=""/></div>
				</div>
				<div className="col-lg-6 order-lg-2 order-1">
					<div className="about_content">
						<div className="about_title">What We Actually Do</div>
						<div className="about_text">
							<p>Steps Academy classes strives to create an inspirational environment which exceeds all expectations of students and parents we also extend due exposure framework and environment to make students choose the right method of learning to the best of time and quality education.</p>
							<p>We produced the best results from last 10 years. This tradition is continues with best results year after year. May it be 11th 12th or CA /CS / CMA Foundation/ EET and Intermediate and executive students as well as parents prefer steps Academy our any other coaching institutes due to our student friendly teaching methods multiple number of mock tests proper evaluations and personalised attention.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/* our platform end */}

{/* <Milestone/> */}



{/* teacher cards start */}
{/* teacher cards ends */}
     



    <Footer/>
   </div>
  )
}

export default AboutUs
