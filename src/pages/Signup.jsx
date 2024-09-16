import React,{useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Sign.css'
import toast from 'react-hot-toast';
import { Link} from 'react-router-dom';
import { addUser,checkEmail } from '../services/allApi';
import { useNavigate } from 'react-router-dom';

function Signup() {
  
  const navigate=useNavigate()

  const [user,setUser]=useState({
    username:"",password:"",email:""
  }) 

const handleUser=async()=>{
  const {username,password,email}=user
  if(!username || !password || !email){
        toast.error("Enter Valid Inputs")
  }else{
      const res=await checkEmail(email)
      // console.log(res.data.length)
      if(res.data.length > 0){
        toast.error("Email Already In Use")
      }else{
        const result=await addUser(user)
        if(result.status==201){
          setUser({username:"",password:"",email:""})
          toast.success("Signup Complete")
          navigate('/log')
        }else{
          toast.error("Signup Failed")
        }
      }
      
  }
}


  return (
    <>
      <div className='container-fluid d-flex justify-content-center align-items-center hdiv' >
                <div className='fdiv shadow  text-center' style={{border:"1px solid white",borderRadius:"30px"}}>
                    <h3 className='text-center mb-3'>Signup</h3>
                    <FloatingLabel controlId="username" label="Username" style={{color:"black"}}>
                        <Form.Control type="text" placeholder="Password" className='mb-3' onChange={(e)=>{setUser({...user,username:e.target.value})}} />
                    </FloatingLabel>
                    <FloatingLabel controlId="email" label="Email ID" style={{color:"black"}}>
                        <Form.Control type="email" placeholder="Password" className='mb-3' onChange={(e)=>{setUser({...user,email:e.target.value})}} />
                    </FloatingLabel>
                    <FloatingLabel controlId="password" label="Password" style={{color:"black"}}>
                        <Form.Control type="password" placeholder="Password" className='mb-3' onChange={(e)=>{setUser({...user,password:e.target.value})}}  />
                    </FloatingLabel>

                    
                        <button className='btn btn-success me-3' onClick={handleUser}>Signup</button>
                        <p className='mt-3'>Already Have Account ? <Link to={"/log"}>Login</Link> </p>
              

                </div>
            </div>
    </>
  )
}

export default Signup