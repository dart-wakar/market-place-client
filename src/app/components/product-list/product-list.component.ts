import {Component,Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {

    @Input() products:any;

    constructor(private router: Router) {}

    goToDetails(product_id:string) {
        this.router.navigate(['/products',product_id]);
    }
}