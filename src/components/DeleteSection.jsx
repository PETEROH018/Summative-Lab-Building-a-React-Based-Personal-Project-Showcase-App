import { UseShoes } from '../contexts/ShoesContext'

export default function DeleteSection({setRefreshAdmin}){
     const {setShoes,shoes,setRefetch} = UseShoes() //consuming the shoes,setShoes and setRefetch props provided globally by ShoesContext
//This function handles deleting a shoe from the json server by making a DELETE request with the id of the shoe to be deleted
     function HandleOnClick(id){
          fetch(`http://localhost:3000/shoes/${id}`,{
          method : 'DELETE'
        })
        .then((response) => {
          if (!response.ok){
            throw new Error(response.status)
          } 
            setRefetch(prev => prev+1) //Incrementing the refetch value triggers a refetch in the useFetch custom hook to ensure the backend is synchronized with the front end
            return response.json()
        })
        .then((deletedShoe) => {
          const updatedShoes=shoes.filter(shoe => shoe.id !== id) //The filter method is used to create an updatedShoes array that does not include the deleted shoe
          setShoes(updatedShoes) // setShoes setter function is used to update the shoes state array for optimistic rendering before the DELETE request and refetch triggered earlier are completed
          alert("shoe deleted successfuly")
          setRefreshAdmin(prev => prev+1) //This updates the refreshAdmin state thus updating the key of DeleteSection component causing a UI update
        })
        .catch((error) => alert("could not delete shoe, please try again"))
    
        }
    return (
        <div className="container my-5">
            <h3 className="card-title mb-3 text-center">Delete a shoe</h3>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {shoes.map(shoe => 
                <div className="col" key= {shoe.id}>
                    <div className="d-flex justify-content-center align-items-center  ">
                      <div className="card zoom-card border border-primary rounded-5 shadow " style={{width: '22rem'}}>
                          <img src ={shoe.imageUrl} alt={shoe.name} className="card-img-top mt-4"/>              
                          <div className="card-body text-center d-flex flex-column">
                            <h4 className="card-title mb-3">{shoe.name}</h4>
                            <p className="card-text text-muted">ksh: {shoe.price}</p>
                            <button className='btn btn-danger' onClick={()=>HandleOnClick(shoe.id)}>Delete</button>
                            </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
            </div>
    )
}