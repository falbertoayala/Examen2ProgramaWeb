import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeterianariaService {

  constructor(private http : HttpClient ) {
     
    this.http = http;

   }

   getAnimales(){
     return this.http.get("http://localhost:8080/api/pets");
   }
   getDetalle(id){
     return this.http.get("http://localhost:8080/api/pets" +id)
   }
  
}
