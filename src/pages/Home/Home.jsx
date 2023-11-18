import React from 'react'
import Card from '../../components/Card'
import Navbar from "../../components/Navbar"
import "./home.css" 

const Home = () => {
  return (
    <div className='page-content'>
        <Navbar/>
            <div className='hero-section'>
            <img className='medicine-img' src='https://res-console.cloudinary.com/dvovzmoip/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/ZTJ3ZzljMjI4emVhcGRqdGFkdGU=/template_primary'>

           </img>
         </div>
           <Card/>
    </div>
  )
}

export default Home