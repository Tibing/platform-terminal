import { COMPILER_OPTIONS, createPlatformFactory, Sanitizer } from '@angular/core';
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
import { DOCUMENT } from '@angular/common';
import { ElementSchemaRegistry } from '@angular/compiler';

import { BlessedElementSchemaRegistry } from './schema-registry';
import { BlessedSanitizer } from './sanitizer';


const COMMON_PROVIDERS = [
  { provide: DOCUMENT, useValue: {} },
  { provide: Sanitizer, useClass: BlessedSanitizer, deps: [] },
];

const COMPILER_PROVIDERS = [
  {
    provide: COMPILER_OPTIONS,
    useValue: {
      providers: [
        { provide: ElementSchemaRegistry, useClass: BlessedElementSchemaRegistry, deps: [] },
      ],
    },
    multi: true,
  },
];

export const platformBlessedDynamic = createPlatformFactory(platformCoreDynamic,
  'blessedDynamic', [...COMMON_PROVIDERS, ...COMPILER_PROVIDERS]);
