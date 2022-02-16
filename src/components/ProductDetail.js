import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../Data';
import {useState}  from 'react'
import { useDispatch } from 'react-redux';
import { addItem,delItem } from '../redux/actions/index';

const ProductDetail = () => {
    const [cartBtn,setCartBtn]=useState("Add to Cart")
    const {id}=useParams();
    const proDetail=Data.filter(item=> item.id==id)
    const product=proDetail[0]
    
    const dispatch=useDispatch()
     const handleCart = (product) =>{
         if (cartBtn==="Add to Cart"){
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to cart")
         }
     }
    return (
         <>
               <div className="container mt-2 py-3">
                 <div className="row">
                       <div className="col-md-6 d-flex justify-content-center mx-auto">
                         <img src={product.img} alt={product.title} height="400px" />
                         </div> 
                         <div className="col-md-6 d-flex  flex-column  justify-content-center">  
                        
                             <h1 className="display-5">{product.title}</h1>
                            
                        
                        
                             
                             <h2>{product.price}</h2>
                             <p>{product.desc}</p> 
                              <button onClick={()=>handleCart(product)} className="btn btn-primary">{cartBtn} </button>  
                               
                        </div> 
                          
                   </div>
               </div>  
               
        </>
    )
}   

export default ProductDetail;
