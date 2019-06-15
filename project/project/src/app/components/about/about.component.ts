import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import errFun from 'src/app/common/error';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  private result:any;
  constructor(private _service:AboutService) { }
  ngOnInit() {
    this._service.aboutModuleData().subscribe((posRes)=>{
      this.result = posRes;
    },errFun);
  }
}
