import React from 'react'
import Navbar1 from './Navbar1'
const AddEmployee = () => {
  return (
    <div>
      <Navbar1/>
      <div className="container">
        <div className="row">
          <div className="col-12 div sm-12 div md-12 div lg-12 div xl-12 div xxl-12">

          <div className="row g-3">
            <div className="col-12 div sm-12 div md-12 div lg-12 div xl-12 div xxl-12">
              <label htmlFor="" className="form-label" placeholder='Type Name'>Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-12 div sm-12 div md-12 div lg-12 div xl-12 div xxl-12">
            <label htmlFor="" className="form-label">Location</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col-12 div sm-12 div md-12 div lg-12 div xl-12 div xxl-12">
            <label htmlFor="" className="form-label">Designation</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col-12 div sm-12 div md-12 div lg-12 div xl-12 div xxl-12">
            <label htmlFor="" className="form-label">Salary</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col-12 div sm-12 div md-12 div lg-12 div xl-12 div xxl-12">
            <button type="button" class="btn btn-primary">Submit</button>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee