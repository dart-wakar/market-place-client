import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {BASE_URL,API_URL} from '../Contants';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

    constructor(private http: Http) {}

    private ProductsUrl = API_URL+"products/";

    getAllProducts() {
        return this.http.get(this.ProductsUrl)
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json() || 'Server Error')
                        });
    }

    createProductToSell(fb_id: string,title: string,description: string,category: string,amount: number,currency:string) {
        let header = new Headers();
        header.append("Content-Type","application/json");
        return this.http.post(this.ProductsUrl,JSON.stringify({fb_id: fb_id,title: title,description: description,category: category,amount: amount,currency: currency}),{headers: header})
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json() || 'Server Error')
                        });
    }

    getProductDetails(product_id: string) {
        return this.http.get(this.ProductsUrl+product_id)
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json() || 'Server Error')
                        });
    }

    editProduct(product_id: string,title: string,description: string,category: string,amount: number,currency: string) {
        let header = new Headers();
        header.append("Content-Type","application/json");
        return this.http.post(this.ProductsUrl+product_id+"/edit",JSON.stringify({title: title,description: description,category: category,amount: amount,currency: currency}),{headers: header})
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json() || 'Server Error')
                        });
    }

    deleteProduct(product_id: string) {
        let header = new Headers();
        header.append("Content-Type","application/json");
        return this.http.post(this.ProductsUrl+product_id+"/delete",JSON.stringify({product_id: product_id}),{headers: header})
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json() || 'Server Error')
                        });
    }

    buyProduct(fb_id: string,product_id: string) {
        let header = new Headers();
        header.append("Content-Type","application/json");
        return this.http.post(this.ProductsUrl+"buy",JSON.stringify({fb_id: fb_id,product_id: product_id}),{headers: header})
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json() || 'Server Error')
                        });
    }

    getProductListForCurrentUser(fb_id: string) {
        let header = new Headers();
        header.append("Content-Type","application/json");
        return this.http.post(this.ProductsUrl+"getproductlistforuser",JSON.stringify({fb_id: fb_id}),{headers: header})
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json() || 'Server Error')
                        });
    }

    getProductsSoldByUser(fb_id: string) {
        let header = new Headers();
        header.append("Content-Type","application/json");
        return this.http.post(this.ProductsUrl+"sold",JSON.stringify({fb_id: fb_id}),{headers: header})
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json() || 'Server Error')
                        });
    }
}