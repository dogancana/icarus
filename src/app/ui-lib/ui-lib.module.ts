import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { WindowRefService } from './window-service';

// The module can be divided into several modules in future
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [HeaderComponent],
  providers: [WindowRefService],
})
export class UILibModule {}
