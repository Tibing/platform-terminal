import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformBlessedDynamic } from './app/blessed/platform';

if (environment.production) {
  enableProdMode();
}

platformBlessedDynamic().bootstrapModule(AppModule)
  .catch(console.error.bind(console));
