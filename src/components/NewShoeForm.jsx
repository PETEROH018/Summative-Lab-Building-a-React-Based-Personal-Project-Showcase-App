import { UseShoes } from '../contexts/ShoesContext'
import {useId, useState} from 'react'

export default function NewShoeForm(){
        const nameId = useId() 
        const descriptionId = useId()
        const categoryId = useId()
        const quantityId = useId()
        const priceId = useId()
        const imageId = useId()
        const {shoes,setShoes} = UseShoes()
        const [newShoe,setNewShoe] = useState({
              name: "",
              description: "",
              category: "",
              quantity: 0,
              price: 0,
              imageUrl: ""
            }) 
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
                return response.json()
                })
              .then((data) => {
                setShoes((prev)=> [...prev,newShoe])
                alert("Added a new shoe successfully")
                setNewShoe(
                    {
                           name: "",
                           description: "",
                           category: "",
                           quantity: 0,
                           price: 0,
                           imageUrl: ""
                    }
                )
              })
              .catch ((error) => alert("Failed to add new shoe, please try again"))
            }
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