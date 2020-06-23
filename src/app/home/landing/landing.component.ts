import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { WindowRefService } from 'src/app/ui-lib/window-service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  public timeToRedirect = 5;
  private redirectTimerID: number;
  private timerIntervalID: number;
  private window: Window;

  constructor(
    private router: Router,
    private windowRefService: WindowRefService
  ) {
    this.window = this.windowRefService.nativeWindow;
  }

  ngOnInit(): void {
    this.redirectTimerID = this.window.setTimeout(
      () => this.router.navigate(['/registration']),
      this.timeToRedirect * 1000
    );
    this.timerIntervalID = this.window.setInterval(
      () => (this.timeToRedirect = Math.max(this.timeToRedirect - 1, 0)),
      1000
    );
  }

  ngOnDestroy(): void {
    this.window.clearTimeout(this.redirectTimerID);
    this.window.clearInterval(this.timerIntervalID);
  }
}
