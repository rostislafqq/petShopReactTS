import React from "react";
import { ICards } from "../../interface/nterfaces";
import { useSelector, useDispatch } from 'react-redux'
import { addCartItem } from "../../store/Slices/cartSlice";


const Card:React.FC<ICards> =({ imageUrl  , price , title , types }) =>{
    const dispatch = useDispatch()
    const addItem =() =>{
        const item:ICards = {
            imageUrl,
            price,
            title
        }
        dispatch(addCartItem(item))
    }
    return(
        <div className="thirdPart__Card">
        <img className="thirdPart__CardImg" src={imageUrl} alt=""/>
        <h4 className="thirdPart__title"> {title}  </h4>
        <div className="thirdPart__CardNames" >
            
            <div className={types?.includes(0) ? 'thirdPart__CardName thirdPart__CardNameActive' : 'thirdPart__CardName'} >Для кошек</div>
            <div className={types?.includes(1) ? 'thirdPart__CardName thirdPart__CardNameActive' : 'thirdPart__CardName'}>Для собак</div>
        </div>
        <p><button onClick={()=>{
            addItem()
        }} className="thirdPart__btn"> купить за {price} $</button> </p>
    </div>   
    )
}

export default Card