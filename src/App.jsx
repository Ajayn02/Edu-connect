import './App.css'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import { Toaster } from 'react-hot-toast';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {



  return (
    <> 
    <Header/>
    <Routes>
    <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/catlist' element={<CategoryList/>} />
      <Route path='/log' element={<Login/>} />
      <Route path='/sign' element={<Signup/>} />
    </Routes>
    <Toaster />
    <Footer/>
    </>
  )
}

export default App
