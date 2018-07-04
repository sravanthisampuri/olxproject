import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data;
  logfilter = {
    states: ''
  }
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
  public filteredData = [];
  public citylen: any;
  constructor() { }

  ngOnInit() {
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
  }
  removeSelectedCity() {
    this.textfield = "";
  }
  filtercities(search) {
    search = this.logfilter.states
    this.citylen = this.citiesdata.length;
    console.log(search, this.citiesdata)
    if (search === undefined) {
      this.filteredData = [];
    } else {
      this.filteredData = [];
      for (var i = 0; i <= this.citylen; i++) {
        for (var j = 0; j <= this.citylen; j++) {
          console.log(this.statesdata[i][j])
          if (this.statesdata[i][j].indexOf(search) >= 0) {
            this.filteredData.push(this.statesdata[i]);
          }
        }
      }
    }
    console.log(this.filteredData)
    return this.filteredData;
  }
}
