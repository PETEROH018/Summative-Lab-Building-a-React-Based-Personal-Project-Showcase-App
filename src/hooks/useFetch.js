import { useEffect, useState } from "react"
//This is the custom hook that is used to fetch data from db.json using a GET method and save it in a fetchedData state
//It uses a useEffect() with two dependencies i.e url and refetch
//When a new URL is passed, data is refetched from db.json
//When a new shoe is added through a POST request, a shoe detail is patched through a PATCH request or a shoe is deleted through a DELETE request, a data refetch is triggered by incrementing refetch value by 1
export default function useFetch(url,refetch){ 
        const[fetchedData,setFetchedData] = useState([])
        useEffect(()=>{
                fetch(url)
                .then(response => {
                     if (!response.ok) {
                        throw new Error (response.status)
                     }
                     return response.json()
                })
                .then(data => setFetchedData(data))
                .catch(error => alert(`could not fetch data from the server,${error}`))
            },[url,refetch])
    return fetchedData
}