import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../http/http-error-handler.service';
import { of } from 'rxjs/observable/of';
/*
  Generated class for the ServiceTestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type':'application/x-www-form-urlencoded'
})
};

@Injectable()
export class ServiceTestProvider {
  buildUrl = './xjh/httpservice/xjh.php';
  windowsLocalHostUrl = 'http://localhost:8080/httpservice/xjh.php';
  url = this.windowsLocalHostUrl;
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('httpserve');
  }
  testHttp(){console.log('http_____ok');}

  addData(){
    const data = new HttpParams()
    .set('userid', 'xjh1')
    .set('name','xjh1')
    .set('tel', 'xjh1')
    .set('sex','xjh1')
    .set('pw', 'xjh1')
    .set('PDtype','p')
    .set('type','adduser');//调用php文件中的addreserve方法
    return this.http.post<any>(this.url,data,httpOptions).pipe(
    catchError(this.handleError('test',data)));
  }

  getData(){
      const data = new HttpParams()
      .set('userid', 'xjh1')
      .set('pw','xjh1')
      .set('type','checkuser');//调用php文件中的addreserve方法
      return this.http.post<any>(this.url,data,httpOptions).pipe(
        catchError(this.handleError('登陆验证: ', data)));
  }
}
