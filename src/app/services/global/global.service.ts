import { Injectable } from '@angular/core';
import { PlatformserviceService } from '../platformservice/platformservice.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(
    private readonly _PlatformserviceService: PlatformserviceService
  ) {}

  getGlobalValue(value: keyof Window): string | null {
    if (this._PlatformserviceService.isBrowser()) {
      return window[value];
    }
    return null;
  }
}
