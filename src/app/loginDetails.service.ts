import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoginDetailsService {

    constructor(
        private http : HttpClient
    ){}

    submitAdd(addDetails){
        return this.http.post( "http://localhost:3001/v1/add/createAdd" , addDetails )
    }

}