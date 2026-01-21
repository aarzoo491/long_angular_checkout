import { ApplicationConfig } from '@angular/core';
import { provideRouter, Router, NavigationEnd } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    {
      provide: 'VISIOPT_ROUTER_HOOK',
      useFactory: (router: Router) => {
        return () => {

          // ---- RUN ON FIRST PAGE LOAD ----
          setTimeout(() => {
            if ((window as any).VisioptSPA) {
              console.log("SPA First Load Trigger");
              (window as any).VisioptSPA.run();
            }
          }, 300); // give global.js time to fully load

          // ---- RUN ON EVERY ROUTE CHANGE ----
          router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
              setTimeout(() => {
                console.log("SPA Route Change Trigger:", event.url);
                (window as any).VisioptSPA?.run();
              }, 50); // matches the internal Visiopt delay
            }
          });

        };
      },
      deps: [Router],
      multi: true
    }

  ]
};
