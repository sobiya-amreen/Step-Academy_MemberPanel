import React, { useState } from 'react'
import ResponsiveMenu from '../../DashBoard/ResponsiveMenu/ResponsiveMenu'
import Header from '../../DashBoard/Header/Header'
import Footer from '../../DashBoard/Footer/Footer'
import './Registration.css'
import axios from 'axios'

const RegistrationForm = () => {




	const registrationdata = { fname: '', lname: '', mobile: '', emailId: '' };
	const [registrationuserData, setRegistrationUserData] = useState(registrationdata);
	const [errors, setErrors] = useState({});
  
	const resetForm = () => {
	  setRegistrationUserData(registrationdata);
	  setErrors({});
	};
  
	const handleRegistrationData = (e) => {
	  setRegistrationUserData({ ...registrationuserData, [e.target.name]: e.target.value });
	  // Clear error for the current field when it's being edited
	  setErrors({ ...errors, [e.target.name]: '' });
	};
  
	const validateForm = () => {
	  let isValid = true;
	  const newErrors = {};
  
	  // Validate First Name
	  if (!registrationuserData.fname.trim()) {
		newErrors.fname = 'First Name is required';
		isValid = false;
	  }
  
	  // Validate Last Name
	  if (!registrationuserData.lname.trim()) {
		newErrors.lname = 'Last Name is required';
		isValid = false;
	  }
  
	  // Validate Mobile
	  if (!registrationuserData.mobile.trim()) {
		newErrors.mobile = 'Mobile Number is required';
		isValid = false;
	  }
  
	  // Validate Email
	  if (!registrationuserData.emailId.trim()) {
		newErrors.emailId = 'Email is required';
		isValid = false;
	  }
  
	  setErrors(newErrors);
	  return isValid;
	};
  
	const saveRegistration = (e) => {
	  e.preventDefault();
  
	  if (validateForm()) {
		axios
		  .post('/user/addUser', registrationuserData)
		  .then((res) => {
			console.log(res);
  
			if (res.status === 200) {
			  resetForm();
			  alert('Registration successful');
			}
		  })
		  .catch((err) => {
			console.log('This is the error', err);
		  });
	  }
	};







  return (
    <div>
		<Header/>
      <ResponsiveMenu/>
{/* <!-- Responsive menu --> */}
 {/* form start */}
 <div className="contact_form_container formBox">
							<form action="#" id="contact_form" className="contact_form">
								<div>
									<div className="row">
											<h4 className='heading'>Registration Form</h4>
											{/* <div>Your email address will not be published. Required fields are marked</div> */}
										{/* <div className="col-lg-6 contact_name_col">
											<input type="text" className="contact_input" placeholder="Name" required="required"/>
										</div>
										<div className="col-lg-6">
											<input type="email" className="contact_input" placeholder="E-mail" required="required"/>
										</div> */}
									</div>
								</div>
								<div><input type="text" 
								onChange={handleRegistrationData} 
								value={registrationuserData.fname} 
								className="contact_input formInputs registrationInputFields"
								 placeholder="Enetr Your First Name" 
								 name='fname'
								 />
								 {errors.fname && <div className="error">{errors.fname}</div>}
								 </div>
								
								
								
								<div><input type="text"
								 onChange={handleRegistrationData} 
								 value={registrationuserData.lname}
								  className="contact_input formInputs registrationInputFields"
								   placeholder="Enetr Your Last Name"
								    name='lname' 
									/>
									 {errors.lname && <div className="error">{errors.lname}</div>}
									</div>
                               
							   
							   
							    <div><input type="number"
								 onChange={handleRegistrationData}
								  value={registrationuserData.mobile} 
								  className="contact_input formInputs registrationInputFields"
								   placeholder="Enetr Your Phone Number"
								    name='mobile'
									/>
									 {errors.mobile && <div className="error">{errors.mobile}</div>}
									</div>
								
								
								<div><input type="email"
								 onChange={handleRegistrationData} 
								 value={registrationuserData.emailId}
								  className="contact_input formInputs registrationInputFields" 
								  placeholder="Enetr Your email"
								   name='emailId'
								   />
								   {errors.emailId && <div className="error">{errors.emailId}</div>}
								   </div>
								<button className="contact_button" onClick={saveRegistration}><span>send message</span><span className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></span></button>
							</form>
						</div>
		
 {/* form end */}
   <Footer/>
    </div>
  )
}

export default RegistrationForm
