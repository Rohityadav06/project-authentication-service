import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routings/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
