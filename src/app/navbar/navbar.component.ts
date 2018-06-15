import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/pairwise';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(public router: Router,
    private route: ActivatedRoute) {

    /* this.router.events.subscribe((event) => {
      console.log(event);
    }); */
  }

  

  ngOnInit() {
  }

  







  
}
