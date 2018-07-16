import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data;
  public country: any=[];
  // public filtering : boolean=false;
  
  public citiesdata: any = ["Ahmedabad", "Bengaluru", "Chandigarh", "Chennai", "Coimbatore", "Delhi",
    "Gurgaon", "Hyderabad", "Jaipur", "Kochi", "Kolkata", "Lucknow", "Ludhiana", "Mumbai", "Nagpur", "Pune", "Surat",
    "Thiruvananthapuram"];

  public statesdata: any = ["All India", "Andaman &amp; Nicobar Islands", "Andhra Pradesh",
    "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra &amp; Nagar Haveli",
    "Daman &amp; Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu &amp; Kashmir",
    "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal"];

  public textfield: any;
  public locationSearch: boolean = false;
  public url: any = ["assets/images/olx.gif", "assets/images/olx1.gif", "assets/images/olx3.gif",
    "assets/images/olx4.gif", "assets/images/olx5.gif", "assets/images/olx6.gif"];
  public display: any = ["assets/images/olx.gif"];
  public i: any = 1;
  public search: any;
  constructor() { }

  ngOnInit() {
    this.country = this.citiesdata.concat(this.statesdata);
  }
  myclick() {
    this.i < this.url.length ? this.display = this.url[this.i] : this.url[this.i = 0];
    this.i++;
  }

  displayCities() {
    this.locationSearch = true;

  }
  deleteSelectedcities() {
    this.locationSearch = false;

  }

  cities(select) {
    console.log(select);
    this.data = select.path[0].childNodes[0].data;
    console.log(this.data);
    this.textfield = this.data;
    this.locationSearch = false;
    this.search = '';
  }
  removeSelectedCity() {
    this.textfield = "";
  }
}
