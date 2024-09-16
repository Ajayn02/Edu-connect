import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import "./Sign.css"
import { checkLogin } from '../services/allApi';
import toast from 'react-hot-toast';

function Login() {

    const nav=useNavigate()
    const [login,setLogin]=useState({
        email:"",password:""
    })

    const handleLogin=async()=>{
      const {email,password}=login
      if(!email || !password){
          toast.error("Enter Valid Inputs ")
      }else{
        const res = await checkLogin(email,password)
        // console.log(res);
        if(res.data.length>0){
          toast.success("Login Success")
          setLogin({ email:"",password:""})
          sessionStorage.setItem("userData",JSON.stringify(res.data[0]))
          nav("/home")
        }else{
          toast.error("Incorrect Password or Email")
        }
        
      }

    }
    
  return (
    <>
      <div className='container-fluid d-flex justify-content-center align-items-center hdiv '>
        <div className='fdiv shadow  text-center' style={{ border: "1px solid white", borderRadius: "30px" }}>
          <h3 className='text-center mb-3'>Login</h3>
          <FloatingLabel controlId="email" label="Email ID"  style={{color:"black"}}>
            <Form.Control type="email" placeholder="Password" className='mb-3' onChange={(e)=>{setLogin({...login,email:e.target.value})}}  />
          </FloatingLabel>
          <FloatingLabel controlId="pass" label="Password"  style={{color:"black"}}>
            <Form.Control type="password" placeholder="Password" className='mb-3'  onChange={(e)=>{setLogin({...login,password:e.target.value})}} />
          </FloatingLabel>


          <button className='btn btn-success me-3' onClick={handleLogin} >Login</button>
          <p className='mt-3'>Not a member ? <Link to={"/sign"}>Create Account</Link> </p>


        </div>
      </div>
    </>
  )
}

export default Login