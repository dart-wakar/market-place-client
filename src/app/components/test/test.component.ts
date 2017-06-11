import {Component,OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';

@Component({
    selector: 'test',
    templateUrl: './test.component.html'
})

export class TestComponent implements OnInit {
    componentName = 'Test'

    constructor(private productService: ProductService,private router: Router) {}

    ngOnInit() {
        this.getProductListForUser('hdy71y81u9e91i0ei19ujidqi');
    }

    getProductListForUser(fb_id: string) {
        this.productService.getProductListForCurrentUser(fb_id)
            .subscribe(products => {
                console.log(products);
            },err => console.log(err));
    }

    goToLogin() {
        this.router.navigate(['/login']);
    }
}