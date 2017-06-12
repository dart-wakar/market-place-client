import {Component,Input,Output,OnInit,EventEmitter} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';

@Component({
    selector: 'product-edit',
    templateUrl: './product-edit.component.html'
})

export class ProductEditComponent implements OnInit {

    @Input() product:any;

    @Output() onEditingDoneOrCancelled = new EventEmitter<any>();

    title: string;
    description: string;
    category: string;
    amount:number;
    currency: string;

    constructor(private productService: ProductService,private router: Router) {}

    ngOnInit() {
        this.initializeEditForm();
    }

    initializeEditForm() {
        this.title = this.product.title;
        this.description = this.product.description;
        this.category = this.product.category;
        this.amount = this.product.price.amount;
        this.currency = this.product.price.currency;
    }

    editProduct() {
        this.productService.editProduct(this.product._id,this.title,this.description,this.category,this.amount,this.currency)
            .subscribe(product => {
                console.log(product);
                this.onEditingDoneOrCancelled.emit(true);
                this.router.navigate(['/products',this.product._id]);
            },err => console.log(err));
    }

    cancel() {
        this.onEditingDoneOrCancelled.emit(true);
        this.router.navigate(['/products',this.product._id]);
    }
}