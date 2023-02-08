import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'





const UserView = () => {
    const Navigate=useNavigate()
  var [employeelist,setEmployeelist] = useState([]);
  useEffect(
      ()=>{
          getData();
      },[]
  )
  const getData = ()=>{
      axios.get('http://localhost:3008/employeelist')
    
      .then(
          (response)=>{
              setEmployeelist(response.data);
          }
      )
      .catch(
          (error)=>{
              console.log("Error while loading data"+error);
          }
      )
  }
  return (
    <div>    <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Salary</th>
                        </tr>
                    </thead>
                    <tbody>

                     {employeelist.map(
                        (value,key)=>{
                            return <tr>
                            <td>{value.Name}</td>
                            <td>{value.Location}</td>
                            <td>{value.Designation}</td>
                            <td>{value.Salary}</td>
                            </tr>                    
                        }
                     )}   
                        
                    </tbody>
                    </table>
                </div>                       
            </div>
            <button onClick={() =>Navigate(-1)}>Logout</button>
        </div>
    </div>
</div></div>
  )
}

export default UserView