import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
  .catch((err) => console.error(err));
