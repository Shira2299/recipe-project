import { Injectable } from '@angular/core';
import Product from './models/product.model';
import { Recipe } from './models/recipe.model';
import { Customer } from './models/customer.model';

@Injectable({
    providedIn: 'root'
})

export class BookService{
    public products: Product[] = [
        new Product(1,"סוכר",5,"כפיות",1),
        new Product(2,"מים",1/2,"כוס",1),
        new Product(3,"שמן",1,"כוס",1)
    ]

    public instractions:string[] = [
        "לערבב",
        "טפיחה",
        "לאפות"
    ]

    customers: Customer[] = [
        new Customer(1,"bla","035700379","shira@gmail.com","12345",[1,2],[])
    ];

    recipes:Recipe[] = [
        new Recipe(1,"אלפחורס","assets/img/אלפחורס 1.png",this.instractions,[new Product(1,"סוכר",5,"כפיות",1)],10,2,15),
        new Recipe(2,"וופל בלגי","assets/img/וופל בלגי.png",this.instractions,this.products,10,3,1),
        new Recipe(3,"פוררו רושה","assets/img/פוררו-רושה.png",this.instractions,this.products,10,2,31)
    ]
}