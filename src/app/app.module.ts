import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';

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




const routes:Routes=([
  { path: '', component: CategoriesComponent},
  { path: 'properties', component: CategoriesComponent},
  { path: 'cars', component: CarsComponent},
  { path: 'electronics', component: ElectronicsComponent},
  { path: 'furniture', component: FurnitureComponent},
  { path: 'jobs', component: JobsComponent},
  { path: 'mobiles', component: MobileComponent},
  { path: 'books', component: BooksComponent},
  { path: 'bikes', component: BikesComponent},
  { path: 'fashion', component: FashionComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'pets', component: PetsComponent}

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
    JobsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }