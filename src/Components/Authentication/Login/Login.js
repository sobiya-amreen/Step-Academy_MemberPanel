import React from 'react'
import './Login.css'
import { useState } from 'react';
// import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Header from '../../DashBoard/Header/Header';


 const Login = () => {
  return (
    <div  style={{ display: "flex", flexDirection: "row" ,backgroundColor:"#ff8a00" , height:"100vh"}}>

      <Header />
      <div className='loginBox'>
      <div >
        <img className='imageside' src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=10" />
      </div>



      <div className='login '>
       

            <Form className='loginfieldBox'>

              <div className="logo_img"><img className='logoImage' src="images/steplogo.png" alt="" /></div>
              <h3>
                step Academy
                {/* <i>Login to Step Academy </i> */}
              </h3>

            

<div>
  <h6 className='loginfieldNames'>email:</h6>
  <input type="email" className="contact_input formInputs loginField" placeholder="Enetr Your email" required="required"/></div>


  <div>
  <h6 className='loginfieldNames'>Password:</h6>
  <input type="password" className="contact_input formInputs loginField" placeholder="Enetr Your password" required="required"/></div>

  <button className="contact_button loginButton"><span>Login</span><span className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></span></button>
             
              {/* <Button style={{ backgroundColor:"#7f8c8d"    }}  >Submit</Button> */}







            </Form>
          {/* )} */}
      </div>
      </div>
    </div >
  )
}

export default Login


