import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Product = () => {
  let [products,setProducts]=useState([])
  let navigate=useNavigate()
  let fetchAPI= async()=>{
    let respdata=await axios.get('http://localhost:4000/products1')
       setProducts(respdata.data)
  }
  useEffect(()=>{
    fetchAPI()
  },[])
  let handleclick=(productId)=>{
        navigate(`/adminportal/viewmore/${productId}`)
  }
  return (
    <div>
      <div className="products">
        <h1>Products</h1>
        <div className="container">
          {products.map((elem,index)=>{
             let {id,title,image,category}=elem
             return(
            <div className="card" key={index}>
                   <div className="cat">{category}</div>
                   <div className="image"><img src={image} alt="" srcSet="" /></div>
                   <div className="title">{title}</div>
                   <div className="btns">
                     <button onClick={()=>handleclick(id)} style={{color:"green"}}>View More </button>
                    
                    
                   </div>
            </div>
             )
          })}
        </div>
      </div>
    </div>
  )
}

export default Product
