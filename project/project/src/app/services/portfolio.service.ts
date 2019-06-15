import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private _http:HttpClient) { }
  portfolioModuleData():any{
    var s = window.localStorage.getItem("login_details");
    var obj = JSON.parse(s);
    var token = obj.token;
    return this._http.post("http://localhost:8080/portfolio",{'token':token});
  };
};
