import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn:"root"
})

export class UserService{

  constructor(private httpClient:HttpClient){

  }
  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:3000/users?id=");
  }
  getById(id:number){
    return this.httpClient.get<User[]>("http://localhost:3000/users?id="+id);
  }

}
