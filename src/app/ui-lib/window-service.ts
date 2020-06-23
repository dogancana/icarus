import { Injectable } from '@angular/core';

function getWindow(): any {
  return window;
}

@Injectable()
export class WindowRefService {
  // window can later be changed with project env variables on actual dom obj
  get nativeWindow(): Window {
    return getWindow();
  }
}
