import React from "react";

interface SortProps {
    setSort:React.Dispatch<React.SetStateAction<number>> ;
    sort:number ;
    isVisable:boolean;
    setIsvisable:React.Dispatch<React.SetStateAction<boolean>>
}
 
const Sort:React.FC<SortProps> =({setSort , sort ,isVisable ,setIsvisable}) =>{

    const sortType = ['Цене ↑' , 'Цене ↓']
     
    return(
        <div className="secondPart__sort">
            
            <div className="secondPart__sortLabel">
                <svg className="secondPart__svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
 viewBox="0 0 330 330" >
<path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
C255,161.018,253.42,157.202,250.606,154.389z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
                <b>Сортировать по </b>
                <i onClick={()=>{
                    setIsvisable(!isVisable)
                }} className="secondPart__sortI">{sort === 0 ? 'Цене ↑' : 'Цене ↓'}</i>
    
            </div>
            <div className="secondPart__popUp">
                <ul className={!isVisable ? 'secondPart__popUpUl ' : ' secondPart__popUpUlA'} >
                    {sortType.map((val,i) =>(
                        <li key={i} onClick={()=>{
                            setSort(i)
                            setIsvisable(!isVisable)
                        }}>{val}</li>
                    ))}
                </ul>
            </div>
        </div>

   
    )
}

export default Sort;