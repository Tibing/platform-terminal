import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const commands = ['grep', 'node', 'java', 'timer', '~/ls -l', 'netns', 'watchdog', 'gulp', 'tar -xvf', 'awk', 'npm install'];

function generateTable() {
  const data = [];

  for (let i = 0; i < 30; i++) {
    const row = [];
    row.push(commands[Math.round(Math.random() * (commands.length - 1))]);
    row.push(Math.round(Math.random() * 5));
    row.push(Math.round(Math.random() * 100));

    data.push(row);
  }

  return { headers: ['Process', 'Cpu (%)', 'Memory'], data: data };
}

@Injectable()
export class ProcessManagerService {
  readonly process$: Observable<any> = of(generateTable());
}
