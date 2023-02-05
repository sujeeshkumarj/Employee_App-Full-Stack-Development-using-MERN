import React, {useState } from 'react'
import axios from 'axios';
import Navbar1 from './Navbar1'



const AddEmployee = () => {
  const [data,setdata]=useState({
    Name :"",
    Location:"",
    Designation :"",
    Salary:""
})
const inputhandler=(event)=>{
    const {name,value}=event.target
    setdata(
        (previousstate)=>(
            {
                ...previousstate,
                [name]:value
            }
        )
    )
}
const readvalues=()=>{
    console.log(data);
    axios.post("http://localhost:3008/add/employeelist",data)
    .then(
        (response)=>{
            console.log(response.data);
            if(response.data.status=="success"){
                alert("employee data created successfully")
                
            }else{
                
            }
        }
    )
    .catch(
        (err)=>{
            console.log(err);
        }
    )
}

  return (
    <div>
      <Navbar1/>
      <div className="container">
        <div className="row">
          <div className="col-12 div sm-12 div md-12 div lg-12 div xl-12 div xxl-12">

          <div className="row g-3">
            <div className="col-12 div sm-12 div md-12 div lg-12 div xl-12 div xxl-12">
              <label htmlFor="" className="form-label" placeholder='Type Name'>Name</label>
              <input type="text" 
              className="form-control" 
              name="Name"
              value={data.Name}
              onChange = {inputhandler}/>
            </div>
            <div className="col-12 div sm-12 div md-12 div lg-12 div xl-12 div xxl-12">
            <label htmlFor="" className="form-label">Location</label>
            <input type="text" 
            className="form-control"
            name="Location" 
            value={data.Location}
            onChange = {inputhandler}/>
            </div>
            <div className="col-12 div sm-12 div md-12 div lg-12 div xl-12 div xxl-12">
            <label htmlFor="" className="form-label">Designation</label>
            <input type="text" 
            className="form-control" 
            name="Designation"
            value={data.Designation}
            onChange = {inputhandler}/>
            </div>
            <div className="col-12 div sm-12 div md-12 div lg-12 div xl-12 div xxl-12">
            <label htmlFor="" className="form-label">Salary</label>
            <input type="text" 
            className="form-control"
            name="Salary" 
            value={data.Salary}
            onChange = {inputhandler}/>
            </div>
            <div className="col-12 div sm-12 div md-12 div lg-12 div xl-12 div xxl-12">
            <button type="button" class="btn btn-primary" onClick={readvalues}>Submit</button>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee