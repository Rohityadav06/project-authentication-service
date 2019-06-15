import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private _http:HttpClient) { }
  
  contactModuleData():any{
    var s= window.localStorage.getItem("login_details");
    var obj = JSON.parse(s);
    var token = obj.token;
    return this._http.post("http://localhost:8080/contact",
                          {'token':token});
  };

};
