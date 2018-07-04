import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginServices } from '../login.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
loginData={
  password:'',
  name:'',
  email:''
  

};
public udata : any;
public profile:any;

  constructor(
    private route : Router,
    private  LoginServices : loginServices
  ) { }

  ngOnInit() {
  }
loginUser(){
 // console.log(this.loginData);
   this.udata = this.loginData;
   console.log(this.udata.email);
   if(!this.udata.email){
    alert("Please Provide Email");
  }else if(!this.udata.password){
    alert("Please Provide Password");
  }

   else{
    this.LoginServices.SubmitLogin(this.udata)

    .subscribe(
          function(response){
            console.log(response)
          }
        )
     
    this.route.navigate(['']);
   }
   
  }

  // onSignIn(googleUser){
  //     console.log(googleUser);
  //     this.profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + this.profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + this.profile.getName());
  //   console.log('Image URL: ' + this.profile.getImageUrl());
  //   console.log('Email: ' + this.profile.getEmail()); // This is null if the 'email' scope is not present.
  // }
// 



  }



