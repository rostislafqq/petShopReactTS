import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICards } from "../../interface/nterfaces";
import Card from "./card";
import Сategories from './categories'
import Input from "./input";
import Sort from "./sort";


const Home:React.FC=() =>{
    //категории
    const [category , setCategory] = useState<number >(0)
    //сортировка
    
    const [sort,setSort] = useState<number>(0)
    const [isVisable,setIsvisable] = useState<boolean>(false)
    //Карточки
    const [cards,setCards] = useState<ICards[] >([])

    useEffect(()=>{
        const getCards = async () =>{
            const res = await axios.get(`https://62dfc3bd976ae7460bf328c3.mockapi.io/PetShop?${
                category === 0 ? '' : 'category=' + category
              }&sortBy=price&order=${sort === 0 ? 'asc' : 'desc'}`)
            setCards(res.data)         
        }
        getCards()
       
    },[sort,category])
    //поиск
    const [inputValue,setInputValue] = useState('')
    const cardFilter = cards.filter((val)=>{
        if (val.title.toLowerCase().includes(inputValue.toLocaleLowerCase())) return true
     }).map((val) =>(<Card price={val.price} title={val.title} types={val.types} imageUrl={val.imageUrl} key={val.id}/>))
   
    //tsx
    return(
        <>
        <div className="secondPart">
            <Сategories setCategory={setCategory} category={category}/>
            <Input inputValue={inputValue} setInputValue={setInputValue}/>
            <Sort sort={sort} setSort={setSort} isVisable={isVisable} setIsvisable={setIsvisable}/>
        </div>
    <div className="thirdPart">
        {cardFilter}
       
    </div>
    
 
</>
    )
}

export default Home