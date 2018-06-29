import { Injectable } from "@angular/core";
import { Http} from "@angular/http";

@Injectable()
export class LoginService{
    constructor(
        private http : Http
    ){ }
    
public ApiUrl:any;

    login(user){
        console.log(user);
        return this.http.post(this.ApiUrl+"v1/user/login",user);
    }


  
    }
