import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Product } from '../Model/product.model';

@Injectable()
export class ProductService{
	private url = 'http://localhost:3001/app';

	constructor(private http: Http){}

	getProduct(): Promise<Product[]>{
		return 	this.http.get(this.url)
					.toPromise()
					.then(response => response.json().data as Product[])
					.catch(this.handleError);
	}


	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
  	}
}