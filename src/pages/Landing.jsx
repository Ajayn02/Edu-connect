import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Landing.css"
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
      <div className='container-fluid my-5'>
        <Row >
          <Col md={12} lg={6} sm={12}>
            <div className='conatiner s1c '>
              <h1 className='mt-3'>Elevate education,<br />   simplify management</h1>
              <p style={{ margin: "20px 0px", textAlign: 'justify' }}>Unlock a smarter way to manage your students' journey. Educonnect is a powerful, user-friendly solution that helps educators and administrators. Say goodbye to paperwork, spreadsheets, and cumbersome systems. With Educonnect, you'll have more time to focus on what matters most your students' success.</p>
              <div className='d-flex mt-3'>
                <Link className='btn btn-success me-3' to={'/log'}>Login</Link>
                <Link className='btn btn-info ' to={'/sign'}>Signup</Link>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} sm={12} className='p-3'>
            <img src="https://ajayn02.github.io/Clone/meadia/home-illustration.svg" width={"100%"} alt="" />
          </Col>
        </Row>
      </div>

      {/* section-2 */}
      <div className='container-fluid my-5'>
        <div className='row' >
          <h2 className='text-center my-5'>Features</h2>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center align-items-center'>
            <Card style={{ width: '18rem',marginTop:'30px' }}>
              <Card.Img height={"200px"} variant="top" src="https://img.freepik.com/free-vector/online-job-interview_23-2148613123.jpg?t=st=1726378792~exp=1726382392~hmac=9b8c119c955fe33df444d307b4787efe7fd353642e42b1ceded7f7e95bf7d0eb&w=826" />
              <Card.Body>
                <Card.Title>Student Management</Card.Title>
                <Card.Text>
                Our student profile management system provides a secure and centralized platform for students to manage their academic journey.
                </Card.Text>
              
              </Card.Body>
            </Card>
          </div>

          <div className='col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center align-items-center'>
            <Card style={{ width: '18rem',marginTop:'30px' }}>
              <Card.Img height={"200px"} variant="top" src="https://img.freepik.com/free-vector/flat-university-concept-background_23-2148189763.jpg?t=st=1726378852~exp=1726382452~hmac=04056a80d1d4246ba484abca64a5f508c933031e4a5950958313481644a47b09&w=740" />
              <Card.Body>
                <Card.Title>Student Categorization</Card.Title>
                <Card.Text>
                Our student categorization system streamlines student management by grouping students based on various criteria.
                </Card.Text>
              
              </Card.Body>
            </Card>
          </div>

          <div className='col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center align-items-center'>
            <Card style={{ width: '18rem',marginTop:'30px' }}>
              <Card.Img height={"200px"} variant="top" src="https://img.freepik.com/premium-photo/flat-design-illustration-facebook-social-network-groups_863013-52893.jpg?w=740" />
              <Card.Body>
                <Card.Title>Mobile & Web Accessibility</Card.Title>
                <Card.Text>
                Our mobile and web applications ensure seamless accessibility, with native iOS and Android apps and a responsive web design 
                </Card.Text>
              
              </Card.Body>
            </Card>
          </div>


        </div>
      </div>
    </>
  )
}

export default Landing