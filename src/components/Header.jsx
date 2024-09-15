import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <>
            <Navbar className="p-3 shadow">
                <Container>
                    <Navbar.Brand href="#home"style={{fontSize:"25px"}}>
                    <i className="fa-solid fa-graduation-cap fa-xl me-2" style={{color: "#b59245",}} />
                        EduConnect
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header