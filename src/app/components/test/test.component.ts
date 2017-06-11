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
        this.getUserDetails('593c8a67b91c280b4461884e');
    }

    getUserDetails(user_id:string) {
        this.userService.getUserDetails(user_id)
            .subscribe(user => {
                console.log(user);
            },err => console.log(err));
    }
}