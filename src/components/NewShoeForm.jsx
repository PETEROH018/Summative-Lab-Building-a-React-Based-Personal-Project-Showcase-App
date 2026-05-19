import { UseShoes } from '../contexts/ShoesContext'
import {useId, useState} from 'react'

export default function NewShoeForm({setRefreshAdmin}){
        const nameId = useId() 
        const descriptionId = useId()
        const categoryId = useId()
        const quantityId = useId()
        const priceId = useId()
        const imageId = useId()
        const {shoes,setShoes,setRefetch} = UseShoes() //consuming the shoes,setShoes and setRefetch props provided globally by ShoesContext
        const [newShoe,setNewShoe] = useState({
              name: "",
              description: "",
              category: "",
              quantity: 0,
              price: 0,
              imageUrl: ""
            }) //newShoe state captures a new shoes added by the admin using a form
//This function handles creating a new shoe in the json server by making a POST request using the shoe data captured from a form
        function handleOnSubmit(event){
              event.preventDefault()
              fetch('http://localhost:3000/shoes',{
                method : 'POST',
                headers : {
                           'Content-Type': 'application/json'
                          },
                body : JSON.stringify(newShoe)
              })
              .then ((response) => {
                if (!response.ok) {
                  throw new Error (response.status)
                }
                setRefetch(prev => prev+1) //Incrementing the refetch value triggers a refetch in the useFetch custom hook to ensure the backend is synchronized with the front end
                return response.json()
                })
              .then((data) => {
                setShoes((prev)=> [...prev,newShoe]) //setShoes setter function updates the shoes state array with the new shoe for optimistic rendering before the POST request and refetch triggered earlier are completed
                alert("Added a new shoe successfully")
                setRefreshAdmin(prev => prev+1) //This updates the refreshAdmin state thus updating the key of NewShoeForm component causing a UI update
                setNewShoe(
                    {
                           name: "",
                           description: "",
                           category: "",
                           quantity: 0,
                           price: 0,
                           imageUrl: ""
                    }
                ) //This resets the input field of the form used by the admin to add a new shoe to allow for another shoe to be added
              })
              .catch ((error) => alert("Failed to add new shoe, please try again"))
            }
        //This function handles collecting the new shoe details in real time based on the input field that is currently being typed into
        function handleOnChange(event){
              setNewShoe((prev) => ({...prev, [event.target.name] : event.target.value}))
          }
    return (
        <form onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor={nameId} className="form-label" >
          Shoe name
        </label >
        <input
          type="text"
          className="form-control"
          id={nameId}
          name="name"
          value={newShoe.name}
          onChange={handleOnChange}
          required
         />
      </div>
      <div className="mb-3">
        <label htmlFor={descriptionId} className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id={descriptionId}
          name="description"
          value = {newShoe.description}
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor={categoryId} className="form-label">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          id={categoryId}
          name="category"
          value={newShoe.category}
          onChange={handleOnChange}
          required
      />
      </div>
             <div className="mb-3">
        <label htmlFor={quantityId} className="form-label">
          Quantity
        </label>
        <input
          type="number"
          className="form-control"
          id={quantityId}
          name="quantity"
          value={newShoe.quantity}
          onChange={handleOnChange}
          required
        />
      </div>
            <div className="mb-3">
        <label htmlFor={priceId} className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id={priceId}
          name="price"
          value={newShoe.price}
          onChange={handleOnChange}
          required
        />
      </div>
    <div className="mb-3">
        <label htmlFor={imageId} className="form-label">
          Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id={imageId}
          name="imageUrl"
          value={newShoe.imageUrl}
          onChange={handleOnChange}
          required
        />
      </div>
      
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    )
}