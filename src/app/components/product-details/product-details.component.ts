import {Component,OnInit,OnChanges} from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {Location} from '@angular/common';
import {ProductService} from '../../services/product.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'product-details',
    templateUrl: './product-details.component.html'
})

export class ProductDetailsComponent implements OnInit,OnChanges {

    ifCreatedBy: boolean;
    ifCreatedByResolved: boolean;
    product:any;
    viewMode: boolean;

    constructor(
        private productService: ProductService,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private router: Router
    ) {}

    ngOnInit() {
        this.viewMode = true;
        this.getProductDetailsFromRoute();
    }

    ngOnChanges() {
        this.viewMode = true;
        this.getProductDetailsFromRoute();
    }

    getProductDetailsFromRoute() {
        this.activatedRoute.params.switchMap((params: Params) => this.productService.getProductDetails(params['product_id']))
            .subscribe(product => {
                console.log(product);
                this.product = product;
                this.resolveIfSeller(product);
            },err => console.log(err));
    }

    resolveIfSeller(product:any) {
        let current_user_id = localStorage.getItem('current_user_id');
        if(product.seller._id == current_user_id) {
            this.ifCreatedBy = true;
        } else {
            this.ifCreatedBy = false;
        }
        this.ifCreatedByResolved = true;
        console.log(this.ifCreatedBy);
    }

    goBack() {
        this.location.back();
    }

    editProduct() {
        this.viewMode = false;
    }

    onEditToView(flag:boolean) {
        this.viewMode = flag;
        this.getProductDetailsFromRoute();
    }
}