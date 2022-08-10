import React from "react"
import Cart from "./headerCart"
import HeaderLogo from "./headerLogo"
import { useSelector } from 'react-redux'
import { RootState } from "../../store/store"
const Header : React.FC =() =>{
    const cartPrice = useSelector((state:RootState) => state.cart.cartCost)
    return(
<header>
   
          <HeaderLogo />
        <Cart  cartPrice={cartPrice}/>
         
        </header>
    )
}
export default Header