import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

@Injectable()

export class loginServices{

    constructor(
        private http : HttpClient
    ){}

SubmitLogin(getDetails){
       return this.http.post("http://localhost:3001/v1/add/createAdd",getDetails)    
}

}