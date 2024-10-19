import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setItem(key: string, value: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getItem(key: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  }

  removeItem(key: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.clear();
    }
  }

  // Check if a specific item exists in localStorage
  checkItem(key: string): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(key) !== null;
    }
    return false; // Always return false if on the server
  }
}
