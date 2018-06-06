import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { PreFooterComponent } from './pre-footer/pre-footer.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { SubPageComponent } from './sub-page/sub-page.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfigService } from './config.service';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { OrderModule } from 'ngx-order-pipe';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { MenuManagerComponent } from './dashboard/menu-manager/menu-manager.component';
import { ProductManagerComponent } from './dashboard/product-manager/product-manager.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { AddproductComponent } from './dashboard/addproduct/addproduct.component';
import { EditproductComponent } from './dashboard/editproduct/editproduct.component';
import { ChangepassComponent } from './dashboard/changepass/changepass.component';
import { ConfigManagerComponent } from './dashboard/config-manager/config-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopHeaderComponent,
    HeaderComponent,
    MenuComponent,
    SliderComponent,
    PreFooterComponent,
    FooterComponent,
    MainComponent,
    SubPageComponent,
    PageDetailComponent,
    PageNotFoundComponent,
    LeftMenuComponent,
    LoginComponent,
    DashboardComponent,
    MenuManagerComponent,
    ProductManagerComponent,
    AddproductComponent,
    EditproductComponent,
    ChangepassComponent,
    ConfigManagerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    OrderModule,
    HttpClientModule
  ],
  providers: [ConfigService, AuthService, AuthGuardService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
