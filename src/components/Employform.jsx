import { Button } from '@mui/material'
import React from 'react'


const Employform = () => {
  return (
    <div>
      
       <div className="container">
            <div className="row">
                <div className="col col-12 col-sm- col-md-12"></div>
           <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12">
                <label htmlFor="" className="form-label">Name</label>
            <input type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12">Designation</div>
            <input type="text" className="form-control"/>
            <div className="col col-12 col-sm-12 col-md-12">Location</div>
            <input type="text" className="form-control"/>
            <div className="col col-12 col-sm-12 col-md-12">Salary</div>
            <input type="text" className="form-control"/>
            <div className="col col-12 col-sm-12 col-md-12"></div>
            <button className="btn btn-primary">Login</button>
           
           
           </div> 
            </div>
        </div>
   
    </div>
  )
}

export default Employform