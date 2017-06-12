import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {BASE_URL,API_URL} from '../Contants';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

    constructor(private http:Http) {}

    private UsersUrl = API_URL+"users/";

    getAllUsers() {
        return this.http.get(this.UsersUrl)
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json() || 'Server Error')
                        });
    }

    getOrCreateUser(fb_id:string,first_name: string,last_name: string,email: string) {
        let header = new Headers();
        header.append("Content-Type","application/json");
        return this.http.post(this.UsersUrl,JSON.stringify({fb_id: fb_id,first_name: first_name,last_name: last_name,email: email}),{headers: header})
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json() || 'Server Error')
                        });
    }
}