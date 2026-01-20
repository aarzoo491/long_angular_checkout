import { Component } from '@angular/core';

declare global {
  interface Window {
    visiopt_loaded?: boolean;
    visiopt_code?: any;
    visiopt_code_status?: any;
  }
}
declare var window: Window;

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {}