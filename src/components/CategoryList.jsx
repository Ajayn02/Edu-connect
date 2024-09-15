import React from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { displayCatlist } from '../services/allApi';
import { useEffect,useState } from 'react';



function CategoryList() {
    const nav = useNavigate()

    const [catlistData,setCatlistData]=useState([])
    const [catName,setCatName]=useState([])

    useEffect(() => {
        handleCatlistDisplay()
    }, [])

    const handleBackward = () => {
        nav("/home")
       
    }

    const handleCatlistDisplay = async () => {
        const id = localStorage.getItem("key")
        const res = await displayCatlist(id)
        if(res.status==200){
            // localStorage.removeItem("key")
            setCatlistData(res.data.sdetails)
            setCatName(res.data.name)
        }else{
            console.log(res)
        }
    }

//    console.log(catName.name);
   

    return (
        <>
            <div className='border rounded shadow border-3 p-5 container my-5  main-t '>

                <div className='d-flex justify-content-between'>
                    <h3 className='text-info'>Category : {catName}</h3>
                    <button className='btn btn-info' onClick={handleBackward}>Go Back</button>
                </div>
                {
                    catlistData.length>0 ?
                    <Table responsive className='my-4 table-borderd text-center table  table-hover text-center'>
                    <thead>
                        <tr >
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Mobile</th>
                            <th>Cource</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            catlistData.length>0 ?
                           catlistData.map((item)=>(
                                <tr key={item.id}>
                                    <td>{item.StudentID}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.cource}</td>
                                    
                                </tr>
                           ))
                           :
                           <h3>No Details Added</h3>
                        }
                    </tbody>
                </Table>
                :
                <h3 className='mt-5'>No Data Added</h3>
                }
                
            </div>
        </>
    )
}

export default CategoryList