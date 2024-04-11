/*
para crear con asistente seria
-a-c y a continuacion tab
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  //maximo 4 lineas de codigo<s
  template: `
    <h3>
  Counter: {{ counter }}
  </h3>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Resert</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  //metodos
  increaseBy( value: number ):void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

}
