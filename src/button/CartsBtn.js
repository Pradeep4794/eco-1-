import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const CartsBtn = () => {
    const state=useSelector((state)=> state.addItem)
    return (
        <>
           <Link to="/cart" className="btn btn-primar   y m-2">
               
               <span className="fa fa-shopping-cart"></span> Cart({state.length})
               </Link> 
        </>
    )
}
