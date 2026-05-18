import { useEffect, useId, useRef, useState } from "react"
import ShoeCard from "../components/ShoeCard";
import { UseShoes } from "../contexts/ShoesContext";

export default function SearchSection(){
    
    const searchNameId = useId()
    const searchCategoryId = useId()
    const [query,setQuery] = useState("")
    const [selection,setSelection] = useState("")
    const [queryResult,setQueryResult] = useState([])
    const {shoes} = UseShoes()
    useEffect(()=>{
        
        const filteredShoes = query === "" && selection === ""
            ? shoes
            : query!== "" && selection === ""
            ? shoes.filter(shoe => shoe.name.toLowerCase().includes(query.toLowerCase()))
            : selection !== "" && query === ""
            ? shoes.filter(shoe => shoe.category.toLowerCase().includes(selection.toLowerCase()))
            : shoes.filter(shoe => shoe.category.toLowerCase().includes(selection.toLowerCase())).filter(shoe => shoe.name.toLowerCase().includes(query.toLowerCase()))
            
        setQueryResult(filteredShoes)
        }
        ,[query,selection,shoes]
        )
    function HandleOnChange(event){
        setQuery(event.target.value)
    }
        
    function HandleOnSelection(event){
        setSelection(event.target.value)
    }

    return (
    <>
          <div className="container mt-3 bg-white sticky-top "  style={{top: '35px'}}>
                <form> 
                    <div className="row g-2" >
                    <div className="col">
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
            <div className="col">
                <label htmlFor={searchCategoryId} className="form-label me-3">Search shoe by category:  </label>
                <select 
                    id={searchCategoryId}
                    value={selection} 
                    onChange={HandleOnSelection}
                    required
                >
                 <option value="">--Select category-- </option>

                    {
                    shoes.map(shoe => shoe.category) // map method is used to collect all categories
                    .reduce((acc,curr) =>{ if(!acc.includes(curr)){
                        acc.push(curr) // reduce method is used to remove duplicate categories
                    }
                    return acc
                    },[])
                    .map((item,index) => ( //the second map method is used to display the unique categories
                        <option key={index} value={item}>
                        {item}
                        </option>
                    ))}
                </select>
            </div>
            </div>
                 </form>
            </div>
  
    <div className="container my-5">
     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {queryResult.map(shoe => 
        <div className="col" key= {shoe.id}>
        <ShoeCard  shoe={shoe}/>
        </div>
        )}
     </div>
    </div>
         
    </>
    
    )
}