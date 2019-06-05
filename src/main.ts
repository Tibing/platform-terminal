import 'core-js/es7/reflect';
import 'zone.js/dist/zone-node';
import { enableProdMode, PlatformRef } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformTerminalDynamic } from './app/terminal/platform';

if (environment.production) {
  enableProdMode();
}

const ref: PlatformRef = platformTerminalDynamic();
ref.bootstrapModule(AppModule)
  .catch(console.error.bind(console));
