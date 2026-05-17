import {useId} from 'react'
import Navbar from '../components/Navbar'
export default function AdminPage(){
    const nameId = useId() 
    const descriptionId = useId()
    const categoryId = useId()
    const quantityId = useId()
    const priceId = useId()
    const imageId = useId()
    const changeNameId =useId()
    const changePriceId = useId()
    

    return (
      <>
      <Navbar/>
       <div >
        <h3>Add a new shoe</h3>
        <form
   
    >
      <div >
        <label htmlFor={nameId} >
          Shoe name
        </label >
        <input
          type="text"
          className="form-control"
          id={nameId}
          aria-describedby="emailHelp"
          name="shoename"
         />
      </div>
      <div >
        <label htmlFor={descriptionId}>
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id={descriptionId}
          name="description"
        />
      </div>
      <div >
        <label htmlFor={categoryId}>
          Category
        </label>
        <input
          type="text"
          className="form-control"
          id={categoryId}
          name="category"
        />
      </div>
             <div >
        <label htmlFor={quantityId}>
          Quantity
        </label>
        <input
          type="number"
          className="form-control"
          id={quantityId}
          name="quantity"
        />
      </div>
            <div >
        <label htmlFor={priceId}>
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id={priceId}
          name="price"
        />
      </div>
    <div >
        <label htmlFor={imageId}>
          Image URL
        </label>
        <input
          type="number"
          className="form-control"
          id={imageId}
          name="price"
        />
      </div>


      <button type="submit">
        Submit
      </button>
    </form>
    <h3>Change Shoe Price</h3>
    <form>
      <div >
        <label htmlFor={changeNameId}>
          Shoe name
        </label>
        <input
          type="text"
          className="form-control"
          id={changeNameId}
          aria-describedby="emailHelp"
          name="shoename"
         />
      </div>
        <div >
        <label htmlFor={changePriceId}>
          Price 
        </label>
        <input
          type="number"
          className="form-control"
          id={changePriceId}
          name="price"
        />
      </div>


      <button type="submit">
        Submit
      </button>
      </form>
    </div>
      </>
   
    )
}