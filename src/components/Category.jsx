import React, { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { handleCat , viewCat,removeCat,updateCat } from '../services/allApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Category() {
    const nav=useNavigate()

    const [show, setShow] = useState(false);

    const [Category, setCategory] = useState({
        CategoryID: "", name: "",sdetails:[]
    })

    const [cdata, setCdata] = useState([])

    const [reload,setReload]=useState("")

    useEffect(()=>{
        displayCat()
    },[reload])

    const { CategoryID, name } = Category

    const addCategory = async () => {
        if (!CategoryID || !name) {
            toast.error("Enter Valid Inputs")
        } else {
            const res = await handleCat(Category)
            // console.log(res);
            if (res.status == 201) {
                setReload(res)
                handleClose()
                toast.success("Category Added")
            } else {
                console.log(res);
                toast.error("Category Adding Failed")
            }
        }

    }

    const displayCat=async()=>{
        const result=await viewCat()
        // console.log(result)
        setCdata(result.data)
    }

    const deleteCat=async(id)=>{
        const result2=await removeCat(id)
        // console.log(result2)
        if(result2.status==200){
            toast.success("Category Deleted")
            displayCat()
        }else{
            console.log(result2)
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dragOverHandler=(e)=>{
        // console.log(e);
        e.preventDefault()
    }
    const dropHandler=async(e,cat)=>{
        // console.log(e)
        // console.log(cat);
        const studentsData= JSON.parse(e.dataTransfer.getData("stdrow"))
        // console.log(studentsData);
        cat.sdetails.push(studentsData)
        // console.log(cat)
        const res2= await updateCat(cat.id,cat)     
        // console.log(res2)
        if(res2.status==200){
            toast.success("Added")
        }else{
            toast.error("Adding Failed")
        }
         
    }

    const handleCatList = (id)=>{
        nav("/catlist")
        localStorage.setItem("key",JSON.stringify(id))
    }

    return (
        <>
            <div className='container-fluid border shadow rounded my-5 p-3 '>
               
                    <h2 className='mb-3 '>Categories</h2>
                    <button className='btn btn-success ' onClick={handleShow}>Add +</button>
              
                <div className='d-flex row justify-content-center' >
                    {
                        cdata.length > 0 ?
                            cdata.map(item => (
                                <Card key={item.id} style={{ width: '13rem',margin:'20px 20px',cursor:"pointer" }} onDragOver={(e)=>(dragOverHandler(e))}  onDrop={(e)=>{dropHandler(e,item)}} className='shadow'>
                                    <Card.Body className='text-center mt-3'>
                                        <Card.Title className='text-center mb-4'>{item.name}</Card.Title>
                                        <button className='btn btn-outline-success me-3' onClick={()=>{handleCatList(item.id)}}>View</button>
                                        <button className='btn ms-2 btn-outline-danger' onClick={()=>{deleteCat(item.id)}}><i className="fa-solid fa-trash-can fa-lg" style={{ color: "#f40b0b", cursor: "pointer" }} /></button>
                                       
                                    </Card.Body>
                                </Card>
                            ))

                            :
                            <h5 className='text-center text-danger mt-3'>No Categories Added</h5>
                    }

                </div>

            </div>


            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="id" label="Category ID" className='mb-3'>
                        <Form.Control type="number" placeholder="" onChange={(e) => { setCategory({ ...Category, CategoryID: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="name" label="Category Name" className='mb-3'>
                        <Form.Control type="text" placeholder="" onChange={(e) => { setCategory({ ...Category, name: e.target.value }) }} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addCategory}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Category