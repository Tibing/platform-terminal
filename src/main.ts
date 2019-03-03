import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformBlessedDynamic } from './app/platform-blessed';
// import { platformConsoleDynamic } from './app/platform-console';

if (environment.production) {
  enableProdMode();
}

// platformConsoleDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
platformBlessedDynamic().bootstrapModule(AppModule)
  .catch(console.error.bind(console));
