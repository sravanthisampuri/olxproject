import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

@Injectable()

export class loginServices{

    constructor(
        private http : HttpClient
    ){}

SubmitLogin(getDetails){
       return this.http.post("http://localhost:3001/v1/create/createAdd",getDetails)    
}
getDetails(userdetails) {

    console.log(userdetails)
    return this.http.get("http://localhost:3001/v1/create/getdetail"+userdetails._id)
  }
  editDetails(userdetails) {
    return this.http.put("http://localhost:3001/v1/create/editdetail", userdetails)
  }
}