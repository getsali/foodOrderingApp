import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foodFeist';
  constructor(private router: Router) { }
  gotoHomePage() {
    this.router.navigate(['']);
  }
} 
