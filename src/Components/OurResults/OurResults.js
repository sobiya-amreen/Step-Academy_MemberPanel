import React, { useState } from 'react'
import Footer from '../DashBoard/Footer/Footer'
import Milestone from '../DashBoard/Milestone/Milestone'
import ResponsiveMenu from '../DashBoard/ResponsiveMenu/ResponsiveMenu'
import Header from '../DashBoard/Header/Header'
import './OurResult.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import { motion } from 'framer-motion'
// import { Modal } from 'react-responsive-modal';
import { yourImageArray } from '../Data'
import { Modal } from 'react-bootstrap';


const OurResults = () => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [filter, setFilter] = useState('ALL');
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShow(true);
  };

  const handleCloseModal = () => {
    setSelectedImage('');
    setShow(false);
  };
  const filteredImages = () => {
    if (filter === 'ALL') {
      return yourImageArray;
    } else {
      return yourImageArray.filter(image => image.category === filter);
    }
  };



  return (
    <div>
      <Header />
      {/* <!-- Responsive Menu --> */}

      <ResponsiveMenu />
      {/* <!-- Responsive menu --> */}
      <div className='carouselBox'>
        {/* <img classNameName='aboutCarouselImage' src='https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/> */}
        <div className="row">
          <div className="col">
            <div className="home_content text-center">
              {/* <div className="home_title">Gallary</div> */}
              {/* <div className="breadcrumbs">
								<ul>
									<li><a href="index.html">Home</a></li>
									<li>Our Results</li>
								</ul>
							</div> */}
            </div>
          </div>
        </div>
      </div>







      {/* teacher cards start */}
      <div className="teachers">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>WELCOME TO OUR ACHIEVEMENTS</div>
              <div className="teachers_title text-center">Gallary</div>

              <div className='filtbtn'>
                <Stack spacing={1} direction="row">
                  <button onClick={() => setFilter('ALL')} className='buttons' variant="contained">ALL</button>
                  <button onClick={() => setFilter('EVENTS')} className='buttons' variant="contained">EVENTS</button>
                  <button onClick={() => setFilter('NEWS')} className='buttons' variant="contained">NEWS</button>
                  <button onClick={() => setFilter('CLASSROOMS')} className='buttons' variant="contained">CLASSROOMS</button>
                </Stack>
              </div>


            </div>
          </div>
          <div className="row teachers_row">



            <div className="teachers">
              <div className="container">
                <div className="row teachers_row">
                  {yourImageArray.map((imageSrc, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                      <div className="teacher">
                        <img
                          src={imageSrc}
                          alt={`Image ${index}`}
                          onClick={() => handleImageClick(imageSrc)}
                          className="teacher_image photoGalery"
                        />

                      </div>

                    </div>
                  ))}
                  <div className="col-lg-4 col-md-6">
                    <div className="teacher">
                      <img
                        src="../images/result23.jpg"
                        alt="New Image"
                        onClick={() => handleImageClick("../images/result23.jpg")}
                        className="teacher_image photoGalery"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="teacher">
                      <img
                        src="../images/result24.jpg"
                        alt="New Image"
                        onClick={() => handleImageClick("../images/result24.jpg")}
                        className="teacher_image photoGalery"
                      />
                    </div>

                  </div>


                  <div className="col-lg-4 col-md-6">
                    <div className="teacher">
                      <img
                        src="../images/result25.jpg"
                        alt="New Image"
                        onClick={() => handleImageClick("../images/result25.jpg")}
                        className="teacher_image photoGalery"
                      />
                    </div>

                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="teacher">
                      <img
                        src="../images/result26.jpg"
                        alt="New Image"
                        onClick={() => handleImageClick("../images/result26.jpg")}
                        className="teacher_image photoGalery"
                      />
                    </div>

                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="teacher">
                      <img
                        src="../images/result27.jpg"
                        alt="New Image"
                        onClick={() => handleImageClick("../images/result27.jpg")}
                        className="teacher_image photoGalery"
                      />
                    </div>

                  </div>


                  <div className="col-lg-4 col-md-6">
                    <div className="teacher">
                      <img
                        src="../images/result28.jpg"
                        alt="New Image"
                        onClick={() => handleImageClick("../images/result28.jpg")}
                        className="teacher_image photoGalery"
                      />
                    </div>

                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="teacher">
                      <img
                        src="../images/result29.jpg"
                        alt="New Image"
                        onClick={() => handleImageClick("../images/result29.jpg")}
                        className="teacher_image photoGalery"
                      />
                    </div>

                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="teacher">
                      <img
                        src="../images/result30.jpg"
                        alt="New Image"
                        onClick={() => handleImageClick("../images/result30.jpg")}
                        className="teacher_image photoGalery"
                      />
                    </div>

                  </div>

                  <div className="frame">
                    <iframe width="500" height="315" src="https://www.youtube.com/embed/5AnSV9Nr37Q?si=y2PC2yM1HwaP8Jt5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                  </div>


                </div>

              </div>
            </div>





          </div>

          {/* Add more images to your array */}
          {/* <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <img
                  src="../images/result23.jpg"
                  alt="New Image"
                  onClick={() => handleImageClick("../images/result23.jpg")}
                  className="teacher_image photoGalery"
                />
              </div>
            </div> */}
          {/* <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <img
                  src="../images/result24.jpg"
                  alt="New Image"
                  onClick={() => handleImageClick("../images/result24.jpg")}
                  className="teacher_image photoGalery"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <img
                  src="../images/result25.jpg"
                  alt="New Image"
                  onClick={() => handleImageClick("../images/result25.jpg")}
                  className="teacher_image photoGalery"
                />
              </div>
            </div> */}
          {/* Add as many images as needed */}
          {/* <div className="row">
				<div className="col text-center">
					<div className="button teachers_button"><a href="#">see all teachers<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div></a></div>
				</div>
			</div> */}
        </div>
      </div>
      {/* teacher cards ends */}

      <Milestone />



      <Footer />
      {/* Create a modal to display the enlarged image */}
      {selectedImage && (
        <Modal show={show} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Enlarged Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedImage} alt="Enlarged" className="img-fluid" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  )
}

export default OurResults
