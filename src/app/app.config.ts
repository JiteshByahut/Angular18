import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { loggingInterceptor } from './logging.interceptor';
import { Logging2Interceptor } from './logging2.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideClientHydration(withEventReplay()),
  provideHttpClient(withInterceptors([loggingInterceptor, Logging2Interceptor]),
                    withInterceptorsFromDi())
  ]
};
