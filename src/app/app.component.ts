import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  units = ['kg','lbs'];

  title = 'test';
  weight = 20;
  unitDefault = 'kg';

  onToggle(){

  }
}
