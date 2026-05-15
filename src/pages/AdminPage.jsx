import Navbar from '../components/Navbar'
import NewShoeForm from '../components/NewShoeForm'
import UpdateShoeForm from '../components/UpdateShoeForm'
export default function AdminPage(){
    


    return (
      <>
      <Navbar/>
      <h3>Add a new shoe</h3>
      <NewShoeForm/>
      <h3>Change Shoe Price</h3>
      <UpdateShoeForm/>
    
      </>
   
    )
}