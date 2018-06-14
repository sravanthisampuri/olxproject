import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm,FormControl,FormsModule} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
userdata={
  conpassword:'',
  name:'',
  email:'',
  password:''
}
public var: any;
  constructor(
    private route : Router
  ) { }

  ngOnInit() {
  }
  signUp(){
    // console.log(this.registerData)
     this.var = this.userdata;
     console.log(this.var.email)
    localStorage.setItem('email',this.var.email)
    localStorage.setItem('password',this.var.password)
    this.route.navigate(['/login']);
}
Register(form:NgForm){
  console.log(form)
}
}
