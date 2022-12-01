import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Full Stack';

  titleOptions: Record<string, string> = {
    opcion1: 'TAB 1',
    opcion2: 'TAB 2',
    opcion3: 'TAB 3',
  };

  cerrado = '';

  counterAppear: number = 0;

  opciones = {
    opcion1: 1,
    opcion2: 2,
    opcion3: 3,
    nopcion: 1,
    inicial: 1,
  };

  show = this.opciones.inicial;

  change(e: number) {
    this.show = e;
  }

  cerrar(_: string) {
    this.cerrado = `Se cerro la pestana ${
      this.titleOptions['opcion' + this.show]
    }`;
    this.show = this.opciones.inicial;
  }

  tableDestroy() {
    if (this.counterAppear < 2) {
      this.counterAppear++;
    }
  }
}
