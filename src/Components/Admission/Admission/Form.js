import React, { useState } from "react";
// import Select from "react-select";
import axios from "axios";
import './AdmissionForm.css'


const Form = () => {
  // const [image, setImage] = useState("");

  // const handleImage = (e) => {
  //   console.log(e.target.files);
  //   setImage(e.target.files[0]);
  // };
  // const handleImageApi = () => {
  //   const formData = new FormData();
  //   formData.append("image", image);
  //   axios
  //     .post(
        
  //       "",
  //       formData
  //     )
  //     .then((res) => {
  //       console.log(res);
        
  //     });
  // };
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSubject1, setSelectedSubject1] = useState("");
  const [selectedSubject2, setSelectedSubject2] = useState("");
  const [selectedSubject3, setSelectedSubject3] = useState("");
  const [selectedSubject4, setSelectedSubject4] = useState("");
  const [selectedSubject5, setSelectedSubject5] = useState("");
  const [selectedSubject6, setSelectedSubject6] = useState("");
  const [selectedCourse1, setSelectedCourse1] = useState("");
  const [selectedCourse2, setSelectedCourse2] = useState("");
  const [selectedCourse3, setSelectedCourse3] = useState("");
  const [selectedCourse4, setSelectedCourse4] = useState("");
  const [installmentInput1, setInstallmentInput1] = useState("");
  const [installmentDate1, setInstallmentDate1] = useState("");
  const [installmentInput2, setInstallmentInput2] = useState("");
  const [installmentDate2, setInstallmentDate2] = useState("");
  const [address, setAddress] = useState("");


  const handleImage = (e) => {
    // e.preventDefault();
    setImage(e.target.files[0]);
  };
  

  const handleSubmitData = (e) => {
    e.preventDefault();
    console.log(phone);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("subject1", selectedSubject1);
    formData.append("subject2", selectedSubject2);
    formData.append("subject3", selectedSubject3);
    formData.append("subject4", selectedSubject4);
    formData.append("subject5", selectedSubject5);
    formData.append("subject6", selectedSubject6);
    formData.append("course1", selectedCourse1);
    formData.append("course2", selectedCourse2);
    formData.append("course3", selectedCourse3);
    formData.append("course4", selectedCourse4);
    formData.append("installmentInput1", installmentInput1);
    formData.append("installment1Date1", installmentDate1);
    formData.append("installmentInput2", installmentInput2);
    formData.append("installment1Date2", installmentDate2);
    formData.append("address", address);


    console.log("hellllooooo",formData.name);
    
    console.log("FormData:", formData);
    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    axios
      .post("/admission", formData)
      .then((res) => {
        console.log("Form data sent successfully:", res);
        // console.log(formData);
       
      })
      .catch((error) => {
        console.error("Error sending form data:", error);
      });
  };

 
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        
            {/* <div>
            <h6 className="formLabel">Phone :</h6>
            <input
              type="number"
              className="contact_input formInputs"
              placeholder="Eneer Class/Course"
              
            />
          </div> */}









          <div>
          <br/>
            <h6 className="formLabel">Subject :</h6>
            <br/>
            <select
              // type="number"
              className="contact_input formInputs"
              placeholder="Eneer Class/Course"
              // required="required"
              value={selectedSubject1}
              name="subject1"
              onChange={(e) => setSelectedSubject1(e.target.value)}
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
              value={selectedSubject2}
              name="subject2"
              onChange={(e) => setSelectedSubject2(e.target.value)}
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
              value={selectedSubject3}
              name="subject3"
              onChange={(e) => setSelectedSubject3(e.target.value)}
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
    value={selectedSubject4}
    name="subject4"
    onChange={(e) => setSelectedSubject4(e.target.value)}
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
    value={selectedSubject5}
    name="subject5"
    onChange={(e) => setSelectedSubject5(e.target.value)}
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
    value={selectedSubject6}
    name="subject6"
    onChange={(e) => setSelectedSubject6(e.target.value)}
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
              value={selectedCourse1}
              onChange={(e) => setSelectedCourse1(e.target.value)}
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
              value={selectedCourse2}
              name="course2"
              onChange={(e) => setSelectedCourse2(e.target.value)}
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
              value={selectedCourse3}
              onChange={(e) => setSelectedCourse3(e.target.value)}
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
              value={selectedCourse4}
              name="course4"
              onChange={(e) => setSelectedCourse4(e.target.value)}
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

          {/* 
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            position: 'absolute',
                            // left: '35%',
                            top: '30px'
                        }}  > */}
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
              // value={installmentInput1}
              name="installmentInput1"
              onChange={(e) => setInstallmentInput1(e.target.value)}
            />

            <input
              type="text"
              className=" installmentcss registrationInstallmentInput"
              placeholder="Installment 2"
              // value={installmentInput2}
              name="installmentInput2"
              onChange={(e) => setInstallmentInput2(e.target.value)}
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
             value={installmentDate1}
             onChange={(e) => setInstallmentDate1(e.target.value)} name="installment1Date1" className="  installmentcss registrationInstallmentInput" />

            <input type="date"
              value={installmentDate2}
              onChange={(e) => setInstallmentDate2(e.target.value)} name="installment1Date2" className=" installmentcss registrationInstallmentInput" />
          </div>
          </div>

          {/* installment ends */}

          {/* remaining inputs */}
          {/* <div>
            <input
              type="text"
              className="last formInputs size"
              placeholder="Address"
              required="required"
            />
          </div> */}
           <div className="AdmitionFormInputs">
            <h6 className="formLabel">Address :</h6>
            <input
              type="text"
              className="contact_input formInputs"
              placeholder="Enter your Address"
              // required="required"
               value={address}
               name="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>


          <div className="AdmitionFormInputs">
            <h6 className="formLabel">Photo :</h6>
            <input
               type="file"
              className="contact_input formInputs"
              // value={image}
              // placeholder="Phone Number"
              // required="required"
              name="image"
              files={image}
              onChange={handleImage}
            />
          </div>

          {/* <div>
            <input
              type="file"
              onChange={handleImage}
              className="imageUpload formInputs size"
              required="required"
            />
          </div> */}

          {/* <div><input type="text" className="contact_input formInputs" placeholder="Residential Address" required="required"/></div>
                <div><input type="text" className="contact_input formInputs" placeholder="Reference If Any" required="required"/></div> */}

          {/* <div><textarea className="contact_input contact_textarea formInputs" placeholder="Message"></textarea></div> */}
          <button type="button" 
          onClick={handleSubmitData}
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
