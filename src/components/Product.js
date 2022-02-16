import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../Data'

 const Product = () => {

     const cardItem=(item) =>{
         
         return(
            <div className="card my-2 py-2" key ={item.id}  style={{width: "18rem"}}>
            <img src={item.img} className="card-img-top" alt={item.title}/>
            <div className="card-body text-center">
              <h5 className="card-title">{item.title}</h5>
              <p className="lead">${item.price}</p>
              <Link to={`/products/${item.id}`} className="btn btn-outline-primary">Buy</Link>
            </div>
          </div>
         );      
     }
    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product  </h1>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row justify-content-around">
                    {Data.map(cardItem)}
                </div>
            </div>
                </> 
            
    )
}
export default Product;