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
  public showButton = false
  constructor(public router: Router,
    private route: ActivatedRoute) {

    this.router.events.subscribe((event) => {
      console.log(event);
    });
  }

  public showAddButton = true;
  public y;

  ngOnInit() {
    console.log(this.route);
    this.y = this.route;
    this.changeAppearence();
  }

  changeAppearence() {
    if (this.y._routerState.snapshot.url == '/submit-ad') {
      this.showAddButton = false;
    } else {
      this.showAddButton = true;
    }
  }







  submitAd() {
    if (this.y._routerState.snapshot.url == '/submit-ad') {
      this.showAddButton = false;
    } else {
      this.showAddButton = true;
    }
    this.changeAppearence();
  }
}
