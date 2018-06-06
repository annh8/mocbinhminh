import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubPageComponent } from './sub-page/sub-page.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { MenuManagerComponent } from './dashboard/menu-manager/menu-manager.component';
import { ProductManagerComponent } from './dashboard/product-manager/product-manager.component';
import { AddproductComponent } from './dashboard/addproduct/addproduct.component';
import { EditproductComponent } from './dashboard/editproduct/editproduct.component';
import { ChangepassComponent } from './dashboard/changepass/changepass.component';
import { ConfigManagerComponent } from './dashboard/config-manager/config-manager.component';

const routes: Routes = [
  { path: '', component: MainComponent , pathMatch: 'full' },
  { path: 'subpage/:id',  component: SubPageComponent },
  { path: 'page-detail/:id', component: PageDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService], children: [
      {path: 'config', component: ConfigManagerComponent},
      {path: 'menus', component: MenuManagerComponent},
      {path: 'products', component: ProductManagerComponent},
      {path: 'add', component: AddproductComponent},
      {path: 'edit/:id', component: EditproductComponent},
      {path: 'changepass', component: ChangepassComponent},
  ] },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


