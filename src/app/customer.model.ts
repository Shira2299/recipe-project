export class Customer{
    constructor(
        public id?: number,
        public name?: string,
        public phone?: string,
        public contactMethod?: string,//דרך ליצירת קשר
        public password?: string,
        public recipeIds?: number[], // מערך של מזהה מתכונים
        public shoppingList?: any[], // מערך של רשימת קניות
    ) {}
}
