import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class TerminalErrorHandler implements ErrorHandler {
  handleError(error: Error): void {
    console.error(error.message, error.stack);
    process.exit(0);
  }
}
