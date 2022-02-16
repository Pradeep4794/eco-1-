import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import  {delItem}  from '../redux/actions/index';

const CartDetails = () => {
    const state=useSelector((state)=> state.addItem)
    const dispatch = useDispatch()

    const handle=(item)=>{
        dispatch(delItem(item))

    }

    const cartItems =(cartItem) =>{
        return(
             <div className="container mt-5" key ={cartItem.id}>
                 <button onClick={()=>handle(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                 <div className="row justify-content-center">
                     <div className="col-md-4">
                         <img src={cartItem.img} alt="" height="300px" width="300px" />
                     </div>
                     <div className="col-md-4">
                         <h2>{cartItem.title}</h2>
                         <p>${cartItem.price}</p>
                     </div>
                </div> 
            </div>     
        )
    }
    const emptyCart =()=>{
        return(
            <div className="container mt-5">
                <div className="row">
                    <h2>Your Cart is empty</h2>
                </div>
                </div>
        )
    }
    const button=()=>{
        return(
            <div className='container'>
                <div className='row'>
                    <NavLink to="/checkout" className="btn btn-primary mt-5 w-25 mx-auto">Proceed to Check</NavLink>
                </div>
            </div>
        )
    }
    return (
        <>
            {state.length === 0 && emptyCart()}
           {state.length !== 0 && state.map(cartItems)} 
           {state.length !==0 && button()}
           
        </>
    )
}

export default CartDetails
