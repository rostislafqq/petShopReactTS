import React from "react";

interface СategoriesProps{
    setCategory:React.Dispatch<React.SetStateAction<number>>;
    category : number
}

const Сategories:React.FC<СategoriesProps> =({setCategory,category}) =>{
    const categories=['Все',' Аксессуары для кошек',' Аксессуары для собак']
    return(
        <ul className="secondPart__categoriesUl">
            {categories.map((val,index) =>(
                <li key={index} className={category === index ? 'secondPart__categoriesli secondPart__categoriesActiveli' : 'secondPart__categoriesli'} onClick={()=>{
                    setCategory(index)
                }}>{val}</li>
            ))}
        </ul>
    )
}

export default Сategories;