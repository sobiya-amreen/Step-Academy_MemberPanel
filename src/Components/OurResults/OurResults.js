import React, { useState } from 'react'
import Footer from '../DashBoard/Footer/Footer'
import Milestone from '../DashBoard/Milestone/Milestone'
import ResponsiveMenu from '../DashBoard/ResponsiveMenu/ResponsiveMenu'
import Header from '../DashBoard/Header/Header'
import './OurResult.css'
// import { motion } from 'framer-motion'
// import { Modal } from 'react-responsive-modal';
import { yourImageArray } from '../Data'
import { Modal, Button } from 'react-bootstrap';


const OurResults = () => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All',"News","Event",'Step'); // Default to 'All'

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShow(true);
  };

  const handleCloseModal = () => {
    setSelectedImage('');
    setShow(false);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages = yourImageArray.filter((imageSrc) => {
    if (selectedCategory === 'All') {
      return true; // Include all images when 'All' is selected
    } else {
      // Extract the category from the image source
      const category = imageSrc.split('/')[1]; // Adjust based on your folder structure
  
      // Check if the category includes the selected category (case-insensitive)
      return category.toLowerCase().includes(selectedCategory.toLowerCase());
    }
  });
  // 
  


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
							<div className="home_title">Our Results</div>
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
    			<div className="teachers_title text-center">GALLARY</div>
          <Button
                className='filterButtons'
                variant="outline-warning"
                onClick={() => handleCategoryClick('All')}
              >
                All
              </Button>
              <Button
                className='filterButtons'
                variant="outline-warning"
                onClick={() => handleCategoryClick('News')}
              >
                News
              </Button>
              <Button
                className='filterButtons'
                variant="outline-warning"
                onClick={() => handleCategoryClick('Event')}
              >
                Event
              </Button>

              <Button
                className='filterButtons stepsButton'
                variant="outline-warning"
                onClick={() => handleCategoryClick('Step')}
              >
                Step Academy
              </Button>
              {/*  */}
              {/*  */}
              {/*  */}
				</div>
			</div>
			<div className="row teachers_row">


			<div className="teachers">
        <div className="container">
          <div className="row teachers_row">
            {filteredImages.map((imageSrc, index) => (
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
          </div>
        </div>
      </div>



     

			</div>
			{/* <div className="row">
				<div className="col text-center">
					<div className="button teachers_button"><a href="#">see all teachers<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div></a></div>
				</div>
			</div> */}
		</div>
	</div>
{/* teacher cards ends */}
     
<Milestone/>



    <Footer/>
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
