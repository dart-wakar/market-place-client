import { Component } from '@angular/core';
import { FacebookService,LoginResponse,LoginOptions } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  fbId:any;
  accessToken:any;
  user:any;

  constructor(private fb: FacebookService) {
    console.log("Initializing Facebook");

    fb.init({
      appId: '300039560455517',
      xfbml: true,
      version: 'v2.9'
    });
  }

  login() {
    this.fb.login().then((res:LoginResponse) => {
      console.log('Logged in ',res);
      this.fbId = res.authResponse.userID;
      this.accessToken = res.authResponse.accessToken;
      console.log('User id',this.fbId);
      this.getProfile()
    })
    .catch(this.handleError);
  }

  private handleError(error) {
    console.error('Error processing action',error);
  }

  getProfile() {
    this.fb.api('/me?fields=id,name,first_name,last_name,gender,link,birthday,email')
      .then((res:any) => {
        console.log('Got the users profile',res);
        this.user = res;
        console.log(this.user.gender);
        localStorage.clear()
        localStorage.setItem("fbId",this.user.id)
        localStorage.setItem("name",this.user.name)
        localStorage.setItem("gender",this.user.gender)
      })
      .catch(this.handleError);
  }

  logout() {
    this.fb.logout().then((res:any) => {
      console.log(res);
    })
    .catch(this.handleError);
  }

}
