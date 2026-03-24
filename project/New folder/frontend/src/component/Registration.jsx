import React from 'react'
import { useState } from 'react';

const Registration = () => {
  const [userName,setUserName] = useState();
  const [userEmail,setUserEmail] = useState();
  const [userPassword,setUserPassword] = useState(); 

    function studentRegistration(){

      alert(userName+userEmail+userPassword);
    }
    async function studentRegistration(){
      let result = await fetch("http://localhost:8080/api/v1/auth/register",{
        method:'POST',
        body:JSON.stringify({userName,userEmail,userPassword}),
        headers:{
          "Content-Type":"application/json"
        }
      });
      let data = await result.json();
      alert("Registration Successful");
  } 


  return (
    <div>
        <h2>Registration Form</h2>
      <form>
    <div className="form-group">
    <label htmlFor="exampleInputName1">Email Name</label>
    <input type="text" onChange={(e)=>setUserName(e.target.value)} className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setUserEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setUserPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <button type="submit" className="btn btn-primary" onClick={studentRegistration}>Register</button>
</form>
    </div>
  )
}

export default Registration
