import { useEffect, useState } from "react"
export default function useFetch(url){
        const[fetchedData,setFetchedData] = useState([])
        useEffect(()=>{
                fetch(url)
                .then(response => response.json())
                .then(data => setFetchedData(data))
            },[url])
    return fetchedData
}