import { Component, OnInit } from '@angular/core';
import { Veterinaria } from '../share/model/veterinaria';
import { VeterianariaService } from '../share/veterianaria.service';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-veterianaria',
  templateUrl: './veterianaria.component.html',
  styleUrls: ['./veterianaria.component.css']
})
export class VeterianariaComponent implements OnInit {

  veterinaria : Array<Veterinaria>;
  animalSeleccionado : Veterinaria;


  constructor(private veterinariaService : VeterianariaService) {
    this.veterinariaService = veterinariaService;

   }

  ngOnInit() {

    this.veterinariaService.getAnimales()
    .subscribe((data : Array<Veterinaria>)=>{
      
      this.veterinaria = data;
    }, error =>{
      console.log("Error" + error)
    }
    )


  }

}
