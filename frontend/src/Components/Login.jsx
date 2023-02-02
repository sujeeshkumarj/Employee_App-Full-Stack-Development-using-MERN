import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Navbar1 from './Navbar1';

const Login = () => {
  let Navigate=useNavigate();
  const [data,setlogdata]=useState(
    {
      Email:"",
      Password:""
    }
  );

  const handler=(event)=>{
    const {name,value}=event.target 
    setlogdata(
      (previousState)=>({
        ...previousState,
        [name]:value
      })
    )
  }

  const readvalue=()=>{
    console.log(data)
    axios.post("http://localhost:3008/signin",data)
    .then(
      (response)=>{
        console.log(response.data.data.length);
        if (response.data.data.length==1) {
          let empname=response.data.data[0].name;
          alert("Login Successfully");
          sessionStorage.setItem("name",empname);
          Navigate("/userview")
        } else {
          alert("Invalid Credentials")
        }
      }
      
    )
    .catch(
      (error)=>{
        console.log(error);
      }
    )
  }
  return (
    <div>
      <Navbar1/>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

          <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

              <label htmlFor="" className="form-label">Email Id</label>
              <input type="text" 
              className="form-control"
              name="Email"
              placeholder='Type Registered Email id'
              onChange={handler}
              value = {data.Email}
              />

            </div>
            
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
              <label htmlFor="" className="form-label">Password</label>
              <input type="text" 
              className="form-control" 
              name="Password"
              placeholder='Type Your Password'
              onChange={handler}
              value={data.Password}
              />
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
              <button className="btn btn-success" onClick={readvalue}>Login</button>
              <a href="/signup">Create New Account</a>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login