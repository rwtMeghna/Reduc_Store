import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import "./index.css"

const Navbar = () => {

const items=useSelector((items)=>items.cart)

  return (
    <div style={{display:'flex' , alignItems:'center',justifyContent:"space-between",fontWeight:"bold" }}>
        <span>Redux Store</span>
        <div  style={{margin:"5px"}}>
            <Link  className="navLink" to={"/"} style={{fontWeight:'bolder'}}>Home</Link>
            <Link className="navLink" to={"/cart"} style={{marginRight:"20px"}}>Cart</Link>
            <span style={{fontWeight:"bold"}}>item:{items.length}</span>
        </div>
    </div>
  )
}

export default Navbar