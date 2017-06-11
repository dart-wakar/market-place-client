import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FacebookService,LoginResponse,LoginOptions} from 'ngx-facebook';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    componentName = 'Login'

    fb_id: any;
    accessToken: any;
    fb_user: any;
    myuser: any;

    constructor(private fb: FacebookService,private router: Router,private userService: UserService) {
        console.log('Initializing Facebook');

        fb.init({
            appId: '300039560455517',
            xfbml: true,
            version: 'v2.9'
        });
    }

    login() {
        this.fb.login().then((res: LoginResponse) => {
            console.log("Logged in ",res);
            this.fb_id = res.authResponse.userID;
            this.accessToken = res.authResponse.accessToken;
            console.log('User ID',this.fb_id);
            this.getProfile();
        })
        .catch(this.handleError);
    }

    private handleError(error) {
        console.error('Error processing action',error);
    }

    getProfile() {
        this.fb.api('/me?fields=id,name,first_name,last_name,gender,link,birthday,email')
                .then((res:any) => {
                    console.log('Got user profile',res);
                    this.fb_user = res;
                    console.log(this.fb_user.gender);
                    localStorage.clear();
                    localStorage.setItem("fb_id",this.fb_user.id)
                    localStorage.setItem("first_name",this.fb_user.first_name)
                    localStorage.setItem("last_name",this.fb_user.last_name)
                    localStorage.setItem("gender",this.fb_user.gender)
                    this.userService.getOrCreateUser(this.fb_user.id,this.fb_user.first_name,this.fb_user.last_name,this.fb_user.email)
                        .subscribe(user => {
                            console.log(user);
                            this.myuser = user;
                            this.router.navigate(['/home']);
                        },err => console.log(err));
                })
                .catch(this.handleError)
    }
}