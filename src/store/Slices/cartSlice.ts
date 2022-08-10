import { ICards, IDeliteItemCart } from './../../interface/nterfaces.d';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  cart: ICards[];
  cartCost: number ;
}

const initialState: CartState = {
cart: [],
cartCost:0,
} as CartState

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addCartItem: (state:CartState, action: PayloadAction<ICards>) => {
      if(state.cart.find((el)=> el.imageUrl === action.payload.imageUrl)){
        state.cart =[...state.cart]
      }
      else{   
         state.cart = [...state.cart , action.payload]
        state.cartCost += action.payload.price
      }
    
    },
    removeCart:(state:CartState) =>{
        state.cart = []
        state.cartCost=0
    },
    removeCartItem:(state:CartState ,action: PayloadAction<IDeliteItemCart> ) =>{
        state.cart=state.cart.filter((val)=>
            val.imageUrl !== action.payload.imageUrl
    )
    
    state.cartCost -= action.payload.price
  },
}})


export const {  addCartItem , removeCart , removeCartItem} = cartSlice.actions

export default cartSlice.reducer