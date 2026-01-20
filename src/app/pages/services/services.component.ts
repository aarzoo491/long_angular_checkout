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
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {}