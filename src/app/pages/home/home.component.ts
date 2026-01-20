import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';

declare global {
  interface Window {
    visiopt_loaded?: boolean;
    visiopt_code?: any;
    visiopt_code_status?: any;
    VisioptSPA?: any;
  }
}
declare var window: Window;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}