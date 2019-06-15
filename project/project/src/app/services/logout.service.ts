import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor(private _http:HttpClient) { }
  logout():any{
    var s = window.localStorage.getItem("login_details");
    var obj = JSON.parse(s);
    var token = obj.token;
    return this._http.post("http://localhost:8080/logout",
                            {"token":token});
  };
};
