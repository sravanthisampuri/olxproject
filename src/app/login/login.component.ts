import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  loginData = {
    password: '',
    name: '',
    email: ''


  };
  public udata: any;

  constructor(
    private route: Router,
    //private loginDetailsService: LoginDetailsService

  ) { }

  ngOnInit() {
  }
  loginUser() {
    // console.log(this.loginData);
    this.udata = this.loginData;
    console.log(this.udata.email);
    if (!this.udata.email) {
      alert("Please Provide Email");
    } else if (!this.udata.password) {
      alert("Please Provide Password");
    }

    else {
       if(this.udata.email == localStorage.getItem('email') && this.udata.password == localStorage.getItem('password'))
      // this.loginDetailsService.submitAdd(this.loginData)
      //   .subscribe(
      //     function (response) {
      //       console.log(response)
      //     }
      //   )

       {
         //this.route.navigate([''])
       }
    else    {
  alert("invalid credentials")
 }
  }



}
}