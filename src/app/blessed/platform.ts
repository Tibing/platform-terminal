import {
  COMPILER_OPTIONS,
  CompilerOptions,
  createPlatformFactory,
  NgModuleFactory,
  NgModuleRef,
  PlatformRef,
  Sanitizer,
  SecurityContext,
  Type,
} from '@angular/core';
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
import { BootstrapOptions } from '@angular/core/src/application_ref';
import { DOCUMENT } from '@angular/common';
import { ElementSchemaRegistry } from '@angular/compiler';
import { BlessedElementSchemaRegistry } from './schema-registry';

export class BlessedSanitizer extends Sanitizer {
  sanitize(context: SecurityContext, value: string): string {
    return value;
  }
}

const platformFactory = createPlatformFactory(platformCoreDynamic, 'blessedDynamic', [
  { provide: DOCUMENT, useValue: {} },
  { provide: Sanitizer, useClass: BlessedSanitizer, deps: [] },
  {
    provide: COMPILER_OPTIONS,
    useValue: {
      providers: [
        { provide: ElementSchemaRegistry, useClass: BlessedElementSchemaRegistry, deps: [] },
      ],
    },
    multi: true,
  },
]);

export class BlessedPlatformRef extends PlatformRef {
  protected platform: PlatformRef = platformFactory();
  protected screen;

  bootstrapModuleFactory<M>(moduleFactory: NgModuleFactory<M>, options?: BootstrapOptions): Promise<NgModuleRef<M>> {
    const bootstrapper = () => this.platform.bootstrapModuleFactory(moduleFactory, options);
    this.bootstrap(bootstrapper);
    return Promise.resolve(null);
  }

  bootstrapModule<M>(moduleType: Type<M>, compilerOptions?: (
    CompilerOptions & BootstrapOptions) | Array<CompilerOptions & BootstrapOptions>): Promise<NgModuleRef<M>> {
    const bootstrapper = () => this.platform.bootstrapModule(moduleType, compilerOptions);
    this.bootstrap(bootstrapper);
    return Promise.resolve(null);
  }

  protected bootstrap<M>(bootstrapper: () => Promise<NgModuleRef<M>>) {
    bootstrapper().then(() => {
    });
  }
}

export const platformBlessedDynamic = () => new BlessedPlatformRef();

