import { removeCart } from "../../store/Slices/cartSlice";
import { useDispatch } from 'react-redux'
const CartHeader:React.FC =() =>{
 const dispatch = useDispatch()
    return(
        <div className="cartHeader">
        <h1>Корзина</h1>
        <p
          className="clean"
          onClick={()=>{
            dispatch(removeCart())
          }}
         >
          Очистить корзину
        </p>
      </div>
    )
}

export default CartHeader