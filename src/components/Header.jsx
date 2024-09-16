import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css'

function Header() {
    const [state,setState]=useState("light-mode")

    useEffect(()=>{
        document.querySelector("body").className=state
        document.querySelector("#nav").className=state
    },[state])

   
    const handleMode=()=>{
        if(state==="light-mode"){
            setState("dark-mode")
        }else{
            setState("light-mode")
        }
    }

    return (
        <>
            <Navbar className="p-3 shadow" >
                <Container>
                    <Navbar.Brand className='' href="#home"style={{fontSize:"25px",textDecoration:"none"}} id='nav'>
                    <i className="fa-solid fa-graduation-cap fa-xl me-2" style={{color: "#b59245",}} />
                        EduConnect
                    </Navbar.Brand>
                    <button className='btn'onClick={handleMode}>
                       { state==="light-mode" ? <i className="fa-solid fa-moon fa-xl" /> : <i className="fa-solid fa-sun fa-xl" style={{color:"white"}}/>}   
                    </button>
                </Container>
            </Navbar>
        </>
    )
}

export default Header