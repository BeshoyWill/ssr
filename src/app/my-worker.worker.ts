/// <reference lib="webworker" />

// my-worker.worker.ts
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

@Injectable()
export class MyWorker {
  // A function to perform heavy computation
  heavyComputation(data: number): number {
    let result = 0;
    for (let i = 0; i < data; i++) {
      result += i;
    }
    return result;
  }
}

// Set up event listener for messages from the main thread
addEventListener('message', ({ data }) => {
  const worker = new MyWorker();
  const result = worker.heavyComputation(data);
  postMessage(result); // Send the result back to the main thread
});
