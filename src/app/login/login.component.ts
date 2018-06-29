import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { LoginDetails} from '../loginDetails.service';
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
    //private loginDetails: LoginDetails

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
      // this.loginDetails.submitDetails(this.loginData)
      //   .subscribe(
      //     function (response) {
      //       console.log(response)
      //     }
      //   )

        {
          this.route.navigate(['myaccount'])
        }
     else    {
   alert("invalid credentials")
  }
  }



}
}