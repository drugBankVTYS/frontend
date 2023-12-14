import React, { useState } from 'react'
import data from "../../data.json"
import Navbar from '../../components/Navbar'
import "../../components/styles.css"
import "./medicine.css"

// import { getData } from '../services/medicineService.jsx'

 function Medicine() {
    const [currentPage,setCurrentPage] =useState(1)
    const datasPerPage = 10;
  const lastIndex = currentPage* datasPerPage;
  const firstIndex = lastIndex - datasPerPage;
  const records = data.slice(firstIndex , lastIndex);
  const nPage = Math.ceil(data.length / datasPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  function prePage(){
    if(currentPage !== firstIndex){
      setCurrentPage(currentPage - 1)
    }
  }
  function nextPage(){
    if(currentPage !== nPage){
      setCurrentPage(currentPage + 1)
    }
  }
  function changePage(id){
    setCurrentPage(id)
  }
    // const data = await getData()
 return (
    <div>
    <Navbar/>
       <div className='row'>
        {
            data && data.map((datas)=>(
                <div key={datas.drug_id} className="d-flex justify-content-center col-4">
                        <div className="card-medicine" style={{width: '30rem'}}>
                       
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
             <ul className="pagination">
          <li className="page-item">
                    <a href="#" className="page-link" onClick={prePage}>Önceki</a>
          </li>
          {numbers.map((n , i)=>(
            <li className={`page-item ${currentPage === n ? "activep" : ""}`} key={i}>
              <a href="#" className="page-link" onClick={()=>changePage(n)} > {n} </a>
            </li>
          ))}

          <li className="page-item">
                    <a href="#" className="page-link" onClick={nextPage}>Sonraki</a>
          </li>
        </ul>
    </div>
  )
}

export default Medicine