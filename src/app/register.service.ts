import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable()
export class RegisterService {

  constructor(  private http : HttpClient ) 
  { }

  submitdetails(userdetails){
    return this.http.post( "http://localhost:3500/v1/udetails/userinfo" , userdetails )
  }
}
