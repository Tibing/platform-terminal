import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformTerminalDynamic } from './app/terminal/platform';

if (environment.production) {
  enableProdMode();
}

platformTerminalDynamic().bootstrapModule(AppModule)
  .catch(console.error.bind(console));
