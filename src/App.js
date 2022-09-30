// import React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import Login from './pages/login';
import Shop from './pages/shop';
import About from "./pages/About";
import './App.css';
import Register from "./pages/Register"
import AddProduct from './pages/AddProduct';
import Test from "./pages/test";  


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/  shop" element={<Shop />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/test" element={<Test/>}></Route>
        <Route path="/addproduct" element={<AddProduct/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
