import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch"

const ShoesContext = createContext() //ShoesContext is declared here 

//A ShoesProvider is exported which uses useFetch custom hook to obtain shoes data by passing a json server URL
//The shoes data is then saved in a shoes state that is updated using a setShoes setter function
export function ShoesProvider({children}){
      const [shoes,setShoes] = useState([])
      const [refetch,setRefetch] = useState(0) //This state is used to trigger a refetch every time a POST,PUT,PATCH or DELETE request is made
      const fetchedData = useFetch("http://localhost:3000/shoes",refetch)
      useEffect(()=>{ //This useEffect prevents triggering an infinite re-render by ensuring that the shoes state is only updated when fetchedData changes
                setShoes(fetchedData)
               },[fetchedData]
            )
      return (
        <ShoesContext.Provider value = {{shoes,setShoes,setRefetch}}>
            {children}
        </ShoesContext.Provider> 
      )

}

export function UseShoes(){
  return useContext(ShoesContext)
}