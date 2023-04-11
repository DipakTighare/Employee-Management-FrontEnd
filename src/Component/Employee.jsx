import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom'

const Employee = () => {

const [employee , setEmployee] = useState([])

const {id} = useParams();


//fetching data from server/database
const fetchData = async()=>{
const url = "http://localhost:8080/api/users"
const responce = await axios.get(url);
setEmployee(responce.data);
}
useEffect(()=>{
fetchData();
},[])

const deleteEmployee =async(id)=>{
await axios.delete(`http://localhost:8080/api/delete/${id}`)
fetchData();
}
  return (
    <>
    <div className="App container-fluid">

     <div className=" head_div">
        <img className='table-icon' src="EM.png" alt="EM.png" />
 <h1 className='mt-3 heading'> Employee Details </h1>
      </div>
{/*****table */}

<div className="table-responsive container mt-5">
  <table className="table table-primary mb-5 border-2">
    <thead>
      <tr>
        <th scope="col ">Employee Id</th>
        <th scope="col"> Name</th>
        <th scope="col">Salary</th>
        <th scope="col">Mobile no.</th>
        <th scope="col"></th>


      </tr>
    </thead>
    <tbody>
    {employee.map((ele,index)=>
      <tr className="" key={index}>
        <td scope="row" >{ele.employeeId}</td>
        <td>{ele.employeeName}</td>
        <td>{ele.employeeSalary}</td>
        <td>{ele.mobileNo}</td>
      <td> <NavLink to={`/editEmployee/${ele.employeeId}`} className="btn btn-primary m-1">Edit</NavLink>
     <NavLink onClick={()=>deleteEmployee(ele.employeeId)} className="btn btn-danger">Delete</NavLink></td>

      </tr>
)}
    </tbody>
  </table>
</div>

    </div>
    </>
  )
}

export default Employee;