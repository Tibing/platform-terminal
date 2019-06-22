import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const spark1 = [1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5];
const spark2 = [4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5];
const spark3 = [1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5];
const spark4 = [1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5];
const spark5 = [4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5];
const spark6 = [1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5];
const spark7 = [4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5];

function refreshSpark() {
  spark1.shift();
  spark1.push(Math.random() * 5 + 1);
  spark2.shift();
  spark2.push(Math.random() * 5 + 1);
  spark3.shift();
  spark3.push(Math.random() * 5 + 1);
  spark4.shift();
  spark4.push(Math.random() * 5 + 1);
  spark5.shift();
  spark5.push(Math.random() * 5 + 1);
  spark6.shift();
  spark6.push(Math.random() * 5 + 1);
  spark7.shift();
  spark7.push(Math.random() * 5 + 1);
  return [
    ['Server1', 'Server2', 'Server3', 'Server4', 'Server5', 'Server6', 'Server7'],
    [spark1, spark2, spark3, spark4, spark5, spark6, spark7],
  ];
}

@Injectable()
export class SparklineService {
  readonly sparkline$: Observable<any> = interval(750)
    .pipe(
      map(() => refreshSpark()),
    );
}
