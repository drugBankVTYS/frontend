import React from 'react'
import Card from '../../components/Card'
import Navbar from "../../components/Navbar"
import "./home.css" 
import resim from "./images/ilac.png"
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className='page-content '>
        <Navbar/>
            <div className='d-flex w-100 flex justify-content-center'>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='fs-1 text-black fw-bolder'>Building the foundation for better health outcomes</div>
                <div>Access the right information at the right time, with our intelligent clinical drug data API and in-depth knowledge database.</div>
                </div>
              <img className='medicine-img' alt='a' src={resim}/>
            </div>
           <Card/>
           <Footer/>
    </div>
  )
}

export default Home