import {Component,OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
    selector: 'home-products',
    templateUrl: '/home-products.component.html'
})

export class HomeProductsComponent implements OnInit {

    products:any;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.getProductsForHomePage();
    }

    getProductsForHomePage() {
        this.productService.getProductListForCurrentUser(localStorage.getItem("fb_id"))
            .subscribe(products => {
                console.log(products);
                this.products = products;
            },err => console.log(err));
    }
}