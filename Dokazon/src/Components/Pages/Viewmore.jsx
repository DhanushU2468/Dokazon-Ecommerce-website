import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Viewmore = () => {
    let params=useParams()
    let productsId=params.id
    let [oneProduct,setoneProduct]=useState({})
    let fetchApi=async()=>{
          let respdata=await axios.get(`http://localhost:4000/products1/${productsId}`)
          setoneProduct(respdata.data)
    }
    useEffect(()=>{
        fetchApi()
    },[])
    let {id,title,price,description,category,image,rating={}}=oneProduct
  return (
    <div>
       
        <div className="card">
                   <div className="cat">{category}</div>
                   <div className="image"><img src={image} alt="" srcSet="" /></div>
                   <div className="price">{price*86}</div>
                   <div className="title">{title}</div>
                   <div className="description">{description}</div>
                   <div className="ratting">{rating.rate}</div>
                   <div className="count">{rating.count}</div>
      
        </div>
       
    </div>
  )
}

export default Viewmore
