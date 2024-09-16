import React, { useState, useEffect } from 'react'
import "./Home.css"
import Category from '../components/Category';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addStudent } from '../services/allApi';
import toast from 'react-hot-toast';
import TableRow from '../components/TableRow';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [show, setShow] = useState(false);

    const [depend, setDepend] = useState("")

    const [Student, setStudent] = useState({
        StudentID: "", name: "", age: "", mobile: "", cource: ""
    })

    const [user, setUser] = useState([])
    const nav = useNavigate()

    useEffect(() => {
        const loginUser = JSON.parse(sessionStorage.getItem("userData"))
        // console.log(loginUser);
        if (loginUser) {
            nav("/home")
            setUser(loginUser?.username)
        } else {
            nav("/")
        }
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleStudent = async () => {
        // console.log(Student)

        const { StudentID, name, age, mobile, cource } = Student
        if (!StudentID || !name || !age || !mobile || !cource) {
            toast.error("Enter valid inputs")
        } else {
            const res = await addStudent(Student)
            // console.log(res)
            handleClose()
            if (res.status == 201) {
                setDepend(res.data)
                toast.success("Added Successfully")
                Student({ StudentID: "", name: "", age: "", mobile: "", cource: "" })

            } else {
                toast.error("Adding Failed")
            }
        }
    }

    const handleLogout = () => {
        sessionStorage.removeItem("userData")
        nav("/")
    }


    return (
        <>
            <div className='container-fluid' style={{ minHeight: "90vh" }}>
                <Row>
                    <Col lg={9} md={8} sm={12}>
                        <div className=' shadow  container-fluid rounded my-5 main-t'>
                            <div className='d-flex justify-content-between mb-5'>
                                <h3 className='ms-3'>Welcom {user}</h3>
                                <button className='btn btn-danger me-3 ' onClick={handleLogout}>Logout</button>
                            </div>
                            <div className='d-flex '>
                                <h3 className='text-success ms-4 me-3'>All Students</h3>
                                <button className='btn btn-outline-info px-3 me-4' onClick={handleShow}>Add Student</button>
                            </div>

                            <TableRow dep={depend} />

                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={12}>
                        <Category />
                    </Col>
                </Row>

            </div>



            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} style={{color:"black"}}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="id" label="studentID" className='mb-3'>
                        <Form.Control type="number" placeholder="" onChange={(e) => { setStudent({ ...Student, StudentID: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="Name" label="Name" className='mb-3'>
                        <Form.Control type="text" placeholder="" onChange={(e) => { setStudent({ ...Student, name: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="Age" label="Age" className='mb-3'>
                        <Form.Control type="number" placeholder="" onChange={(e) => { setStudent({ ...Student, age: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="mobile" label="Mobile" className='mb-3'>
                        <Form.Control type="phone" placeholder="" onChange={(e) => { setStudent({ ...Student, mobile: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="cource" label="Cource" className='mb-3'>
                        <Form.Control type="text" placeholder="" onChange={(e) => { setStudent({ ...Student, cource: e.target.value }) }} />
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleStudent}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default Home