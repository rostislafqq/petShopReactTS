``
export interface ICards {
    id?:number,
    imageUrl:string,
    price:number,
    title:string,
    category?:number[],
    types?:number[],
}

export interface IDeliteItemCart {
    price : number ;
    imageUrl:string
}
 