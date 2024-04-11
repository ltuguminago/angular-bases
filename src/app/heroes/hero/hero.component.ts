import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Leonardo';
  public age:  number = 41;

  //metodo
  getHeroDescription(): string {
    return `${ this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Rafael';
  }

  changeAge(): void {
    this.age = 5;
  }

  resetForm(): void {
    this.name = 'Leonardo';
    this.age = 41;
  }
  //get and set
  get capitalizeName(): string {
    return this.name.toUpperCase();
  }



}
