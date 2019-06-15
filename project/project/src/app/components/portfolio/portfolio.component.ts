import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import errFun from 'src/app/common/error';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent implements OnInit {
  private result:any;
  constructor(private _service:PortfolioService) { }
  ngOnInit() {
    this._service.portfolioModuleData().subscribe((posRes)=>{
      this.result = posRes;
    },errFun);
  }
}
