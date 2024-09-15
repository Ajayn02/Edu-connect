import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className=' container-fluid bg-light py-3 px-5'>
        <Row>
          <Col sm={12} md={5}>
            <h3 className='mt-2'>EduConnect  2024</h3>
            <p style={{ textAlign: "justify" ,marginTop:"30px" }}>"EduConnect" - Where learning meets innovation. Our student management app is designed to make academic life easier for students, teachers, and administrators. Contact us to learn more.</p>
          </Col>
          <Col sm={12} md={2}>
            <h3>Links</h3>
            <div className='d-flex flex-column mt-4'>
              <Link to={"/"} className='mb-2'>Home</Link>
              <Link to={"/sign"} className='mb-2'>Signup</Link>
              <Link to={"/log"} className='mb-2'>Login</Link>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <h3>Feedback</h3>
            <textarea name="" id="" className='form-control'></textarea>
            <button className='btn btn-warning mt-4'>Send</button>
          </Col>
        </Row>
        <p className='text-center mt-4'>All rights are reserved</p>
      </div>
    </>
  )
}

export default Footer