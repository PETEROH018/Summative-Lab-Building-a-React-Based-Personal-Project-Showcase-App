import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch"
const ShoesContext = createContext()

export function ShoesProvider({children}){
      const [shoes,setShoes] = useState([])
      const fetchedData = useFetch("http://localhost:3000/shoes",shoes)
      useEffect(()=>{
            setShoes(fetchedData)
            },[fetchedData]
            )
      return (
        <ShoesContext.Provider value = {{shoes,setShoes}}>
            {children}
        </ShoesContext.Provider> 
      )

}

export function UseShoes(){
  return useContext(ShoesContext)
}