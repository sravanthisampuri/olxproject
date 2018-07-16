import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CarsComponent } from './cars/cars.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MobileComponent } from './mobile/mobile.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { BikesComponent } from './bikes/bikes.component';
import { BooksComponent } from './books/books.component';
import { FashionComponent } from './fashion/fashion.component';
import { PetsComponent } from './pets/pets.component';
import { ServicesComponent } from './services/services.component';
import { JobsComponent } from './jobs/jobs.component';
import { PropertiesComponent } from './properties/properties.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SubmitAdComponent } from './submit-ad/submit-ad.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginService } from './app.service';
import { CarSaleComponent } from './car-sale/car-sale.component';
import { loginServices } from './login.services';
import { HttpClientModule } from '@angular/common/http';
import{ FilterPipe} from './app.filter';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { SubmitAddService } from './submitAdd.service';






const routes: Routes = ([

  { path: '', component: HomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "submit-ad", component: SubmitAdComponent },
  { path: 'carSale', component: CarSaleComponent },
  { path: 'myaccount', component: MyaccountComponent},

  {
    path: 'categories', component: CategoriesComponent,

    children: [
      { path: 'properties', component: PropertiesComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'electronics', component: ElectronicsComponent },
      { path: 'furniture', component: FurnitureComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'mobiles', component: MobileComponent },
      { path: 'books', component: BooksComponent },
      { path: 'bikes', component: BikesComponent },
      { path: 'fashion', component: FashionComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'pets', component: PetsComponent }
    ]
  }
])

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CarsComponent,
    ElectronicsComponent,
    MobileComponent,
    FurnitureComponent,
    BikesComponent,
    BooksComponent,
    FashionComponent,
    PetsComponent,
    ServicesComponent,
    JobsComponent,
    PropertiesComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    SubmitAdComponent,
    CarSaleComponent,
    FilterPipe,
    MyaccountComponent
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    TabsModule.forRoot(),
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [LoginService,loginServices,SubmitAddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
