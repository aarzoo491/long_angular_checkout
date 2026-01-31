import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

declare global {
  interface Window {
    visiopt_code?: any;
    visiopt_code_status?: any;
    VisiPageMatcher?: any;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<router-outlet></router-outlet>',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent{}
