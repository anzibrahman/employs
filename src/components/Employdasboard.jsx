import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Employdasboard = () => {
  const[data,setData]=useState([])

  const fetchDataFromApi=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (response)=>{
        console.log(response.data)
        setData(response.data)
      }
    )
  }
  useEffect(()=>{
    fetchDataFromApi()
  },[])
  return (
    <div>
<div className="container">
  <div className="row">
   < div className="col col-12 col-sm-12 col-md-12">
    <div className="row g-3">
      {data.map(
        (value,index)=>{
          return <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
            <div class="card mb-3" >
  <div class="card-body">
    <h5 class="card-title">  Id:   {value.id}</h5>
    <p class="card-text"> Name: {value.name}</p>
    <p class="card-text"> Emailid : {value.email}</p>
  </div>
</div>


          </div>



      })}

    </div>
    </div> 
  </div>
</div>
    </div>
  
  )
    }

export default Employdasboard