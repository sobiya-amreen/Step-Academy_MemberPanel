import React, { useState } from "react";
// import Select from "react-select";
import axios from "axios";
import './AdmissionForm.css'


const Form = () => {

  const initialData = {
    name: "",
    phone: "",
    email: "",
    course1: "",

  }
  const [admissionUserData, setAdmissionUserData] = useState(initialData);
  const [errors, setErrors] = useState({});



  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate Name
    if (!admissionUserData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate Phone
    if (!admissionUserData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }

    // Validate Email
    if (!admissionUserData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    // Validate Course
    if (!admissionUserData.course1.trim()) {
      newErrors.course1 = "Course selection is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const resetForm = () => {
    setAdmissionUserData(initialData);
    setErrors({});
  };

  const handleadmissionData = (e) => {
    setAdmissionUserData({ ...admissionUserData, [e.target.name]: e.target.value });
  };

  const saveUserAdmission = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axios
        .post("/admission", admissionUserData)
        .then((res) => {
          console.log(admissionUserData);
          console.log(res);

          if (res.status === 200) {
            // Reset the form data after a successful submission
            resetForm();
            window.alert("Data submitted successfully!");
          }
        })
        .catch((err) => {
          console.log("This is the error", err);
        });
    }
  };

  

  return (
    <div className="borderform">
      <form className="form" >
        <div>
          <div className="row">
            <h4 className="registrationHeading">STEP ACADEMY</h4>
            <div>ADMISSION FORM </div>
          </div>
        </div>

        


          <div className="AdmitionFormInputs">
            <h6 className="formLabel">Name :</h6>
            <input
              type="text"
              className="contact_input formInputs"
              placeholder="Enter your name"
              name="name"
              // required="required"
              value={admissionUserData.name}
              onChange={handleadmissionData}

            />
             {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <br/>


          <div className="AdmitionFormInputs">
            <h6 className="formLabel">Phone :</h6>
            <input
              type="number"
              name="phone"
              className="contact_input formInputs"
              placeholder="Enter your Contact Number"
              // required="required"
              value={admissionUserData.phone}
              onChange={handleadmissionData}
            />
             {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
          <br/>

          <div className="AdmitionFormInputs">
            <h6 className="formLabel">email :</h6>
            <input
              type="email"
              name="email"
              className="contact_input formInputs"
              placeholder="Enter your email"
              // required="required"
              value={admissionUserData.email}
              onChange={handleadmissionData}
            />
             {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <br/>

         {/* here is commented fields */}






          {/*  cources start */}
          <div className="AdmitionFormInputs">
          
            <h6 className="formLabel">Course :</h6>
            <br />
            <select
              // type="number"
              className="contact_input formInputs"
              placeholder="Eneer Class/Course"
              // required="required"
              name="course1"
              value={admissionUserData.course1}
              onChange={handleadmissionData}

            >
              <option value="">Courses</option>
              <option value="11th commerce all subject">11th & 12th Commerce</option>
              <option value="12th commerce all subject">11th & 12th Science CET, JEE</option>
              <option value="11th + 12th all subject">BCOM, BBA, BC</option>
              <option value="11th + 12th + CA/CS/CMA foundation">MBA, MCOM</option>
              <option value="CA, CMA">CA, CMA</option>
              <option value="DMIT & CAREER COUNSELING">DMIT & CAREER COUNSELING</option>
              <option value="spoken English">SPOKEN ENGLISH</option>
              <option value="COSTING & TAXES">COSTING & TAXES</option>

            </select>
            {errors.course1 && <div className="error">{errors.course1}</div>}
          </div>



        {/*  */}
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
      </form >
    </div>
  
  );
};

export default Form;
