import { UseShoes } from '../contexts/ShoesContext'
import {useId, useRef, useState} from 'react'

export default function UpdateShoeForm({setRefreshAdmin}){
        const changeNameId =useId()
        const changePriceId = useId()
        const inputRef = useRef(null)
        const {shoes,setShoes,setRefetch} = UseShoes()  //consuming the shoes,setShoes and setRefetch props provided globally by ShoesContext
        const [selected,setSelected] = useState("") //The selected state keeps track of the id of the shoe selected by the admin
        const [newPrice,setNewPrice] = useState(0) //The newPrice state is synced to the new price input field to capture the new price input by the user
//This function handles updating the price by making a POST request using the new price input by the user      
        function handleUpdatePrice(event){
            event.preventDefault()
            fetch(`http://localhost:3000/shoes/${selected}`,{
            method : 'PATCH',
            headers : {
                   'Content-Type': 'application/json'
                  },
            body : JSON.stringify({price : newPrice})
            })
          .then ((response) => {
          if (!response.ok) {
          throw new Error (response.status)
            }
          setRefetch(prev => prev+1) //Incrementing the refetch value triggers a refetch in the useFetch custom hook to ensure the backend is synchronized with the front end
          return response.json()
          })
          .then (updatedShoe => {
          const updatedShoes = shoes.map(shoe => 
          shoe.id === updatedShoe.id ? updatedShoe : shoe
           ) //This map array method is used to add the updated shoe to the shoes state array 
          alert("shoe price updated successfuly")
          setShoes(updatedShoes) //The updated shoes array is set as the new shoes state for optimitic rendering before the PATCH request and refetch triggered earlier are completed
          setRefreshAdmin(prev => prev+1) //This updates the refreshAdmin state thus updating the key of UpdateShoeForm component causing a UI update
          setSelected("") //This resets the shoe selection
          setNewPrice(0) //This resets the new price input
          })
          .catch ((error) => alert("Failed to update shoe price, please try again"))
    
           }
          //This function handles capturing of the id of the shoe selected
          function handleOnSelect(event){
            setSelected(event.target.value)
            inputRef.current.focus() //After selection, the new price input field is immediately brought into focus using the .current object of useRef()
          }
          //This function handles capturing the new price input typed by the admin
          function handleCaptureNewPrice(event){
            setNewPrice(event.target.value)
          }
          return(
            <form onSubmit={handleUpdatePrice}>
  <div>
      <label htmlFor={changeNameId} className="form-label me-3">Choose a shoe:  </label>
      <select 
        id={changeNameId}
        value={selected} 
        onChange={handleOnSelect}
        required
      >
        <option value="">--Select shoe-- </option>
        
        {shoes.map((item) => ( //The options displayed are obtained from the shoes state array by using a map array method
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
        <div >
        <label htmlFor={changePriceId} className="form-label">
          New Price 
        </label>
        <input
          type="number"
          className="form-control"
          id={changePriceId}
          name="newprice"
          value={newPrice}
          onChange = {handleCaptureNewPrice}
          required
          ref={inputRef}
        />
      </div>


      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
      </form>
        )
}