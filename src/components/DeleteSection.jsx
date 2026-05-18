import { UseShoes } from '../contexts/ShoesContext'

export default function DeleteSection(){
     const {setShoes,shoes} = UseShoes()
     function HandleOnClick(id){
          fetch(`http://localhost:3000/shoes/${id}`,{
          method : 'DELETE'
        })
        .then((response) => {
          if (!response.ok){
            throw new Error(response.status)
          } 
            return response.json()
        })
        .then((deletedShoe) => {
          const updatedShoes=shoes.filter(shoe => shoe.id !== id)
          setShoes(updatedShoes)
          alert("shoe deleted successfuly")
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