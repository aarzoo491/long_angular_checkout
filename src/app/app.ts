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
// export class AppComponent implements OnInit {

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     this.router.events
//       .pipe(filter(event => event instanceof NavigationEnd))
//       .subscribe(() => {
//         this.triggerVisioptOnRoute();
//       });
//   }

//   triggerVisioptOnRoute(): void {

//     // Wait for URL to update
//     setTimeout(() => {

//       // STEP 1 — First load override pack()
//       if (window.visiopt_code && !window.visiopt_code._spaPatchApplied) {

//         console.log("[Visiopt] Applying SPA patch");

//         // Save original pack if needed
//         window.visiopt_code._original_pack = window.visiopt_code.pack;

//         // Override pack() so that vt.js DOES NOT reload
//         window.visiopt_code.pack = function(url: string) {
//           console.log("[Visiopt] pack() blocked for SPA:", url);
//           // Do nothing – prevent reload vt.js
//         };

//         window.visiopt_code._spaPatchApplied = true;
//       }

//       // STEP 2 — Now safely re-trigger init
//       if (window.visiopt_code?.init) {
//         console.log('[Visiopt] Re-initializing for:', window.location.href);
//         window.visiopt_code.init();
//       }

//     }, 50);
//   }

// }
export class AppComponent{}