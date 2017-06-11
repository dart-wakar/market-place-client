import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product.service';

@Component({
    selector: 'product-create',
    templateUrl: './product-create.component.html'
})

export class ProductCreateComponent {
    
    title: string;
    description: string;
    category: string;
    amount: number;
    currency: string;

    constructor(private productService: ProductService,private router: Router) {}

    createProduct() {
        this.productService.createProductToSell(localStorage.getItem("fb_id"),this.title,this.description,this.category,this.amount,this.currency)
            .subscribe(product => {
                console.log(product);
                this.router.navigate(['/home']);
            },err => console.log(err));
    }

    cancel() {
        this.router.navigate(['/home']);
    }
}