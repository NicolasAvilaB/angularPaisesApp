import { Component } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string ='';
  hayError: boolean = false;
  paises: RESTCountriesResponse[] = [];

  constructor( private paisService: PaisService) { }
  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarpais(this.termino).subscribe((resp) =>{
        console.log(resp);
        this.paises = resp;
    },(err) => {
      this.hayError = true;
      this.paises = [];
    });
  }
  sugerencias(termino:string){
    this.hayError = false;
  }
}
