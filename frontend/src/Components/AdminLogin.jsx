import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AdminLogin = () => {

  let [data,setdata]=useState([]);
    useEffect(
      ()=>{
        getdata();
      },[]
    )
    const getdata=()=>{
      axios.get('http://localhost:3008/delete/employeelist/:id')
      .then(
        (response)=>{
         setdata(response.data);
        }
      )
      .catch(
        (err)=>{
          console.log(err);
        }
      ) }




  return (
    <div>

<div className="container">
    </div>
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row-g-4">
                    {data.map(
                        (x,y)=>{
                            return <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <ul class="list-group">
                           <li class="list-group-item active" aria-current="true">Designation- {x.Designation}  <br />
                           <button className="btn btn-success" >EDIT</button>
                           <button className="btn btn-success" id='delete'>DELETE</button>
                           </li>
        
        
         
                            <li class="list-group-item " id='myname'>Employee Name: {x.Name}</li>
                            <li class="list-group-item">Location- {x.Location}</li>
                            <li class="list-group-item">Salary- {x.Salary}</li>
          
                       </ul>
        
                            </div>
                        }
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin