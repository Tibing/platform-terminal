import { NgModule } from '@angular/core';

import { AppComponent, OneMoreComponent } from './app.component';
import { InMemoryBrowserPlatform } from './console-renderer';

@NgModule({
  declarations: [
    AppComponent,
    OneMoreComponent,
  ],
  imports: [
    InMemoryBrowserPlatform,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
