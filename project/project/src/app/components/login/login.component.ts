import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from "@angular/router";
import errFun from 'src/app/common/error';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  private login:string;
  obj={
    "uname":'',upwd:''
  }
  constructor(private _service:LoginService,
              private _router:Router) { 
                
              } 
  ngOnInit() {
    this.obj={ "uname":'',"upwd":''}
  }
  loginFn(obj):any{
    
    debugger;
   this._service.authenticate(obj).subscribe((res)=>{
     debugger;
    console.log(res);
    if(res.login == "success"){
      window.localStorage.setItem("login_details",JSON.stringify(res));
      this._router.navigate(["/dashboard"]);
    }else{
      alert("Invalid Details !!!")
    };
   },errFun);
  };
};
