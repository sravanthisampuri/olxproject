import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm,FormControl,FormsModule} from '@angular/forms';
import { RegisterService } from '../register.service';
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
    private route : Router,
    private registerservice:RegisterService 
  ) { }

  ngOnInit() {
  }
  signUp(){
    // console.log(this.registerData)
     this.var = this.userdata;
     console.log(this.var.email)
    // localStorage.setItem('email',this.var.email)
    // localStorage.setItem('password',this.var.password)
    if(!this.var.name){
      alert("please provide name");
    }
    else if(!this.var.email){
      alert("please provide email");
    }
    else if(!this.var.password){
      alert("please provide password");
    }
    else if(!this.var.conpassword){
      alert("please provide confirm password");
    }
    else{
      this.registerservice.submitdetails(this.var)
      .subscribe(
        function(response){
          console.log(response)
        }
      )
      this.route.navigate(['/login']);
    }


    
}
Register(form:NgForm){
  console.log(form)
}
}