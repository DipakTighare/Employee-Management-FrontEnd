import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Register_Form = () => {

let navigate = useNavigate()

const [input , setInput] = useState({
  employeeName : '',
  employeeSalary: '',
  mobileNo:" "
})
  const {employeeName , employeeSalary , mobileNo} = input

const addInput = (event) =>{
setInput( {...input, [event.target.name]:event.target.value})
}
//after submit
const handleSubmit = async(e) =>{
e.preventDefault()
if(!input.employeeName||!input.employeeSalary||!input.mobileNo){
alert("Please enter all fields.")}
else{
await axios.post("http://localhost:8080/api/user",input)
alert(`Employee added ${employeeName}`)
navigate("/show")}
}

  return (
    <>
      <div className="container reg">
        <h1 className="text-center mt-2 reg-title">Registration Form</h1>
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

export default Register_Form