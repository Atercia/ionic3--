import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { Naireobj,Questionobj,Optionobj,Nairelist } from '../../provider/model/obj';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type':'application/x-www-form-urlencoded'
  /* 'Content-Type':'application/x-www-form-urlencoded';charset=utf-8  */
})

/*   headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
   */
};



@Injectable()
export class HttpserviceService {
  //TODO  mac上是80端口，windows上是8080端口 localhost:80 = > www.bmeit.cn
  testUrl = './angular-forms/httpservice/testhttp.php';
  addAnswerSheetUrl = './angular-forms/httpservice/addanswer.php';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('httpserve');
  }

//随访
//添加问卷  （实际上只需要问卷title和userid）


  addnaire(newnaire:Naireobj):Observable<any>{
    //let data = {'id':1,'userid':2,'title':'test'}
    
    //let data = {'id':newnaire.id,'userid':newnaire.userId,'title':newnaire.title}
    const data = new HttpParams()
    .set('id', String(newnaire.id))
    .set('userid', String(newnaire.userId))
    .set('title',newnaire.title);
    return this.http.post<any>(this.testUrl,data,httpOptions).pipe(
      catchError(this.handleError('addnaire : ', data)));
  }
//添加答卷
  addAnswerSheet(newnaire:Naireobj):Observable<any>{
    let arr =  newnaire.outanswer();
    //如果不到15个，则不到的部分设置为空值
    let answerarr = ['null','null','null','null','null','null','null','null','null','null','null','null','null','null','null',];
    for(let i = 0;i<arr.length;i++){
      answerarr[i] = arr[i];
    }
    const sheet = new HttpParams()
    .set('title', String(newnaire.title))
    .set('userid', String(newnaire.answerUserId))
    .set('username',String(newnaire.answerUserName))
    .set('q1',answerarr[0]).set('q2',answerarr[1]).set('q3',answerarr[2])
    .set('q4',answerarr[3]).set('q5',answerarr[4]).set('q6',answerarr[5])
    .set('q7',answerarr[6]).set('q8',answerarr[7]).set('q9',answerarr[8])
    .set('q10',answerarr[9]).set('q11',answerarr[10]).set('q12',answerarr[11])
    .set('q13',answerarr[12]).set('q14',answerarr[13]).set('q15',answerarr[14]);
    console.log(answerarr);
    return this.http.post<any>(this.addAnswerSheetUrl,sheet,httpOptions).pipe(
      catchError(this.handleError('addnaire : ', sheet)));
  }
//获取答卷  根据用户id
  PD_GetAnswerSheet(id){
  let url = './angular-forms/httpservice/PDphp.php';
  const data = new HttpParams()
  .set('userid', id)
  .set('type','getAnswerSheet');
  return this.http.post<any>(url,data,httpOptions).pipe(
    catchError(this.handleError('获取答卷: ', data)));
  }
//添加用户  pdtype  p表示用户  d表示医生
  PD_adduser(id,name,tel,sex,pw){
  let url = './angular-forms/httpservice/PDphp.php';
  const data = new HttpParams()
  .set('userid', id)
  .set('name',name)
  .set('tel', tel)
  .set('sex',sex)
  .set('pw', pw)
  .set('PDtype','p')
  .set('type','adduser');//调用php文件中的addreserve方法
  return this.http.post<any>(url,data,httpOptions).pipe(
    catchError(this.handleError('注册用户: ', data)));
  }
//添加医生
  PD_adddoctor(id,name,tel,position,pw){
  let url = './angular-forms/httpservice/PDphp.php';
  const data = new HttpParams()
  .set('userid', id)
  .set('name',name)
  .set('tel', tel)
  .set('position',position)
  .set('pw', pw)
  .set('PDtype','d')
  .set('type','adduser');//调用php文件中的addreserve方法
  return this.http.post<any>(url,data,httpOptions).pipe(
    catchError(this.handleError('注册医生: ', data)));
  }
//验证用户
  PD_checkuser(id,pw){
  let url = './angular-forms/httpservice/PDphp.php';
  const data = new HttpParams()
  .set('userid', id)
  .set('pw', pw)
  .set('type','checkuser');//调用php文件中的addreserve方法
  return this.http.post<any>(url,data,httpOptions).pipe(
    catchError(this.handleError('登陆验证: ', data)));
  }





//预定系统 添加用户   用户验证
adduser(id,name,tel,email,pw){
  let url = './angular-forms/httpservice/reserve.php';
  const data = new HttpParams()
  .set('userid', id)
  .set('name',name)
  .set('tel', tel)
  .set('email',email)
  .set('pw', pw)
  .set('type','adduser');//调用php文件中的addreserve方法
  return this.http.post<any>(url,data,httpOptions).pipe(
    catchError(this.handleError('注册用户: ', data)));
}
checkuser(id,pw){
  let url = './angular-forms/httpservice/reserve.php';
  const data = new HttpParams()
  .set('userid', id)
  .set('pw', pw)
  .set('type','checkuser');//调用php文件中的addreserve方法
  return this.http.post<any>(url,data,httpOptions).pipe(
    catchError(this.handleError('登陆验证: ', data)));
  }

//添加机器 查看机器  查看预约情况  添加预约
addmachine(roomid,machineid,type,configImg,mastername){
  let url = './angular-forms/httpservice/reserve.php';
  const data = new HttpParams()
  .set('roomid', String(roomid))
  .set('machineid',String(machineid))
  .set('type', String(type))
  .set('configImg',String(configImg))
  .set('mastername', String(mastername))
  .set('type','addmachine');//调用php文件中的addreserve方法
  return this.http.post<any>(url,data,httpOptions).pipe(
    catchError(this.handleError('新增机器: ', data)));
}
lookmachine():Observable<any>{
  let url = './angular-forms/httpservice/reserve.php';
  const data = new HttpParams()
  .set('type','lookmachine');//调用php文件中的addreserve方法
  return this.http.post<any>(url,data,httpOptions).pipe(
    catchError(this.handleError('加载机房清单: ', data)));
}
//查看预约情况
lookreserve(machineid,month,date):Observable<any>{
  let url = './angular-forms/httpservice/reserve.php';
  const data = new HttpParams()
  .set('machineid', String(machineid))
  .set('month',String(month))
  .set('date',String(date))
  .set('type','lookreserve');//调用php文件中的addreserve方法
  return this.http.post<any>(url,data,httpOptions).pipe(
    catchError(this.handleError('查看预约信息: ', data)));
}
//预定
addreserve(arr):Observable<any>{
  let url = './angular-forms/httpservice/reserve.php';
  const data = new HttpParams()
  .set('userid', arr[0])
  .set('name', arr[1])
  .set('tel',arr[2])
  .set('email', arr[3])
  .set('machineid', arr[4])
  .set('purpose',arr[5])
  .set('starttime', arr[6])
  .set('endtime',arr[7])
  .set('month',arr[8])
  .set('date',arr[9])
  .set('type','addreserve');//调用php文件中的addreserve方法
  return this.http.post<any>(url,data,httpOptions).pipe(
    catchError(this.handleError('添加了预约信息: ', data)));
}

  httpPostExample() {
    //TODO要这种格式
    let data = {'id':'0', 'userid' : '25','title':'testhttp'};
    this.http.post(this.testUrl,data,httpOptions)
        .subscribe(
            (val) => {
                console.log("POST call successful value returned in body",
                  val);
            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            });
}

}

