import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    componentName = 'Home'

    constructor(private router: Router) {}

    addNewProduct(){
        this.router.navigate(['/products/add']);
    }
}