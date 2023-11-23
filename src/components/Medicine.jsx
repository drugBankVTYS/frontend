import React from 'react'
import data from "../data.json"
import Navbar from './Navbar'
import "../components/styles.css"
import resim from "../pages/Home/images/molekul3.png"
// import { getData } from '../services/medicineService.jsx'

 function Medicine() {
    
    // const data = await getData()
 return (
    <div>
    <Navbar/>
    <div className='row'>
        {
            data && data.map((datas)=>(
                <div key={datas.drug_id} className="d-flex justify-content-center col-4">
                        <div className="card" style={{width: '20rem'}}>
                        <img src={resim} alt="fd" />
                        <div>{datas.drug_name}</div>
                        <h2>{datas.drug_name}</h2>
                        <p>Drug ID: {datas.drug_id}</p>
                        <p>Drug State: {datas.drug_state}</p>
                        <h3>Target Information</h3>
                        <p>Target Name: {datas.target_name}</p>
                        <p>Target UniProt: {datas.target_uniprot}</p>
                        </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Medicine