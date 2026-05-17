import Navbar from '../components/Navbar'
import NewShoeForm from '../components/NewShoeForm'
import UpdateShoeForm from '../components/UpdateShoeForm'
export default function AdminPage(){
    


    return (
    <>
      <Navbar/>
      <div className="d-flex justify-content-center align-items-center vh-150 bg-light mt-3 ">
        <div className="card border border-primary rounded-5 shadow" style={{width: '35rem'}}>
          <div className="card-body text-center p-4">
            <h3 className="card-title mb-3">Add a new shoe</h3>
            <NewShoeForm/>
          </div>
        </div>
      </div>
           <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card border border-primary rounded-5 shadow" style={{width: '35rem'}}>
          <div className="card-body text-center p-4">
            <h3 className="card-title mb-3">Change Shoe Price</h3>
            <UpdateShoeForm/>
          </div>
         </div>
        </div>
      
     </>
   
    )
}