import { Sanitizer, SecurityContext } from '@angular/core';

export class BlessedSanitizer extends Sanitizer {
  sanitize(context: SecurityContext, value: string): string {
    return value;
  }
}

