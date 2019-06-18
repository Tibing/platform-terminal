import { platformTerminalDynamic } from 'platform-terminal';
import { enableProdMode, PlatformRef } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const ref: PlatformRef = platformTerminalDynamic();
ref.bootstrapModule(AppModule)
  .catch(console.error.bind(console));
