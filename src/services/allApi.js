import axios from "axios";
const base_url=`https://student-m-server.onrender.com`

export const addStudent=async(data)=>{
    return await axios.post(`${base_url}/students`,data)
}

export const getStudents=async()=>{
    return await axios.get(`${base_url}/students`)
}
export const deleteRow=async(id)=>{
    return await axios.delete(`${base_url}/students/${id}`)
}
export const editDetails=async(id,data)=>{
    return await axios.put(`${base_url}/students/${id}`,data)
}

export const handleCat=async(data)=>{
    return await axios.post(`${base_url}/category`,data)
}

export const viewCat=async()=>{
    return await axios.get(`${base_url}/category`)
}

export const removeCat=async(id)=>{
    return await axios.delete(`${base_url}/category/${id}`)
}

export const updateCat=async(id,data)=>{
    return await axios.put(`${base_url}/category/${id}`,data)
}

export const displayCatlist=async(id)=>{
        return await axios.get(`${base_url}/category/${id}`)
}

export const addUser=async(data)=>{
    return await axios.post(`${base_url}/user`,data)
}

export const checkEmail=async(email)=>{
    return await axios.get(`${base_url}/user?email=${email}`)
}

export const checkLogin=async(email,password)=>{
    return await axios.get(`${base_url}/user?email=${email}&password=${password}`)
}

