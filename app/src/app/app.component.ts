import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name:string="";
  number:number=0;
  CurrentDate:number;

  date(): void {
    this.CurrentDate = Date.now();
  }

  pipes(name: string): void {
    this.name = name;
  }

  numbers(currency: number): void {
    this.number = currency;
  }
}
