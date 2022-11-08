import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_vacaciones';

  titleOptions: Record<string, string> = {
    opcion1: 'Declarativo',
    opcion2: 'Basado en componentes',
    opcion3: 'Aprende una vez',
    opcion4: 'Miembros'
  }

  cerrado = '';

  counterAppear:number = 0;

  opciones = {
    opcion1: 1,
    opcion2: 2,
    opcion3: 3,
    opcion4: 4,
    nopcion: 0,
    inicial: 0
  }

  show = this.opciones.inicial;

  change(e:number) {
    this.show = e;
  }

  cerrar(_: string){
    this.cerrado = `Se cerro la pestana ${this.titleOptions["opcion"+this.show]}`;
    this.show = this.opciones.inicial;
  }

  tableDestroy(){
    if(this.counterAppear < 2){
      this.counterAppear++;
    }
  }

}
