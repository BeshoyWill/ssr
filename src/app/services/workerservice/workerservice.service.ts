import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  private worker: Worker | null = null;

  constructor() {
    if (typeof Worker !== 'undefined' && typeof import.meta !== 'undefined') {
      this.worker = new Worker(new URL('./my-worker.worker', import.meta.url));
    } else {
      console.warn('Web Workers are not supported in this environment.');
    }
  }

  isWorkerInitialized(): boolean {
    return this.worker !== null;
  }

  runHeavyComputation(data: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (this.worker) {
        this.worker.onmessage = ({ data }) => {
          resolve(data);
        };

        this.worker.onerror = (error) => {
          reject(error);
        };

        // Send the data to the worker
        this.worker.postMessage(data);
      } else {
        reject(new Error('Worker is not initialized'));
      }
    });
  }

  terminateWorker(): void {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
  }
}
