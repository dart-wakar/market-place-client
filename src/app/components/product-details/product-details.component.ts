import {Component,OnInit,OnChanges} from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {Location} from '@angular/common';
import {ProductService} from '../../services/product.service';
import 'rxjs/add/operator/switchMap';
import * as _ from 'lodash';

@Component({
    selector: 'product-details',
    templateUrl: './product-details.component.html'
})

export class ProductDetailsComponent implements OnInit,OnChanges {

    ifCreatedBy: boolean;
    ifAlreadyBought: boolean;
    ifCreatedByResolved: boolean;
    ifAlreadyBoughtResolved: boolean;
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
                this.resolveIfAlreadyBought(product);
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

    resolveIfAlreadyBought(product:any) {
        let current_user_id = localStorage.getItem('current_user_id');
        var x = this;
        this.ifAlreadyBought = false;
        _.forEach(product.buyers,function(buyer) {
            console.log(buyer);
            if(current_user_id == buyer) {
                x.ifAlreadyBought = true;
            }
        });
        this.ifAlreadyBoughtResolved = true;
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

    buyProduct() {
        this.productService.buyProduct(localStorage.getItem('fb_id'),this.product._id)
            .subscribe(product => {
                console.log(product);
                this.getProductDetailsFromRoute();
            },err => console.log(err));
    }

    deleteProduct() {
        this.productService.deleteProduct(this.product._id)
            .subscribe(res => {
                console.log(res);
                this.router.navigate(['/home']);
            },err => console.log(err));
    }
}