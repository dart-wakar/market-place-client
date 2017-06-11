import {Component,Input} from '@angular/core';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    @Input() products:any;
}