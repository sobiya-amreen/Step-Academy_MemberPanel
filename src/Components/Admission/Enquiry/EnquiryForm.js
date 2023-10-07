import React, { useState } from "react";
import Footer from "../../DashBoard/Footer/Footer";
import Header from "../../DashBoard/Header/Header";
import ResponsiveMenu from "../../DashBoard/ResponsiveMenu/ResponsiveMenu";
import "./EnquiryForm.css";
import axios from "axios";

const EnquiryForm = () => {




  const enquerydata = {name:"",  contactNumber:"", emailId:"", cource:"",residentialAddress:""}
	const [enqueryuserData,setEnqueryUserData]=useState(enquerydata)



	const resetForm = () => {
		setEnqueryUserData(enquerydata); // Reset the userData state to its initial empty state
	  };
	  



	const handleEnqueryData = (e)=>{
		setEnqueryUserData({...enqueryuserData,[e.target.name]:e.target.value})
	}
	const saveUserEnquery=(e)=>{
		e.preventDefault()
	 axios.post("/enquiry",enqueryuserData)
		.then((res)=>{
			console.log(res);
			// console.log(userData.name)
			// resetForm()
      if (res.status === 200) {
				// Reset the form data after a successful submission
				resetForm();
			  }
			// setUserData(" ");
		})
		.catch((err)=>{
          console.log("This is the error",err);
		})
	}






  return (
    <div>
      <Header />
      {/* <!-- Responsive Menu --> */}

      <ResponsiveMenu />
      {/* <!-- Responsive menu --> */}
      {/* form start */}
      <div className="contact_form_container formBox">
        <form  id="contact_form" className="contact_form">
          <div>
            <div className="row">
              <h4 className="enquiryFormHeading">Ready to Get Started?</h4>
              <div>
                Your email address will not be published. Required fields are
                marked
              </div>
              {/* <div className="col-lg-6 contact_name_col">
											<input type="text" className="contact_input" placeholder="Name" required="required"/>
										</div>
										<div className="col-lg-6">
											<input type="email" className="contact_input" placeholder="E-mail" required="required"/>
										</div> */}
            </div>
          </div>

          <div>
            <h6 className="formLabel">Name :</h6>
            <input
              type="text"
              className="contact_input formInputs"
              placeholder="Name"
              // required="required"
              value={enqueryuserData.name}
              onChange={handleEnqueryData}
              name="name"
            />
          </div>

          <div>
            <h6 className="formLabel">Phone :</h6>
            <input
              type="number"
              className="contact_input formInputs"
              placeholder="Phone Number"
              // required="required"
              value={enqueryuserData.contactNumber}
              onChange={handleEnqueryData}
              name="contactNumber"
            />
          </div>
          <div>
            <h6 className="formLabel">email :</h6>
            <input
              type="email"
              className="contact_input formInputs"
              placeholder="email"
              // required="required"
              value={enqueryuserData.emailId}
              onChange={handleEnqueryData}
              name="emailId"
            />
          </div>
          <div>
            <h6 className="formLabel">Class/Course :</h6>
            <input
              type="text"
              className="contact_input formInputs"
              placeholder="Enquiry For Class/Course"
              // required="required"
              value={enqueryuserData.cource}
              onChange={handleEnqueryData}
              name="cource"
            />
          </div>
          <div>
            <h6 className="formLabel">Address :</h6>
            <input
              type="text"
              className="contact_input formInputs"
              placeholder="Residential Address"
              // required="required"
              value={enqueryuserData.residentialAddress}
              onChange={handleEnqueryData}
              name="residentialAddress"
            />
          </div>
          {/* <div>
								<h6 className='formLabel'>Name :</h6>
									<input type="text" className="contact_input formInputs" placeholder="Reference If Any" required="required"/></div> */}

          {/* <div>
            <h6 className="formLabel">Message :</h6>
            <textarea
              className="contact_input contact_textarea formInputs"
              placeholder="Message"
            ></textarea>
          </div> */}
          <button 
          className="contact_button"
          onClick={saveUserEnquery}
          >
            <span>send message</span>
            <span className="button_arrow">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </button>
        </form>
      </div>

      {/* form end */}

      <Footer />
    </div>
  );
};

export default EnquiryForm;
