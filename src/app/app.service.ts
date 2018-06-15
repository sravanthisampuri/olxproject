import { Injectable } from "@angular/core";
import { Http, Headers} from "@angular/http";

@Injectable()
export class LoginService{
    constructor(
        private http : Http
    ){ }
    
    login(userdata){
        console.log(userdata);
        return ;
    }
    getData(userID){
        let headers= new Headers();
        headers.append('token',localStorage.getItem('token'));

    }

}