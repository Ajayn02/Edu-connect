import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { deleteRow, getStudents,editDetails } from '../services/allApi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';


function TableRow({ dep }) {

    const [show, setShow] = useState(false);

    const [sdata, setSData] = useState([])

    const [edit, setEdit] = useState({
        StudentID: "", name: "", age: "", mobile: "", cource: "",id:""
    })

    useEffect(() => {
        displayData()
    }, [dep])

    const displayData = async () => {
        const result = await getStudents()
        if (result.status == 200) {
            setSData(result.data)
        } else {
            console.log(result)
        }
    }

    const deleteData = async (id) => {
        const res = await deleteRow(id)
        // console.log(res)
        if(res.status==200){
            displayData()
            toast.success("Deleted")
        }
       
    }

    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setShow(true)
        setEdit({...edit, StudentID:item.StudentID, name:item.name, age:item.age, mobile:item.mobile, cource:item.cource,id:item.id})
        // console.log(edit)

    }

    const editRow=async(id,data)=>{
        const rest= await editDetails(id,data)
        // console.log(rest);
        if(rest.status==200){
            toast.success("Update Success")
            handleClose()
            displayData()
            setEdit({ StudentID: "", name: "", age: "", mobile: "", cource: "",id:""})
        }else{
            toast.error("Update Failed ")
            console.log(rest)
        }
    }

    const handleDrag=(e,rowDetails)=>{
        // console.log(e)
        // console.log(rowDetails);
        e.dataTransfer.setData("stdrow",JSON.stringify(rowDetails))
        

    }

    return (
        <>
            {
                sdata.length > 0 ?

                    <Table responsive className='my-4 table-borderd   text-center table  table-hover ' >
                        <thead>
                            <tr >
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Mobile</th>
                                <th>Cource</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sdata.map((item) => (
                                    <tr key={item.id} onDragStart={(e)=>{handleDrag(e,item)}} draggable>
                                        <td>{item.StudentID}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.cource}</td>
                                        <td onClick={() => { handleShow(item) }}  ><i className="fa-solid fa-pen-to-square fa-xl" style={{ color: "#38c8e5", cursor: "pointer" }} /></td>
                                        <td onClick={() => { deleteData(item.id) }}><i className="fa-solid fa-trash-can fa-xl" style={{ color: "#f40b0b", cursor: "pointer" }} /></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </Table>
                    :
                    <h3 className='text-center mt-5 text-danger'>No Data Available</h3>
            }


            {


                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Student</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FloatingLabel controlId="stdid" label="studentID" className='mb-3'>
                            <Form.Control type="number" placeholder="" value={edit.StudentID} onChange={(e) => { setEdit({ ...edit,StudentID:e.target.value}) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="Name" label="Name" className='mb-3'>
                            <Form.Control type="text" placeholder="" value={edit.name} onChange={(e) => { setEdit({ ...edit,name:e.target.value}) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="Age" label="Age" className='mb-3'>
                            <Form.Control type="number" placeholder="" value={edit.age} onChange={(e) => { setEdit({ ...edit,age:e.target.value}) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="mobile" label="Mobile" className='mb-3'>
                            <Form.Control type="phone" placeholder="" value={edit.mobile} onChange={(e) => { setEdit({ ...edit,mobile:e.target.value}) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="cource" label="Cource" className='mb-3'>
                            <Form.Control type="text" placeholder="" value={edit.cource} onChange={(e) => { setEdit({ ...edit,cource:e.target.value}) }} />
                        </FloatingLabel>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={()=>{editRow(edit.id,edit)}} >Update</Button>
                    </Modal.Footer>
                </Modal>


            }


        </>
    )
}

export default TableRow