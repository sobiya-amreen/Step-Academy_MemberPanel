import React, { useState } from 'react'
import ResponsiveMenu from '../../DashBoard/ResponsiveMenu/ResponsiveMenu'
import Header from '../../DashBoard/Header/Header'
import Footer from '../../DashBoard/Footer/Footer'
import './Registration.css'
import axios from 'axios'

const RegistrationForm = () => {




	const registrationdata = {fname:"",lname:"",mobile:"",  emailId:""}
	const [registrationuserData,setRegistrationUserData]=useState(registrationdata)

	const resetForm = () => {
		setRegistrationUserData(registrationdata); // Reset the registrationuserData state to its initial empty state
	  };
	  

	const handleRegistrationData = (e)=>{
		setRegistrationUserData({...registrationuserData,[e.target.name]:e.target.value})
	}
	const saveRegistration=(e)=>{
		e.preventDefault()
	 axios.post("/user/addUser",registrationuserData)
		.then((res)=>{
			console.log(res);
			// console.log(registrationuserData.name)
	
			if (res.status === 200) {
				// Reset the form data after a successful submission
				resetForm();
				alert("Registration successfull")
			  }

		})
		.catch((err)=>{
          console.log("This is the error",err);
		})
	}







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
								<div><input type="text" onChange={handleRegistrationData} value={registrationuserData.fname} className="contact_input formInputs registrationInputFields" placeholder="Enetr Your First Name" name='fname'/></div>
								<div><input type="text" onChange={handleRegistrationData} value={registrationuserData.lname} className="contact_input formInputs registrationInputFields" placeholder="Enetr Your Last Name" name='lname' /></div>
                                <div><input type="number" onChange={handleRegistrationData} value={registrationuserData.mobile} className="contact_input formInputs registrationInputFields" placeholder="Enetr Your Phone Number" name='mobile'/></div>
								<div><input type="email" onChange={handleRegistrationData} value={registrationuserData.emailId} className="contact_input formInputs registrationInputFields" placeholder="Enetr Your email" name='emailId'/></div>
								<button className="contact_button" onClick={saveRegistration}><span>send message</span><span className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></span></button>
							</form>
						</div>
		
 {/* form end */}
   <Footer/>
    </div>
  )
}

export default RegistrationForm
