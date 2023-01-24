import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title: string = 'bases';
  numero: number = 0;

  base: number = 5;

  acumular( valor: number ){
    this.numero += valor;
  }
  

}

