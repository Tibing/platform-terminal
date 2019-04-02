import { COMPILER_OPTIONS, createPlatformFactory, Sanitizer } from '@angular/core';
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
import { DOCUMENT } from '@angular/common';
import { ElementSchemaRegistry } from '@angular/compiler';

import { BlessedElementSchemaRegistry } from './schema-registry';
import { BlessedSanitizer } from './sanitizer';

export const platformBlessedDynamic = createPlatformFactory(platformCoreDynamic, 'blessedDynamic', [
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
