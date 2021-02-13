import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes : string[] = ['Spiderman','Hulk','IronMan','Thor'];
  heroeBorrado : string = '';
  bandera : boolean=false;
  
  borrarHeroe(){
    console.log('borrando....')
    
    this.heroeBorrado=this.heroes.shift() || '';
    this.bandera=true;
  }
}
