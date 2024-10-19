import { Component } from '@angular/core';
import { WorkerService } from '../../services/workerservice/workerservice.service';

@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [],
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'], // fixed typo here from 'styleUrl'
})
export class WorkerComponent {
  constructor(private _WorkerService: WorkerService) {
    // Check if the worker is initialized
    if (!this._WorkerService.isWorkerInitialized()) {
      console.warn(
        'Web Worker is not initialized. Please check the WorkerService.'
      );
    } else {
      console.log('Worker initialized:', this._WorkerService);
    }
  }

  async performHeavyTask() {
    try {
      const result = await this._WorkerService.runHeavyComputation(100000000);
      console.log('Result from worker:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
