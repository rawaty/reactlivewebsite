import React, { useState } from 'react';
import './UserSignUp.css';
const UserSignUp=()=>
{
    const [fullName,setFullName]=useState(
        {
            fname:"",
            lname:"",
            phone:"",
            address:"",
            email:"",
            password:"",
            rpassword:""


        }
    );
    const inputEvent=(event)=>
    {
        const{name,value}=event.target;
        setFullName((preValue)=>{
            return {
                ...preValue,
                [name]:value,
            };

        })
    };

    const onSubmit=(event)=>{
        event.preventDefault();
        alert("Form Submited 🌤️");
    }

    return(
        <>
        <div className="main_div">
        <form  style={{border:"1px solid #ccc"}} onSubmit={onSubmit}>
  <div class="container">
    <h1>Hello {fullName.fname} {fullName.lname}</h1>
    <p>{fullName.phone} {fullName.address} {fullName.email}</p>
    <hr/>
    <label ><b>First Name</b></label>
    <input type="text" placeholder="Enter First Name" name="fname" onChange={inputEvent} value={fullName.fname} required/>
    
    <label ><b>LastName</b></label>
    <input type="text" placeholder="Enter Last Name" name="lname" onChange={inputEvent} value={fullName.lname} required/>

    <label ><b>Phone</b></label>
    <input type="text" placeholder="Enter Phone Number" name="phone" onChange={inputEvent} value={fullName.phone} required/>

    <label ><b>Address</b></label>
    <input type="text" placeholder="Enter Address" name="address" onChange={inputEvent} value={fullName.address} required/>

    <label ><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" onChange={inputEvent} value={fullName.email} required/>

    <label ><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" onChange={inputEvent} value={fullName.password} required/>

    <label ><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="rpassword" onChange={inputEvent} value={fullName.rpassword} required/>
    
    <label>
      <input type="checkbox" checked="checked" name="remember" style={{marginBottom:"15px"}}/> Remember me
    </label>
    
    <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

    <div className="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
</div>
        </>
    )
}
export default UserSignUp;