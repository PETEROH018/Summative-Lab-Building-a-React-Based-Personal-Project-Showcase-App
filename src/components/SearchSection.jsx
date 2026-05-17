import { useEffect, useId, useState } from "react"
import ShoeCard from "../components/ShoeCard";
import { UseShoes } from "../contexts/ShoesContext";

export default function SearchSection(){
    
    const searchNameId = useId()
    const [query,setQuery] = useState("")
    const [queryResult,setQueryResult] = useState([])
    const {shoes} = UseShoes()
    useEffect(()=>{
        const filteredShoes = query === ""
            ? shoes
            : shoes.filter(shoe => shoe.name.toLowerCase().includes(query.toLowerCase()))
        setQueryResult(filteredShoes)
        }
        ,[query,shoes]
        )
    function HandleOnChange(event){
        setQuery(event.target.value)
        }
    return (
    <>
        <form>
      <div >
        <input
          type="text"
          className="form-control"
          id={searchNameId}
          aria-describedby="searchShoeName"
          name="searchshoename"
          placeholder="Search shoe by name"
          value = {query}
          onChange={HandleOnChange}
         />
      </div>
    </form>
         {queryResult.map(shoe => <ShoeCard key= {shoe.id} shoe={shoe}/>)}
    </>
    
    )
}