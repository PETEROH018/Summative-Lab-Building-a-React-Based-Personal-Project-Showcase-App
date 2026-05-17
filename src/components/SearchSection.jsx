import { useEffect, useId, useState } from "react"
import ShoeCard from "../components/ShoeCard";
import { UseShoes } from "../contexts/ShoesContext";
// import useFetch from "../hooks/useFetch"

export default function SearchSection(){
    
    const searchNameId = useId()
    const [query,setQuery] = useState("")
    const [queryResult,setQueryResult] = useState([])
    const {shoes} = UseShoes()
    // const fetchedData = useFetch("http://localhost:3000/shoes")
    // console.log(fetchedData)
    // setShoes( fetchedData)
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
          <div className="d-flex justify-content-center align-items-center vh-150 bg-light ">
              <div className="card-body text-center p-4">
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
                </div>
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