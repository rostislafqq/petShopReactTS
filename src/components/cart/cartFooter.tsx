import { Link } from "react-router-dom"

const CartFooter:React.FC  =() =>{
    return(
        <div className="cartFooter">
        <Link to={"/"}><button>Вернуться назад</button></Link> 
    <h4 className="zakaz"> Заказать </h4>
      </div>
    )
}

export default CartFooter