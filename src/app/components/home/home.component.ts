import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FacebookService,LoginResponse,LoginOptions} from 'ngx-facebook';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    componentName = 'Home'

    constructor(private router: Router,private fb: FacebookService) {
        console.log('Initializing Facebook');

        fb.init({
            appId: '300039560455517',
            xfbml: true,
            version: 'v2.9'
        });
    }

    addNewProduct(){
        this.router.navigate(['/products/add']);
    }

    logout() {
        this.fb.logout().then((res:any) => {
            console.log(res);
            localStorage.clear();
            this.router.navigate(['/test']);
        })
        .catch(this.handleError);
    }

    private handleError(error) {
        console.error('Error processing action',error);
    }
}