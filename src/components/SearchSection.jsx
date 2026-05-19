import { useEffect, useId, useRef, useState } from "react"
import ShoeCard from "../components/ShoeCard";
import { UseShoes } from "../contexts/ShoesContext";

export default function SearchSection(){
    
    const searchNameId = useId()
    const searchCategoryId = useId()
    const [query,setQuery] = useState("") //query state captures the name search input typed by the user in real time
    const [selection,setSelection] = useState("") //selection state captures the category selected by the user in real time
    const [queryResult,setQueryResult] = useState([]) //queryResult captures the result from the filter after checking the conditions inside the useEffect()
    const {shoes} = UseShoes() //consuming the shoes state provided globally by ShoesContext
    //This useEffect is used to trigger a filter each time the query,selection and shoes states change
    //
    useEffect(()=>{
        
        const filteredShoes = query === "" && selection === "" //If both the search input field and category selection are empty;
            ? shoes //display all the shoes
            : query!== "" && selection === "" //If  the search input field is not empty but the category selection is empty;
            ? shoes.filter(shoe => shoe.name.toLowerCase().includes(query.toLowerCase())) //filter the shoes based on the name typed in the search input
            : selection !== "" && query === "" //If the category selection is not empty but the search input field is empty;
            ? shoes.filter(shoe => shoe.category.toLowerCase().includes(selection.toLowerCase())) //filter the shoes based on the category selected
            : shoes.filter(shoe => shoe.category.toLowerCase().includes(selection.toLowerCase())).filter(shoe => shoe.name.toLowerCase().includes(query.toLowerCase()))
              //Otherwise, if both the search input field and category selection are not empty, first filter based on category selected then filter further based on the name typed in the search input
        setQueryResult(filteredShoes) //Update the queryResult state with the filtered shoes
        }
        ,[query,selection,shoes]
        )
    // This function handles capturing the query typed by the user in the search input field
    function HandleOnChange(event){
        setQuery(event.target.value)
    }
    // This function handles capturing the category selected by the user in the category selection drop down list    
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
                    .map((item,index) => ( //the second map method is used to display the unique categories as options in the drop down list
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