import React, { useState } from "react";
// import Select from "react-select";
import axios from "axios";
import './AdmissionForm.css'


const Form = () => {
 
  const data = {
    name:"",
    phone:"",
    email:"",
    subject1:"",
    subject2:"",
    subject3:"",
    subject4:"",
    subject5:"",
    subject6:"",
    course1:"",
    course2:"",
    course3:"",
    course4:"",
    installmentInput1:"",
    installmentInput2:"",
    installment1Date1:"",
    installment1Date2:"",
    address:"",
    image:""
  }
	const [admissionuserData,setAdmissionUserData]=useState(data)

	const resetForm = () => {
		setAdmissionUserData(data); // Reset the admissionuserData state to its initial empty state
	  };
	  

	const handleadmissionData = (e)=>{
		setAdmissionUserData({...admissionuserData,[e.target.name]:e.target.value})
	}
	const saveUserAdmission=(e)=>{
		e.preventDefault()
	 axios.post("/student",admissionuserData)
		.then((res)=>{
      console.log(admissionuserData);
			console.log(res);
			//  console.log(admissionuserData.name)
			
			if (res.status === 200) {
				// Reset the form data after a successful submission
				resetForm();
			  }

		})
		.catch((err)=>{
          console.log("This is the error",err);
		})
	}

  return (
    <div className="borderform">
      <form >
        <div>
          <div className="row">
            <h4 className="registrationHeading">STEP ACADEMY</h4>
            <div>ADMISSION FORM </div>
          </div>
        </div>

        <div>
        

          <div className="AdmitionFormInputs">
            <h6 className="formLabel">Name :</h6>
            <input
              type="text"
              className="contact_input formInputs"
              placeholder="Enter your name"
              name="name"
              // required="required"
               value={admissionuserData.name}
               onChange={handleadmissionData}
              
            />
          </div>

       
            <div>
            <h6 className="formLabel">Phone :</h6>
            <input
              type="number"
              name="phone"
              className="contact_input formInputs"
              placeholder="Enter your Contact Number"
              // required="required"
               value={admissionuserData.phone}
               onChange={handleadmissionData}
            />
          </div>
         
            <div>
            <h6 className="formLabel">email :</h6>
            <input
              type="email"
              name="email"
              className="contact_input formInputs"
              placeholder="Enter your email"
              // required="required"
               value={admissionuserData.email}
               onChange={handleadmissionData}
            />
          </div>
        

          <div>
          <br/>
            <h6 className="formLabel">Subject :</h6>
            <br/>
            <select
              // type="number"
              className="contact_input formInputs"
              placeholder="Eneer Class/Course"
              // required="required"
               value={admissionuserData.subject1}
               onChange={handleadmissionData}
              name="subject1"
            
            >
              <option value="">Subject 1</option>
              <option value="Physics">Physics</option>
              <option value="Chemistr">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="English">English</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mathamatics">Mathamatics</option>
            </select>
          </div>

         <br/>

          <div>
          
            <select
              // type="number"
              className="contact_input formInputs"
              placeholder="Eneer Class/Course"
              // required="required"
               value={admissionuserData.subject2}
               onChange={handleadmissionData}
              name="subject2"
             
            >
              <option value="">Subject 2</option>
               <option value="Mathamatics">Mathamatics</option>
              <option value="Chemistry">Chemistry</option>
            <option value="Physics">Physics</option>
              <option value="Biology">Biology</option>
              <option value="English">English</option>
              <option value="Computer Science">Computer Science</option>
            </select>
          </div>

          <br/>

          <div>
          
            <select
              // type="number"
              className="contact_input formInputs"
              placeholder="Eneer Class/Course"
              // required="required"
               value={admissionuserData.subject3}
               onChange={handleadmissionData}
              name="subject3"
              
            >
              <option value="">Subject 3</option>
              <option value="Biology">Biology</option>
              <option value="Mathamatics">Mathamatics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="English">English</option>
              <option value="Computer Science">Computer Science</option>
            </select>
          </div>




          <br/>

<div>

  <select
    // type="number"
    className="contact_input formInputs"
    placeholder="Eneer Class/Course"
    // required="required"
     value={admissionuserData.subject4}
     onChange={handleadmissionData}
    name="subject4"
   
  >           <option value="">Subject 4</option>
              <option value="English">English</option>
              <option value="Physics">Physics</option>
              <option value="Mathamatics">Mathamatics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Computer Science">Computer Science</option>
  </select>
</div>






<br/>

<div>

  <select
    // type="number"
    className="contact_input formInputs"
    placeholder="Eneer Class/Course"
    // required="required"
     value={admissionuserData.subject5}
     onChange={handleadmissionData}
    name="subject5"
   
  > 
                 <option value="">Subject 5</option>
              <option value="Computer Science">Computer Science</option>
                <option value="English">English</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Mathamatics">Mathamatics</option>
              <option value="Biology">Biology</option>
  </select>
</div>






<br/>

<div>

  <select
    // type="number"
    className="contact_input formInputs"
    placeholder="Eneer Class/Course"
    // required="required"
     value={admissionuserData.subject6}
     onChange={handleadmissionData}
    name="subject6"
    
  > 
  <option value="">Subject 6</option>
              <option value="Physics">Physics</option>
                <option value="English">English</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mathamatics">Mathamatics</option>
  </select>
</div>





        

          {/*  cources start */}
          <div>
            <br/>
            <h6 className="formLabel">Course :</h6>
            <br/>
            <select
              // type="number"
              className="contact_input formInputs"
              placeholder="Eneer Class/Course"
              // required="required"
              name="course1"
              value={admissionuserData.course1}
              onChange={handleadmissionData}
             
            >
              <option value="">Course 1</option>
              <option value="11th commerce all subject">11th commerce all subject</option>
              <option value="12th commerce all subject">12th commerce all subject</option>
              <option value="11th + 12th all subject">11th + 12th all subject</option>
              <option value="11th + 12th + CA/CS/CMA foundation">11th + 12th + CA/CS/CMA foundation</option>
             
            </select>
          </div>




          <div>
            <br/>
            {/* <h6 className="formLabel">Course :</h6> */}
            
            <select
              // type="number"
              className="contact_input formInputs"
              placeholder="Eneer Class/Course"
              // required="required"
              value={admissionuserData.course2}
              onChange={handleadmissionData}
              name="course2"
            
            >
              <option value="">Course 2</option>
              <option value="12th commerce all subject">12th commerce all subject</option>
               <option value="11th commerce all subject">11th commerce all subject</option>
              <option value="11th + 12th all subject">11th + 12th all subject</option>
              <option value="11th + 12th + CA/CS/CMA foundation">11th + 12th + CA/CS/CMA foundation</option>
            </select>
          </div>


          <div>
            <br/>
            {/* <h6 className="formLabel">Course :</h6> */}
            
            <select
              // type="number"
              className="contact_input formInputs"
              placeholder="Eneer Class/Course"
              // required="required"
              name="course3"
              value={admissionuserData.course3}
              onChange={handleadmissionData}
            >
              <option value="">Course 3</option>
              <option value="11th + 12th all subject">11th + 12th all subject</option>
             <option value="11th commerce all subject">11th commerce all subject</option>
              <option value="12th commerce all subject">12th commerce all subject</option>
              <option value="11th + 12th + CA/CS/CMA foundation">11th + 12th + CA/CS/CMA foundation</option>
            </select>
          </div>



          <div>
            <br/>
            {/* <h6 className="formLabel">Course :</h6> */}
            
            <select
              // type="number"
              className="contact_input formInputs"
              placeholder="Eneer Class/Course"
              // required="required"
              value={admissionuserData.course4}
              onChange={handleadmissionData}
              name="course4"
             
            >
              <option value="">Course 4</option>
              <option value="11th + 12th + CA/CS/CMA foundation">11th + 12th + CA/CS/CMA foundation</option>
              <option value="11th commerce all subject">11th commerce all subject</option>
              <option value="12th commerce all subject">12th commerce all subject</option>
              <option value="11th + 12th all subject">11th + 12th all subject</option>
            </select>
          </div>
          {/* Course ends */}



          {/* installment start */}
            <div className="installmentBox">
          <h6 className="label head installment">Installment :</h6>

       
          <div 
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
               bottom:"32px"
              // left: '35%',
              // top: '30px'
            }}
          >
            <input
              type="text"
              className=" installmentcss registrationInstallmentInput"
              placeholder="Installment 1"
               value={admissionuserData.installmentInput1}
               onChange={handleadmissionData}
              name="installmentInput1"
             
            />

            <input
              type="text"
              className=" installmentcss registrationInstallmentInput"
              placeholder="Installment 2"
               value={admissionuserData.installmentInput2}
               onChange={handleadmissionData}
              name="installmentInput2"
            
            />
            {/* <input type="date" className="course_input courseField  installmentcss" /> */}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "200px",
              position:"inherit",
              bottom:"35px"
            }}
          >
            <input type="date" 
              value={admissionuserData.installmentDate1}
              onChange={handleadmissionData}
              name="installment1Date1" className="  installmentcss registrationInstallmentInput" />

            <input type="date"
               value={admissionuserData.installmentDate2}
               onChange={handleadmissionData}
              name="installment1Date2" className=" installmentcss registrationInstallmentInput" />
          </div>
          </div>

      
           <div className="AdmitionFormInputs">
            <h6 className="formLabel">Address :</h6>
            <input
              type="text"
              className="contact_input formInputs"
              placeholder="Enter your Address"
              // required="required"
                value={admissionuserData.address}
                onChange={handleadmissionData}
               name="address"
             
            />
          </div>


          <div className="AdmitionFormInputs">
            <h6 className="formLabel">Photo :</h6>
            <input
               type="file"
              className="contact_input formInputs"
               value={admissionuserData.image}
               onChange={handleadmissionData}
              // placeholder="Phone Number"
              // required="required"
              name="image"
             
            />
          </div>

           <button type="button" 
         onClick={saveUserAdmission}
          className="contact_button registrationBotton">
           <span>Submit</span>
           <span className="button_arrow">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </span>
          </button>
          {/* remaining inputs */}

          <div />
        </div>
      </form>
    </div>
  );
};

export default Form;
