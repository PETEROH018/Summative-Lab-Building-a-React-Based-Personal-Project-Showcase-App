
export default function ShoeCard({shoe}) {
    return (
        <div > 
            <p>{shoe.name}</p>
            <p>{shoe.price}</p>
            <p>{shoe.category}</p>
        </div>
    )
}