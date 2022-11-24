import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grocery';
  status: boolean = false;

  toggleMenu(){
    this.status = !this.status; 
  }
}
