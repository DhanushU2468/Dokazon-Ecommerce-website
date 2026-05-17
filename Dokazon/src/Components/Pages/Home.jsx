import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate=useNavigate()
  return (
    <div>
      <div className="heading">
        <h1>DOKAZON :</h1>
        <h2>Your Trusted Online Marketplace</h2>
      </div>
      <div className="explore-button">
        <button onClick={()=>{navigate('/adminportal/product')}}>Explore</button>
      </div>

    </div>
  )
}

export default Home

