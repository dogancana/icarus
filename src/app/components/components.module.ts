import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';

// The module can be divided into several modules in future
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [HeaderComponent],
  providers: [
    {
      provide: Window,
      useValue: window, // TODO use a proper service in future for supporting ssr
    },
  ],
})
export class UILibModule {}
