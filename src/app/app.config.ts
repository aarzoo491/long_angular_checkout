import { ApplicationConfig } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    {
      provide: 'VISIOPT_ROUTER_HOOK',
      useFactory: (router: Router) => {
        return () => {
          router.events.subscribe(() => {
            (window as any).VisioptSPA?.run();
          });
        };
      },
      deps: [Router],
      multi: true
    }

  ]
};
