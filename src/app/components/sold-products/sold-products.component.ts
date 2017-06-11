import {Component,OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
    selector: 'sold-products',
    templateUrl: './sold-products.component.html'
})

export class SoldProductsComponent implements OnInit {

    products: any;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.getSoldProducts();
    }

    getSoldProducts() {
        this.productService.getProductsSoldByUser(localStorage.getItem("fb_id"))
            .subscribe(products => {
                console.log(products);
                this.products = products
            },err => console.log(err));
    }
}