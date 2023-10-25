export default class Product{
    constructor(
        public product_id: number,
        public name: string,
        public count: number,
        public type: string,
        public did_buy: number//boolean 1=true  0=false
    ){}
}