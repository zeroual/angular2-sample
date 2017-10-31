import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';
  hero: Hero = {
    id: 1,
    name: 'Zakaria'
  };
}


export class Hero {
  id: number;
  name: string;
}
