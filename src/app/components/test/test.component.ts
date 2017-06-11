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
        this.getAllUsers();
    }

    getAllUsers() {
        this.userService.getAllUsers()
            .subscribe(users => {
                console.log(users);
            },err => console.log(err));
    }
}