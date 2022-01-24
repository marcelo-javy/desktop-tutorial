import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
 //template: '<h1>Hola que tal mundo </h1>',
 /*styles:
 [
   
 ]
*/

})

export class AppComponent {
  title = 'my-app';
  nombreEstudiante: string = 'Marcelo Tapia';
  edadEstudiante: number = 30;

 
  horaActual: Date = new Date();
  logAcumulador: string[] = [];
  timeStamps: number[] = [];

  colors: Color[] = [
    {
      redSocial: 'Red',
      color: '#f00'
    },
    {
      redSocial: 'Green',
      color: '#0f0'
    },
    {
      redSocial: 'Blue',
      color: '#00f'
    }
  ];

  mostrarHora(event: any): void {
    this.horaActual = new Date();
    const { target } = event;
    target.innerHTML = `Cambio hora ${this.horaActual.getSeconds()}`;
  }

  insertLogAcumulador(log: string): void {
    this.logAcumulador.push(log);
  }

  addToTimeStamps($event: number) {
    this.timeStamps.push($event);
  }

  clearTimeStamps() {
    this.timeStamps = [];
  }
}

interface Color {
  redSocial: string;
  color: string;
}
