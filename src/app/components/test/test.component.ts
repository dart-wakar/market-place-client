import {Component,OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'test',
    templateUrl: './test.component.html'
})

export class TestComponent implements OnInit {
    componentName = 'Test'

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.getOrCreateUser('bhxbabuchaiuhui16w7gudun','Aayush','Chaudhary','aayush@gmail.com');
    }

    getOrCreateUser(fb_id:string,first_name: string,last_name: string,email: string) {
        this.userService.getOrCreateUser(fb_id,first_name,last_name,email)
            .subscribe(user => {
                console.log(user);
            },err => console.log(err));
    }
}