import React from "react";
import  './cart.css'
import CartFooter from "./cartFooter";
import CartHeader from "./cartHeader";
import CartItem from "./cartItem";
import { useSelector , useDispatch } from 'react-redux'
import { RootState } from "../../store/store";
 
const CartContainer:React.FC =() =>{
    const dispatch = useDispatch()
    const cart = useSelector((state:RootState) => state.cart.cart)
   
    
    return(
        <>
       <CartHeader />
       {cart.length > 0?  cart.map((val) =>(
        <CartItem imageUrl={val.imageUrl}
        price={val.price}
        title={val.title}
        />
       )): 'Корзина пуста'}
       
        <CartFooter />
        </>
    )
}

export default CartContainer