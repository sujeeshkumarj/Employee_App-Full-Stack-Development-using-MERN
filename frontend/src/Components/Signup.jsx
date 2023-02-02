import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Navbar1 from './Navbar1'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    let Navigate = useNavigate();
    const[data,setData] = useState(
      {
        name:"",
        Email:"",
        Password:""
      }
    )
    const signUpData=()=>{
      console.log(data);
      axios.post("http://localhost:3008/signup",data)
      .then(
        (res)=>{
          console.log(res.data)
          if (res.data.Status == "Success") {
            alert("User Registered Successfully");
            Navigate("/login")
            setData(
              {
                name:"",
                Email:"",
                Password:""
              }
            )
          } else {
            
          }
        }
      ).catch((error)=>{
        console.log(error);
      })
    }
    const inputHandler = (event)=>{
      const {name,value} = event.target
      setData(
        (pS)=>({
          ...pS,
          [name]:value
        })
      )
    }

  return (
    <div>
      <Navbar1/>

        <div className="container">
          <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" 
                className="form-control" 
                placeholder='Enter your name' 
                name='name'
                onChange={inputHandler}
                value = {data.name}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Email Id</label>
                <input type="text"
                 className="form-control"
                 placeholder='Enter your email id'
                 name='Email'
                 onChange={inputHandler}
                 value = {data.Email}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Password</label>
                <input type="text" 
                className="form-control" 
                placeholder='password'
                name='Password'
                onChange={inputHandler}
                value = {data.Password}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={signUpData}>SignUp</button>
              </div>
            </div>


            </div>
          </div>
        </div>
    </div>
  )
}

export default Signup