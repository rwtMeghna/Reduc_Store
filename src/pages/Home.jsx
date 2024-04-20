import React , {useState , useEffect} from 'react'
import { add } from '../Redux/Cartslice';
import { useDispatch, useSelector } from 'react-redux';
import {STATUSES , fetchProducts} from "../Redux/Productslice"

const Home = () => {


const dispatch=useDispatch();

const{data:products, status} =useSelector((state)=>state.product)

useEffect(()=>{
    dispatch(fetchProducts());
},[])


               
const handleAdd=(product)=>{
    dispatch(add(product));
}

if(status === STATUSES.Loading){
    return <h2 style={{fontWeight:"bolder"}}>Loading...</h2>
}

  return (
    <div className='productsWrapper'>
       {
        products.map((product)=>(
            <div className='card' key={product.id}>
                <img src={product.images} alt="image"/>
                <h3>  {product.title}  </h3>
                <h4>   {product.price} </h4>
                <button className='btn' onClick={()=>handleAdd(product)}>Add to Cart</button>
            </div>
        ))
       }
    </div>
  )
}

export default Home