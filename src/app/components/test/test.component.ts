import {Component,OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
    selector: 'test',
    templateUrl: './test.component.html'
})

export class TestComponent implements OnInit {
    componentName = 'Test'

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.getProductListForUser('hdy71y81u9e91i0ei19ujidqi');
    }

    getProductListForUser(fb_id: string) {
        this.productService.getProductListForCurrentUser(fb_id)
            .subscribe(products => {
                console.log(products);
            },err => console.log(err));
    }
}