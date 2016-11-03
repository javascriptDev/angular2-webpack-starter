import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import { TABITEM } from './tab.interface';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class TabServices {
  private url = '/assets/data.json';

  constructor(private http: Http) {}

  getData(): Observable<TABITEM[]> {
    return this.http.get(this.url)
                    .map(this.extractData)
                    // .catch(this.handleError);
    }
  
  private extractData(res: Response) {
    return res.json() || { };
  }
  private handleError(error: any){
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }

}
