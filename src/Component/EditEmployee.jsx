import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const EditEmployee = () => {

let navigate = useNavigate()

const [input , setInput] = useState({
  employeeId: " ",
  employeeName : '',
  employeeSalary: '',
  mobileNo:" "
})
  const {employeeName , employeeSalary , mobileNo ,employeeId} = input

const addInput = (event) =>{
setInput( {...input, [event.target.name]:event.target.value})
}

//after submit on edit page
const handleSubmit = async(e) =>{
e.preventDefault()
if(!input.employeeName||!input.employeeSalary||!input.mobileNo){
alert("Please enter all fields.")}
else{
await axios.put(`http://localhost:8080/api/${id}`,input)
alert(`Employee Edited with id ${employeeId} with Name ${employeeName}`)
navigate("/show")}
}

// for getting id we need to use

const {id}=useParams();

// for getting data of employee of edited id 
const loadEmolyee =async()=>{
const result = await axios.get(`http://localhost:8080/api/${id}`);
setInput(result.data);
}
// for calling the loadEmolyee function
useEffect(()=>{
loadEmolyee()
},[])


  return (
    <>
      <div className="container reg">
        <h1 className="text-center mt-2 reg-title">Edit Employee</h1>
        <div className="col-md-10 col-10 col-xl-10 m-auto mt-3">
          <div className="row Reg-form">
            <div className="col-md-8 m-auto reg-box p-5">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="EmployeeName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="employeeName"
                    value={input.employeeName}
                    placeholder="Enter full name"
                    onChange={addInput}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="EmployeeSalary" className="form-label">
                    Salary
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="employeeSalary"
                    value={input.employeeSalary}
                    placeholder="Add current Salary"
                    onChange={addInput}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="MobileNo" className="form-label">
                    Mobile No.
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobileNo"
                    value={input.mobileNo}
                    placeholder="Add mobile number"
                    onChange={addInput}
                  />
                </div>
               <button className='btn btn-info' type='submit'>Submit</button>
               <NavLink className="text-decoration-none btn btn-danger ms-2" to={"/"}>Cancel</NavLink>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditEmployee;