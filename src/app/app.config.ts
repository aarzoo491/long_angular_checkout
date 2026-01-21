import { ApplicationConfig, ApplicationRef } from '@angular/core';
import { provideRouter, Router, NavigationEnd } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    {
      provide: 'VISIOPT_ROUTER_HOOK',
      useFactory: (router: Router, appRef: ApplicationRef) => {
        return () => {

          // Run on first load
          appRef.isStable.subscribe(stable => {
            if (stable) {
              setTimeout(() => {
                console.log("SPA First Load - DOM Ready");
                (window as any).VisioptSPA?.run();
              }, 100);
            }
          });

          // Run on route changes AFTER Angular finishes rendering
          router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
              appRef.isStable.subscribe(stable => {
                if (stable) {
                  setTimeout(() => {
                    console.log("SPA Route Change - DOM Ready:", event.url);
                    (window as any).VisioptSPA?.run();
                  }, 100);
                }
              });
            }
          });

        };
      },
      deps: [Router, ApplicationRef],
      multi: true
    }
  ]
};
