import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare global {
  interface Window {
    visiopt_loaded?: boolean;
    visiopt_code?: any;
    visiopt_code_status?: any;
  }
}
declare var window: Window;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {}