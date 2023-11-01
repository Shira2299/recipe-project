import Product from "./product.model";

export class Recipe{
    constructor(
        public id?:number,
        public name?:string,
        public img?:string,
        public instructions?:string[],
        public products?: Product[],
        public during?:number,
        public level?:number,
        public create_clientID?:number
    ){}
}