import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import errFun from 'src/app/common/error';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  private result:any;
  constructor(private _service:ContactService) { }
  ngOnInit() {
    this._service.contactModuleData().subscribe((posRes)=>{
      this.result = posRes;
    },errFun);
  }
}
