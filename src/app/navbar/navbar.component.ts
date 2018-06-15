import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public showButton=false
  constructor( public router: Router) { }

  ngOnInit() {
  }
  submitAd(){
 
this.router.navigate(['/submit-ad'])
  }
}
