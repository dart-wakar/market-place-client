import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {BASE_URL,API_URL} from '../Contants';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

    constructor(private http:Http) {}

    private getAllUsersUrl = API_URL+"users/";

    getAllUsers() {
        return this.http.get(this.getAllUsersUrl)
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json() || 'Server Error')
                        });
    }
}