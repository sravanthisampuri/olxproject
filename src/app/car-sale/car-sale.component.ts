import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';




@Component({
  selector: 'app-car-sale',
  templateUrl: './car-sale.component.html',
  styleUrls: ['./car-sale.component.css']
})
export class CarSaleComponent implements OnInit {
  public carsinfo : any  = [];
  public currency;
  constructor() { }

  ngOnInit() {

    this.carsinfo = [
      {
        images :'./assets/images/image1.webp',
      title:'Hyundai Elite I20 Sportz 1.4 (o), 2014, Diesel',
      price:'150000',
      address:'Hyderabad',
      model:'swift dezire',
      verified:true
    },
    {
      images :'./assets/images/image2.webp',
    title:'Nissan Micra XL BS IV 2015 Model for Sale',
    price:'10000',
    address:'Hyderabad',
    model:'swift',
    verified:true
  },
  {
    images :'./assets/images/image5.webp',
  title:'Automatic Diesel Verna SX',
  price:'150000',
  address:'Hyderabad',
  model:'swift dezire',
  verified:true
},{
  images :'./assets/images/image4.webp',
title:'2000 Maruti Suzuki Alto 800 petrol 60000 Kms',
price:'100000',
address:'Hyderabad',
model:'swift dezire',
verified:true
}
  ]
  }
  
}
