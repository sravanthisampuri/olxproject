import { Injectable } from "@angular/core";
import { Http} from "@angular/http";

@Injectable()
export class LoginDetails {

    constructor(
        private http : Http
    ){}

    submitDetails(addDetails){
        return this.http.post( "http://localhost:3001/v1/add/createAdd" , addDetails )
    }

}