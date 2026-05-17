import { useEffect, useState } from "react"
export default function useFetch(url,shoes){
        const[fetchedData,setFetchedData] = useState([])
        useEffect(()=>{
                fetch(url)
                .then(response => response.json())
                .then(data => setFetchedData(data))
            },[url,shoes])
    return fetchedData
}