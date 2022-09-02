import { Component } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string ='';
  hayError: boolean = false;
  paises: RESTCountriesResponse[] = [];
  constructor( private paisService: PaisService) { }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe((resp) =>{
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
