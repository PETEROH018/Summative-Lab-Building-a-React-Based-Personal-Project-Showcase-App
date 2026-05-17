import { UseShoes } from '../contexts/ShoesContext'
import {useId, useRef, useState} from 'react'

export default function UpdateShoeForm(){
        const changeNameId =useId()
        const changePriceId = useId()
        const inputRef = useRef(null)
        const {shoes,setShoes} = UseShoes()   
        const [selected,setSelected] = useState("")
        const [newPrice,setNewPrice] = useState(0)
      
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
          return response.json()
          })
          .then (updatedShoe => {
          const updatedShoes = shoes.map(shoe => 
          shoe.id === updatedShoe.id ? updatedShoe : shoe
           )
          alert("shoe price updated successful")
          setShoes(updatedShoes);
          })
          .catch ((error) => alert("Failed to update shoe price, please try again"))
    
           }
          function handleOnSelect(event){
            setSelected(event.target.value)
            inputRef.current.focus()
          }
          function handleCaptureNewPrice(event){
            setNewPrice(event.target.value)
          }
          return(
            <form onSubmit={handleUpdatePrice}>
  <div>
      <label htmlFor={changeNameId} className="form-label">Choose a shoe:  </label>
      <select 
        id={changeNameId}
        value={selected} 
        onChange={handleOnSelect}
      >
        <option value="">--Select shoe-- </option>
        {shoes.map((item) => (
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
        />
      </div>


      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      </form>
        )
}