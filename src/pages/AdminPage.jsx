import Navbar from '../components/Navbar'
import NewShoeForm from '../components/NewShoeForm'
export default function AdminPage(){

    return (
      <>
      <Navbar/>
       <div >
        <h3>Add a new shoe</h3>
        <NewShoeForm/>
       </div>
      </>
   
    )
}