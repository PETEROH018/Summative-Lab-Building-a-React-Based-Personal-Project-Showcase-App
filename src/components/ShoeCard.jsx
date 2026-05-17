
export default function ShoeCard({shoe}) {
    return (
    <div className="d-flex justify-content-center align-items-center  bg-light">
        <div className="card zoom-card border border-primary rounded-5 shadow " style={{width: '22rem'}}>
             <img src ={shoe.imageUrl} alt={shoe.name} className="card-img-top mt-4"/>              
             <div className="card-body text-center d-flex flex-column">
                <h4 className="card-title mb-3">{shoe.name}</h4>
                <p className="card-text text-muted">ksh: {shoe.price}</p>
            </div>
        </div>

    </div>
            
        
    )
}