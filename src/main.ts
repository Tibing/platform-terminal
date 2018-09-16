import './app/zone-nativescript';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformConsoleDynamic } from './app/platform-console';

if (environment.production) {
  enableProdMode();
}

platformConsoleDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
