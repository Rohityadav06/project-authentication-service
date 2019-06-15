import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/services/logout.service';
import { Router } from '@angular/router';
import errFun from 'src/app/common/error';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  constructor(private _service:LogoutService,
             private _router:Router) { }
  ngOnInit() {
  }
  logout(){
    this._service.logout().subscribe((posRes)=>{
      if(posRes.logout == "success"){
        window.localStorage.removeItem("login_details");
        this._router.navigate(["/"]);
      }
    },errFun);
  };
};
