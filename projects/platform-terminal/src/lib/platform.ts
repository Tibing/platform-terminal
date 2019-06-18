import 'core-js/es7/reflect';
import 'zone.js/dist/zone-node';

import { COMPILER_OPTIONS, createPlatformFactory, Sanitizer } from '@angular/core';
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
import { DOCUMENT } from '@angular/common';
import { ElementSchemaRegistry } from '@angular/compiler';

import { TerminalElementSchemaRegistry } from './schema-registry';
import { TerminalSanitizer } from './sanitizer';


const COMMON_PROVIDERS = [
  { provide: DOCUMENT, useValue: {} },
  { provide: Sanitizer, useClass: TerminalSanitizer, deps: [] },
];

const COMPILER_PROVIDERS = [
  {
    provide: COMPILER_OPTIONS,
    useValue: {
      providers: [
        { provide: ElementSchemaRegistry, useClass: TerminalElementSchemaRegistry, deps: [] },
      ],
    },
    multi: true,
  },
];

export const platformTerminalDynamic = createPlatformFactory(platformCoreDynamic,
  'terminalDynamic', [...COMMON_PROVIDERS, ...COMPILER_PROVIDERS]);
