import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// const environment = require('../../../environments/environment.ts');
const environment = require('../../../environments/environment.ts');
import { Color } from '../../data-model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';
import { RequestOptions } from '@angular/http';
import { of } from 'rxjs';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: { 'Content-Type': 'application/json' }
};


@Injectable()
export class ColorService {
  private apiUrl = environment.API_URL;
  selectedColorId :Subject<any> = new Subject();
  selectedMode :string = "Create";
  refreshList:Subject<any> = new Subject();

  constructor(private http:HttpClient) {
  }

  public getColors(): Observable<any> {
    return this.http.get(this.apiUrl+'/api/colors', {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
    .pipe(map(res => res));
  }

  public getColorById(color_id:number): Observable<any> {
    return this.http.get(this.apiUrl+'/api/colors/'+color_id, {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
    .pipe(map(res => res));
  }

  public searchColors(searchTerm): Observable<any> {
    return this.http.get(this.apiUrl+'/api/colors/search/'+searchTerm, {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
    .pipe(map(res => res));
  }

  public createColor(newColor:Color): Observable<any> {
    const body = JSON.stringify(newColor);

    return this.http.post(this.apiUrl+'/api/colors', body, {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
    .pipe(map(res => res));
  }

  public updateColor(editColor:Color): Observable<any> {
    const body = JSON.stringify(editColor);
    const color_id = editColor.color_id;

    return this.http.put(this.apiUrl+'/api/colors/'+color_id, body, {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
    .pipe(map(res => res));
  }

  public deleteColor(color_id:number): Observable<any> {
    return this.http.delete(this.apiUrl+'/api/colors/'+color_id, {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
    .pipe(map(res => res));
  }

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg); // log to console instead
  }
}
