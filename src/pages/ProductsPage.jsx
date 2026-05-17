import { useEffect, useState } from "react";
import ShoeCard from "../components/ShoeCard";
import Navbar from "../components/Navbar";

export default function ProductsPage(){
    const[shoes,setShoes] = useState([])
    useEffect(()=>{
            fetch("http://localhost:3000/shoes")
            .then(response => response.json())
            .then(data => setShoes(data))
        },[])
    return (
        <>
        <Navbar/>
        {shoes.map(shoe => <ShoeCard key= {shoe.id} shoe={shoe}/>)}
        </>
    )
}