import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public url: any=["assets/images/olx.gif","assets/images/olx1.gif","assets/images/olx3.gif",
  "assets/images/olx4.gif","assets/images/olx5.gif","assets/images/olx6.gif"];
  public display:any=["assets/images/olx.gif"];
  public i:any=1;
  constructor() { }
 
  ngOnInit() {
  }
  myclick(){
    this.i<this.url.length ? this.display=this.url[this.i] :  this.url[this.i=0];
   this.i++;
  }
 }
