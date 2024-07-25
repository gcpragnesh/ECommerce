import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { ProductpgComponent } from './product/productpg/productpg.component';
import { CategorypgComponent } from './category/categorypg/categorypg.component';
import { ListproductpgComponent } from './product/listproductpg/listproductpg.component';
import { DashboardpgComponent } from './dashboard/dashboardpg/dashboardpg.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registertration/register.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { ListcustomeritemsComponent } from './customer/listcustomeritems/listcustomeritems.component';
import { HomeheaderComponent } from './homeheaderpg/homeheader/homeheader.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    CustomerhomeComponent,
    ProductpgComponent,
    CategorypgComponent,
    ListproductpgComponent,
    DashboardpgComponent,
    AdminheaderComponent,
    ListcustomeritemsComponent,
    HomeheaderComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatTooltipModule,
    MatMenuModule,
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: 'admin', component: AdminloginComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'home', component: CustomerhomeComponent },
      { path: 'dashboard', component: DashboardpgComponent },
      { path: 'product', component: ProductpgComponent },
      { path: 'category', component: CategorypgComponent },
      { path: 'reg', component: RegisterComponent},
      { path: 'login' , component:LoginComponent}


      
    ])
  ],
  providers: [
    provideAnimationsAsync(),
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, 
    NO_ERRORS_SCHEMA 
  ],
})
export class AppModule { }
