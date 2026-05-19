import Navbar from '../components/Navbar'
import NewShoeForm from '../components/NewShoeForm'
import UpdateShoeForm from '../components/UpdateShoeForm'
import DeleteSection from '../components/DeleteSection'
import { useState } from 'react'

export default function AdminPage(){
const [refreshAdmin,setRefreshAdmin]=useState(0)    
return (
    <>
      <Navbar/>
      <div className="d-flex justify-content-center align-items-center vh-150 bg-light mt-3 ">
        <div className="card border border-primary rounded-5 shadow" style={{width: '35rem'}}>
          <div className="card-body text-center p-4">
            <h3 className="card-title mb-3">Add a new shoe</h3>
            <NewShoeForm key={`new-${refreshAdmin}`} setRefreshAdmin={setRefreshAdmin}/>
          </div>
        </div>
      </div>
           <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card border border-primary rounded-5 shadow" style={{width: '35rem'}}>
          <div className="card-body text-center p-4">
            <h3 className="card-title mb-3">Change Shoe Price</h3>
            <UpdateShoeForm key={`update-${refreshAdmin}`} setRefreshAdmin={setRefreshAdmin}/>
          </div>
         </div>
        </div>
        <DeleteSection key={`delete-${refreshAdmin}`} setRefreshAdmin={setRefreshAdmin}/>
      
     </>
   
    )
}