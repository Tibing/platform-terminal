import { Sanitizer, SecurityContext } from '@angular/core';

export class TerminalSanitizer extends Sanitizer {
  sanitize(context: SecurityContext, value: string): string {
    return value;
  }
}
