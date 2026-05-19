import useFetch from "../hooks/useFetch";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

export default function ShoeDetails(){
  const {id} = useParams() //The id parameter is obtained from the route through destructuring the object returned by useParams()
  const shoe=useFetch(`http://localhost:3000/shoes/${id}`) //useFetch() custom hook is used to GET the shoe details of the shoe with the ID passed from the route
  
  return(
    <>
        <Navbar/>
        <div className="d-flex justify-content-center align-items-center  vh-100">
            <div className="card zoom-card border border-primary rounded-5 shadow " style={{width: '22rem'}}>
                <img src ={shoe.imageUrl} alt={shoe.name} className="card-img-top mt-4"/>              
                <div className="card-body text-center d-flex flex-column">
                    <h4 className="card-title mb-3">{shoe.name}</h4>
                    <p className="card-text text-muted">{shoe.description}</p>
                    <p className="card-text text-muted">{shoe.category}</p>
                    <p className="card-text text-muted">ksh: {shoe.price}</p>
                </div>
            </div>
        </div>
    </>
    

  )
}