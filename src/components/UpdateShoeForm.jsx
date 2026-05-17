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
          // console.log("updated:",updatedShoe)
          const updatedShoes = shoes.map(shoe => 
          shoe.id === updatedShoe.id ? updatedShoe : shoe
           )
          console.log(shoes)
          setShoes(updatedShoes);
          })
          .catch ((error) => console.error(error))
    
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
      <label htmlFor={changeNameId}>Choose an option: </label>
      <select 
        id={changeNameId}
        value={selected} 
        onChange={handleOnSelect}
      >
        <option value="">-- Please choose --</option>
        {shoes.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
        <div >
        <label htmlFor={changePriceId}>
          Price 
        </label>
        <input
          type="number"
          className="form-control"
          id={changePriceId}
          name="newprice"
          value={newPrice}
          onChange = {handleCaptureNewPrice}
          ref = {inputRef}
        />
      </div>


      <button type="submit">
        Submit
      </button>
      </form>
        )
}