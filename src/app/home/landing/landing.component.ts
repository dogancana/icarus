import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  public timeToRedirect = 5;
  private redirectTimerID: number;
  private timerIntervalID: number;
  constructor(private router: Router, private window: Window) {}

  ngOnInit(): void {
    this.redirectTimerID = this.window.setTimeout(
      () => this.router.navigate(['/registration']),
      this.timeToRedirect * 1000
    );
    this.timerIntervalID = this.window.setInterval(
      () => this.timeToRedirect--,
      1000
    );
  }

  ngOnDestroy(): void {
    this.window.clearTimeout(this.redirectTimerID);
    this.window.clearInterval(this.timerIntervalID);
  }
}
