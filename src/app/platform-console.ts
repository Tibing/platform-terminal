import { CompilerOptions, createPlatformFactory, NgModuleFactory, NgModuleRef, PlatformRef, Type } from '@angular/core';
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
import { BootstrapOptions } from '@angular/core/src/application_ref';
import { DOCUMENT } from '@angular/common';

const platformFactory = createPlatformFactory(platformCoreDynamic, 'consoleDynamic', [
  { provide: DOCUMENT, useValue: {} },
]);

export class ConsolePlatformRef extends PlatformRef {
  protected platform: PlatformRef = platformFactory();
  protected bootstrapper: () => any;

  bootstrapModuleFactory<M>(moduleFactory: NgModuleFactory<M>, options?: BootstrapOptions): Promise<NgModuleRef<M>> {
    return this.platform.bootstrapModuleFactory(moduleFactory, options);
  }

  bootstrapModule<M>(moduleType: Type<M>, compilerOptions?: (
    CompilerOptions & BootstrapOptions) | Array<CompilerOptions & BootstrapOptions>): Promise<NgModuleRef<M>> {
    return this.platform.bootstrapModule(moduleType, compilerOptions);
  }
}

export const platformConsoleDynamic = () => new ConsolePlatformRef();

